import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();
  let userData = window.localStorage.getItem("userData");
  userData = JSON.parse(userData);
  let fullName = userData.firstName + " " + userData.lastName;
  console.log(userData.firstName);

  const handleLogout = () => {
    // alert("logout");
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            // href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              //   width="50"
              //   height="250"
              src="https://img.icons8.com/external-flat-02-chattapat-/64/external-blog-social-media-flat-02-chattapat-.png"
              className="h-8"
              alt="Blog App Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blog App
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a className="text-sm  text-gray-500 dark:text-white">{fullName}</a>
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              onClick={handleLogout}
            >
              Sign Out
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/home"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/createBlog"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Create Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
