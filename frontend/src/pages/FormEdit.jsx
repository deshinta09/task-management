import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../config/instance";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById } from "../feature/taskSlice";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";

export default function FormEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.detail);
  const [input, setInput] = useState({
    title: "",
    description: "",
    status: "",
  });
  const navigate = useNavigate();
  //   console.log(input.title, "<< data task");
  //   console.log(task.title, "<<data task");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      let { data } = await instance({
        method: "put",
        url: `/tasks/${id}`,
        data: input,
      });
      Swal.fire({
        title: "Success",
        icon: "success",
        text: data.message,
      });
      navigate("/");
    } catch (error) {
      console.log(error, "<< error edit task");
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    dispatch(fetchTaskById(id));
    setInput({
      title: task.title,
      description: task.description,
      status: task.status,
    });
  }, []);
  return (
    <>
      <Navbar page="edit-task" />
      <div className="w-screen p-10">
        <div className="w-2/5 border border-slate-200 shadow m-auto rounded mt-5">
          <h1 className="pt-8 text-center text-2xl font-semibold w-2/3 m-auto">
            Edit task {input.title}
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
                  value={input.title}
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
                  value={input.status}
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
                  value={input.description}
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* description end */}
            </div>

            <button
              className="py-2 px-4 bg-sky-800 text-xl rounded font-semibold text-white mt-11"
              type="submit"
            >
              Edit task
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
