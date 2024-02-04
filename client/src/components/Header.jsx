import Logo from "../assets/images/logo.png";
import { MdEdit } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { BsGearFill, BsGrid1X2Fill } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const [title, setTitle] = useState("Untitled");
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  let refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  function handleClickOutside(e) {
    if (!refOne.current.contains(e.target)) {
      setEditMode(false);
    } else {
      return;
    }
  }
  return (
    <nav className="flex items-center justify-between bg-black px-1 text-white sm:px-2 ">
      <div className="    flex  items-center gap-2 md:h-16 ">
        <Link to={"/"} className="w-[16px] sm:w-[24px] md:w-[24px]">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="">
          <div className="flex items-center gap-1 ">
            {!editMode ? (
              <>
                <span className="text-xs font-semibold sm:text-xl ">
                  {title}
                </span>
                <MdEdit
                  onClick={() => {
                    setEditMode(true);
                  }}
                  className="sm:text-md cursor-pointer text-sm  text-white md:text-xl"
                />
              </>
            ) : (
              <input
                ref={refOne}
                type="text"
                name="titleName"
                className={` border-none bg-black text-xs font-semibold text-white outline-none sm:text-xl`}
                value={title}
                onChange={(e) => {
                  let val = e.target.value;
                  setTitle(val);
                }}
              />
            )}
          </div>
          <div className="text-xs text-slate-400 sm:text-sm">
            Captain Anonymous
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="btn flex items-center gap-1 max-md:hidden "
          onClick={() => {
            if (!user) {
              navigate("/login");
            }
          }}
        >
          <FaCloud /> Save
        </button>
        <button
          type="button"
          className="btn flex items-center gap-1 max-md:hidden"
        >
          <BsGearFill />
          Setting
        </button>
        <button type="button" className="btn max-md:hidden">
          <BsGrid1X2Fill />
        </button>
        <button type="button" className="btn md:hidden">
          <MdMenuOpen />
        </button>
        <Link
          to={"/signup"}
          className="btn flex items-center gap-1 bg-green-400 text-black"
        >
          Sign Up
        </Link>
        <Link to={"/login"} className="btn flex items-center gap-1">
          Log In
        </Link>
      </div>
    </nav>
  );
}
