import NavBar from "./NavBar";

export default function () {
    return (
        <>
        <NavBar />
  <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
    Create New Blog
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html: "\n  body {background:white !important;}\n"
    }}
  />
  <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input
      className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
      spellCheck="false"
      placeholder="Title"
      type="text"
    />
    <textarea
      className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
      spellCheck="false"
      placeholder="Describe everything about this post here"
      defaultValue={""}
    />
    <br/>
    <div className="buttons flex">
      <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
        Cancel
      </div>
      <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
        Post
      </div>
    </div>
  </div>
</>

    )
}