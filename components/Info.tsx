const Info = () => {
  return (
    <section className="p-6 my-12 text-center md:max-w-[60vw] mx-auto">
      <h1 className="text-[2rem] font-bold text-gray-200">
        Best Youtube Video Downloader
      </h1>
      <p className="my-2 text-gray-400">
        TubeSaver is the fastest Youtube Downloader tool that allows you to
        easily convert and download videos and audio from youtube for free and
        in the best available quality. TubeSaver is the ultimate tool for
        downloading unlimited youtube videos without any need for registration.
        You can quickly convert and download hundreds of videos and music files
        directly from youtube and other social media websites.The best thing is
        that it's completely free.
      </p>

      <div
        className="flex flex-col gap-12 md:flex-row text-left
       border-t-[1px]  border-gray-500 my-12 py-6"
      >
        <div>
          <h3 className="font-bold text-lg text-gray-100 my-2">
            How to Download Youtube videos with TubeSaver?
          </h3>
          <div>
            <ol className=" list-decimal list-inside text-base  text-gray-300">
              <li>Open Youtube and copy the video URL you want to download.</li>
              <li>
                Paste the video URL in the Search box, Tool will fetch video
                info.
              </li>
              <li>
                Select the Video or Audio quality you need and click the
                "Convert" button
              </li>
              <li>
                After the conversion is successfully completed, hit the
                "Download" button.
              </li>
              <li>
                Once the video is downloaded, you can play it whenever and
                wherever you want.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-100  my-2">
            Why use our Online Video Downloader?
          </h3>
          <div>
            <ol className="list-decimal list-inside text-base  text-gray-300">
              <li>
                Unlimited Conversions, so you can convert all your videos.
              </li>
              <li>High-Speed encoding to convert your videos faster.</li>
              <li>Unlimited Downloads, convert as much as you can.</li>
              <li>No Signup required, our service is totally free.</li>
              <li>Support Downloading multiple formats, e.g. MP4 and MP3.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
