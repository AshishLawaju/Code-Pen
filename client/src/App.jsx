import { Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Header from "./components/Header";
import NewProject from "./components/NewProject";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NewProject />} />

        {/*  */}
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}
