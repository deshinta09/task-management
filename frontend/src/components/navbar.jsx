import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Navbar({ page }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("email_login");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Success logout !",
    });
    navigate("/login");
  }

  return (
    <>
      <div className="w-screen bg-[#9bbefe] p-3">
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center">
            <img
              src="/blue-waves.png"
              alt="Logo"
              className="w-28 rounded-full"
            />
            <h1 className="text-2xl font-semibold ml-5">Task</h1>
          </div>
          <div className="flex gap-5 text-xl">
            {page === "home" ? (
              <h1 className="py-2 px-3 bg-sky-800 rounded cursor-pointer text-white">
                Home
              </h1>
            ) : (
              <h1
                className="py-2 px-3 hover:bg-sky-800 rounded cursor-pointer hover:text-white"
                onClick={() => navigate("/")}
              >
                Home
              </h1>
            )}
            {page === "add-task" ? (
              <h1 className="py-2 px-3 bg-sky-800 rounded cursor-pointer text-white">
                Add task
              </h1>
            ) : (
              <h1
                className="py-2 px-3 hover:bg-sky-800 rounded cursor-pointer hover:text-white"
                onClick={() => navigate("/add-task")}
              >
                Add Task
              </h1>
            )}
            <h1
              className="py-2 px-3 hover:bg-sky-800 rounded cursor-pointer hover:text-white"
              onClick={handleLogout}
            >
              Log Out
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
