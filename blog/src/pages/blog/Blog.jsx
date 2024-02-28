export default function (props) {
  return (
    <article className="mx-auto w-full max-w-2xl mb-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert border border-gray-300 dark:border-gray-700 p-4 shadow-lg rounded-md">
      <header className="mb-4 lg:mb-6 not-format">
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                {props.name}
              </a>
              <p className="text-base text-gray-500 dark:text-gray-400">
                <time
                  pubdate=""
                  dateTime="2022-02-08"
                  title="February 8th, 2022"
                >
                  {props.date}
                </time>
              </p>
            </div>
          </div>
        </address>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {props.title}
        </h1>
      </header>
      <p className="lead">{props.content}</p>
    </article>
  );
}
