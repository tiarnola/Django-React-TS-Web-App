interface Note {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

interface NoteProps {
  note: Note;
  onDelete: (id: number) => void;
}

function Note({ note, onDelete }: NoteProps) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p className="text-[#999]">{note.title}</p>
          <p className="text-[#999]">{note.content}</p>
          <p className="text-[#999] text-sm">{formattedDate}</p>
          <button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
