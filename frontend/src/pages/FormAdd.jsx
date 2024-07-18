import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function FormAdd() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    status: "",
  });
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        body: input,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = await response.json();

      if (response.ok) {
        navigate("/");
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Success create new user !",
        });
      } else {
        Swal.fire({
          title: "Oops...",
          icon: "error",
          text: responseBody.message,
        });
      }
    } catch (error) {
      console.log(error, "<< error add new user");
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }

  return (
    <>
      <Navbar page="add-task" />
      <div className="w-screen p-10">
        <div className="w-2/5 border border-slate-200 shadow m-auto rounded mt-5">
          <h1 className="pt-8 text-center text-2xl font-semibold">
            Add New task
          </h1>
          <form onSubmit={onSubmit} className="mt-4 p-7">
            <div className="p-5">
              {/* title */}
              <div className="text-xl font-semibold grid mt-3">
                <label className="text-slate-600" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setInput({ ...input, title: e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* title end */}
              {/* status */}
              <div className="text-xl font-semibold grid mt-3">
                <label className="text-slate-600" htmlFor="status">
                  Status
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setInput({ ...input, status: e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* title end */}
              {/* description */}
              <div className="text-xl font-semibold grid mt-3">
                <label className="text-slate-600" htmlFor="description">
                  Descrition
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setInput({ ...input, description: e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* description end */}
            </div>

            <button
              className="py-2 px-4 bg-sky-800 text-xl rounded font-semibold text-white mt-11"
              type="submit"
            >
              Create new task
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
