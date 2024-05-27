import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, Register, NotFound } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import "../src/index.css"

function Logout() {
  localStorage.clear();
  return <Navigate to="/login/" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/register" element={<RegisterAndLogout />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
