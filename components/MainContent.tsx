"use client";
import Link from "next/link";
import axios from "axios";
// import Downloader from "./Downloader";
import { useState } from "react";

const MainContent = () => {
  const [urlLink, setUrlLink] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleClick = async (e: any) => {
    e.preventDefault();
    const server: any = process.env.NEXT_PUBLIC_SERVER;
    console.log(server);
    setClicked(true);
    let myUrl;
    await axios
      .post(server, { videoUrl: urlLink }, { responseType: "blob" })
      .then((response) => {
        myUrl = (window.URL || window.webkitURL).createObjectURL(
          new Blob([response.data])
        );
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    // download link
    const link: any = document.createElement("a");
    link.href = myUrl;
    link.download = "video.mp4";
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);

    setClicked(false);
    setUrlLink("");

    //# test playback
  };

  return (
    <div className="max-w-[1200px] text-center bg-slate-300 mx-auto w-[90vw]  px-6  py-[8rem] my-10 border-gray-200 rounded text-black">
      <h1 className="text-[2rem] mb-8 font-bold text-gray-800">
        YouTube Downloader (shorts)
      </h1>
      <form
        method="post"
        className="flex flex-col justify-center items-center py-6"
      >
        <input
          id="linkInput"
          type="text"
          placeholder="Paste your link here..."
          name="link"
          value={urlLink}
          required
          onChange={(e) => {
            setUrlLink(e.target.value);
          }}
          className="w-[90%] p-4 rounded "
        />
        <button
          type="button"
          onClick={handleClick}
          className="bg-red-600 hover:bg-gray-400 text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center w-[50%] md:w-[30%] my-4 text-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="loading"
            className={
              clicked
                ? "fill-current w-6 h-6 mr-2 animate-spin block"
                : "fill-current w-6 h-6 mr-2 animate-spin hidden"
            }
            viewBox="0 0 32 32"
          >
            <g data-name="Looding 19">
              <path d="M29.89 15.81a2.51 2.51 0 1 0-5 .45 9.65 9.65 0 0 1-1.68 6.34 10.24 10.24 0 0 1-5.74 4 10.71 10.71 0 0 1-7.38-.7 11.44 11.44 0 0 1-5.48-5.62A12.07 12.07 0 0 0 9.46 27 12.58 12.58 0 0 0 17.9 29a13.31 13.31 0 0 0 8.18-4 14 14 0 0 0 3.81-8.75v-.08A2.29 2.29 0 0 0 29.89 15.81zM7.11 15.74A9.65 9.65 0 0 1 8.79 9.4a10.24 10.24 0 0 1 5.74-4 10.71 10.71 0 0 1 7.38.7 11.44 11.44 0 0 1 5.48 5.62A12.07 12.07 0 0 0 22.54 5 12.58 12.58 0 0 0 14.1 3 13.31 13.31 0 0 0 5.92 7a14 14 0 0 0-3.81 8.75v.08a2.29 2.29 0 0 0 0 .37 2.51 2.51 0 1 0 5-.45z"></path>
            </g>
          </svg>
          <svg
            className={
              clicked
                ? "fill-current w-4 h-4 mr-2 hidden"
                : "fill-current w-4 h-4 mr-2 block"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>{clicked ? "Starting" : "Download"}</span>
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
      {/* <Downloader /> */}
    </div>
  );
};

export default MainContent;
