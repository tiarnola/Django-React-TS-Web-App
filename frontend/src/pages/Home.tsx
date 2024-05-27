import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

export const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };

  const deleteNote = (id: number) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto">
      <div className="flex flex-col items-center justify-center min-h-full px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-10">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
              Notes
            </h1>
            <div className="space-y-4">
              {notes.map((note) => (
                <Note note={note} onDelete={deleteNote} key={note.id} />
              ))}
            </div>
            <div>
            <h2 className="text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Create a Note
            </h2>
            <form onSubmit={createNote} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content:
                </label>
                <textarea
                  id="content"
                  name="content"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              ></input>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
