import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      //   const response = await fetch("https://dummyjson.com/user/login", {
      //     method: "POST",
      //     body: input,
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

      localStorage.setItem("email_login", input.email);
      navigate("/");
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Success login !",
      });
    } catch (error) {
      console.log(error, "<< error login");
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
  // const onSubmit = (d) => console.log(JSON.stringify(d));
  return (
    <>
      <div className="w-screen h-screen bg-cover flex bg-[#9bbefe]">
        <div className="bg-white rounded-lg w-11/12 h-11/12 m-5">
          <div className="p-5">
            <img src="/blue-waves.png" alt="logo" className="w-1/4 m-3" />
            <h1 className="text-5xl font-bold">Masuk Ke Platform Task</h1>
            <p className="text-slate-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              enim.
            </p>
            <form onSubmit={onSubmit} className="mt-4 p-7">
              <div className="text-2xl font-semibold grid">
                <label className="text-slate-600" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-xl"
                />
              </div>
              <div className="text-2xl font-semibold grid mt-6">
                <label className="text-slate-600" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 invalid:text-pink-700 invalid:ring-pink-700 text-xl"
                />
              </div>
              <button
                className="py-2 px-4 bg-sky-800 text-xl rounded font-semibold text-white mt-11"
                type="submit"
              >
                Login to your account
              </button>
              <p className="text-xl mt-5">
                Don't have an account ?
                <span
                  className="hover:text-sky-700 hover:underline cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </div>
        <div
          className="w-screen h-screen bg-cover bg-center p-10"
          style={{ backgroundImage: "url('/login.jpg')" }}
        ></div>
      </div>
    </>
  );
}
