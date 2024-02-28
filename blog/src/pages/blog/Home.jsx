import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Blog from "./Blog";

export default function () {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    axios
      .get("http://localhost:8080/blog/display")
      .then((res) => {
        let temp = [];
        for (let i = 0; i < res.data.length; i++) {
          let data = res.data[i];
          temp.push(
            <Blog
              title={data.title}
              content={data.content}
              name={data.name}
              date={data.date}
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

  return (
    <>
      <NavBar />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl "></div>
        <div className="mb-16">{blogs}</div>
      </main>
    </>
  );
}
