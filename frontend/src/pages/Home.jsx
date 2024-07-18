import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../feature/taskSlice";
import Navbar from "../components/navbar";

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.list);

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
            <tr>
              <td className="p-3 px-5">User 1</td>
              <td className="py-3 px-5 text-center">secret</td>
              <td className="py-3 px-5 text-center">active</td>
              <td className="py-3 px-5 text-center">10-11-2024</td>
              <td className="py-3 px-5 text-center">hapus</td>
            </tr>
            <tr>
              <td className="py-3 px-5">User 2</td>
              <td className="py-3 px-5 text-center">secret</td>
              <td className="py-3 px-5 text-center">active</td>
              <td className="py-3 px-5 text-center">10-11-2024</td>
              <td className="py-3 px-5 text-center">hapus</td>
            </tr>
            <tr>
              <td className="py-3 px-5">User 3</td>
              <td className="py-3 px-5 text-center">secret</td>
              <td className="py-3 px-5 text-center">active</td>
              <td className="py-3 px-5 text-center">10-11-2024</td>
              <td className="py-3 px-5 text-center">hapus</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
