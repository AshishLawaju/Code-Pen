import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  };
  return (
    <div className="mx-auto mt-12 flex w-[440px] flex-col items-center border border-t-8 border-green-400">
      <div className="mt-3 text-2xl font-bold">Sign Up!</div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={registerUser.name}
            onChange={handleInput}
            className="w-[300px] bg-slate-200"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label htmlFor="username" className="text-sm">
            Choose a username
          </label>
          <input
            type="text"
            name="username"
            value={registerUser.username}
            onChange={handleInput}
            className="w-[300px] bg-slate-200"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={registerUser.email}
            onChange={handleInput}
            className="w-[300px] bg-slate-200"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label htmlFor="password" className="text-sm">
            Choose Password
          </label>
          <input
            type="password"
            name="password"
            value={registerUser.password}
            onChange={handleInput}
            className="w-[300px] bg-slate-200"
          />
        </div>

        <button
          type="submit"
          className="mb-8 mt-8 w-full rounded-sm bg-green-600 py-2 text-white"
        >
          Sign Up and Save This Pen
        </button>
      </form>

      <p className="text-center mb-8"> Already have an account? <Link to={"/login"} className="text-green-500">Log in</Link></p>
    </div>
  );
}
