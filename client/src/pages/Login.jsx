import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.name;
    setLoginUser({ ...loginUser, [name]: value });
  };
  return (
    <>
      <div className="mx-auto mt-12 flex max-w-[440px] flex-col  items-center border border-t-8 border-green-400">
        <p className="mt-3 text-2xl font-bold ">LogIn Here!</p>

        <form onSubmit={handleSubmit}>
          <div className="mt-4 flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={loginUser.username}
              onChange={handleInput}
              className="w-[300px] bg-slate-200"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">
              Password
            </label>
            <input
              type="text"
              name="name"
              value={loginUser.password}
              onChange={handleInput}
              className="w-[300px] bg-slate-200"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-green-500 py-2 text-white"
          >
            Login
          </button>
        </form>

        <p className="my-12">
          Need to crate an account?{" "}
          <Link to="/signup" className="text-sm text-green-500 ">
            SignUp for CodePen
          </Link>{" "}
        </p>
      </div>
    </>
  );
}
