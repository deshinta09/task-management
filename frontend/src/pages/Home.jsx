import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../feature/taskSlice";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import instance from "../config/instance";

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.list);
  const navigate = useNavigate();

  async function handleDelete(id) {
    try {
      let { data } = await instance({ method: "delete", url: `/tasks/${id}` });
      Swal.fire({
        title: "Success",
        icon: "success",
        text: data.message,
      });
      dispatch(fetchTask());
    } catch (error) {
      console.log(error, "<< error delete task");
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    dispatch(fetchTask());
  }, []);

  // console.log(tasks, "<= semua data task di page home");

  return (
    <>
      <Navbar page="home" />
      <h1 className="text-2xl text-center my-10 font-bold">List Task</h1>
      <div className="w-screen">
        <table className="w-11/12 m-auto">
          <thead className="font-bold border text-xl">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Description</th>
              <th className="p-3">Status</th>
              <th className="p-3">CreatedAt</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y text-lg">
            {tasks.map((el) => (
              <tr key={el.id}>
                <td className="p-3 px-5">{el.title}</td>
                <td className="py-3 px-5 text-center">{el.description}</td>
                <td className="py-3 px-5 text-center">{el.status}</td>
                <td className="py-3 px-5 text-center">
                  {el.created_at.split("T")[0]}
                </td>
                <td className="py-3 px-5 flex gap-3 justify-evenly items-center">
                  <button
                    className="rounded py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-800"
                    onClick={() => navigate(`/edit-task/${el.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded py-2 px-4 bg-red-500 text-white hover:bg-red-800"
                    onClick={() => handleDelete(el.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
