import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Blog from "./Blog";
import InvalidLogin from "../invalidLogin/InvalidLogin";

export default function () {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    axios
      .get("http://localhost:8080/blog/display")
      .then((res) => {
        let temp = [];
        for (let i = res.data.length - 1; i >= 0; i--) {
          let data = res.data[i];
          let dateObj = new Date(data.date);
          let formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          temp.push(
            <Blog
              title={data.title}
              content={data.content}
              name={data.name}
              date={formattedDate}
            />
          );
        }
        setBlogs(temp);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return loggedIn ? (
    <>
      <NavBar />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl "></div>
        <div className="mb-16">{blogs}</div>
      </main>
    </>
  ) : (
    <>
      <InvalidLogin />
    </>
  );
}
