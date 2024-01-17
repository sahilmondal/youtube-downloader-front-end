"use client";
const video = "https://www.w3schools.com/html/movie.mp4";

const Downloader = () => {
  const handleClick = async () => {
    const url = video;
    const link = document.createElement("a");
    link.href = url;
    link.download = "video.mp4";
    link.click();
  };
  return (
    <div>
      <video controls autoPlay loop muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <button type="button" onClick={handleClick}>
        download
      </button>
    </div>
  );
};

export default Downloader;
