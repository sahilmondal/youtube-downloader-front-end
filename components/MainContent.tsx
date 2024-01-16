import Link from "next/link";

const MainContent = () => {
  return (
    <div className="max-w-[1200px] text-center bg-slate-300 mx-auto w-[90vw]  px-6  py-[8rem] my-10 border-gray-200 rounded text-black">
      <h1 className="text-[2rem] mb-8 font-bold text-gray-800">
        YouTube Downloader
      </h1>
      <form
        method="post"
        className="flex flex-col justify-center items-center py-6"
      >
        <input
          type="text"
          placeholder="Paste your link here..."
          name="link"
          required
          id="link"
          className="w-[90%] p-4 rounded "
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-gray-400 text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center w-[50%] md:w-[30%] my-4 text-center justify-center"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Search</span>
        </button>
      </form>
      <h2 className="text-xs">
        By using our service you are accepting our{" "}
        <Link href="/terms" className="text-blue-600">
          Terms of service
        </Link>{" "}
        &{" "}
        <Link href="/privacy" className="text-blue-600">
          Privacy policy
        </Link>
      </h2>
    </div>
  );
};

export default MainContent;
