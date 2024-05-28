import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <a
      onClick={handleLogout}
      className="text-sm font-light text-gray-500 dark:text-gray-400 font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
    >
      Logout
    </a>
  );
};

export default Logout;
