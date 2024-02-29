import InvalidLogin from "../invalidLogin/InvalidLogin";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import NavBar from "./NavBar";

export default function () {
  const [values, handleChange] = useForm({ content: "", title: "" });

  let userData = window.localStorage.getItem("userData");
  userData = JSON.parse(userData);
  let userId = userData._id;
  let name = userData.firstName + " " + userData.lastName;

  const blogData = {
    blog: {
      content: values.content,
      title: values.title,
      name: name,
    },
    ID: userId, // Assuming you want to use the userId from localStorage
  };

  const handleSubmit = async (e) => {
    axios
      .post("http://localhost:8080/blog/create", blogData)
      .then((res) => {
        alert("Blog has been created!");
      })
      .catch((err) => {
        alert("Blog has not  been created!");
      });
  };

  const loggedIn = window.localStorage.getItem("isLoggedIn");
  return loggedIn ? (
    <>
      <NavBar />
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        Create New Blog
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: "\n  body {background:white !important;}\n",
        }}
      />
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          defaultValue={""}
          name="content"
          value={values.content}
          onChange={handleChange}
        />
        <br />
        <div className="buttons flex">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            Cancel
          </div>
          <a
            onClick={handleSubmit}
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
          >
            Post
          </a>
        </div>
      </div>
    </>
  ) : (
    <InvalidLogin />
  );
}
