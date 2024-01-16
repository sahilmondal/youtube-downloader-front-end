const Faqs = () => {
  var data: any = [
    {
      index: "1",
      question: "What is Youtube video downloader?",
      answer: [
        "Youtube Video Downloader is a tool that allows you to download Youtube videos for free. Support download MP4, 3GP, WEBM videos, convert Youtube videos to MP3 with high quality.",
      ],
    },
    {
      index: "2",
      question: "How to download Youtube videos?",
      answer: [
        "Step 1: Open the Youtube app on your phone or visit the Youtube.com website.",
        " Step 2: Find and open the video you want to download and click the Share button then continue pressing the Copy link button.",
        "Step 3: Go to TubeSaver website, paste the copied Youtube link in the search box and press the Download button. (TubeSaver works well on Chrome, Firefox or any other browser.)",
      ],
    },
    {
      index: "3",
      question: "How to download Youtube videos on Android phone?",
      answer: [
        "Copy the link to the Youtube video → Go to TubeSaver → Paste the copied Youtube link in the search box → Download.",
      ],
    },
    {
      index: "4",
      question: "How to download Youtube videos on iPhone?",
      answer: [
        "For iPhone, you need to use Safari browser on iOS 13 or get Documents by Readdle app and go to TubeSaver → Paste Youtube video link → Download (see instructions here).",
      ],
    },
    {
      index: "5",
      question: "Can I convert Youtube videos to mp3?",
      answer: [
        "Our Youtube video downloader in addition to supporting downloading Youtube videos to your device in many different formats. TubeSaver also has Youtube to mp3 feature that allows you to convert Youtube videos to high quality MP3, OGG, M4A: 320kbps, 256kbps, 192kbps, 128kbps, 64kbps.",
      ],
    },
    {
      index: "6",
      question: 'Do I have to pay for the "Download Youtube videos" service?',
      answer: [
        "Absolutely not. TubeSaver is a free Youtube video downloader, you can use all the features of TubeSaver like: download MP4, 3GP, WEBM videos, convert Youtube to MP3 without any limitation.",
      ],
    },
    {
      index: "7",
      question: "Where are downloaded Youtube videos saved?",
      answer: [
        'Please check the "Downloads" folder in your phone or the "download history" section of your browser.',
      ],
    },
    {
      index: "8",
      question: "What languages ​​does Youtube Downloader support?",
      answer: [
        "TubeSaver is a global support tool, we currently support over 20 popular languages. We will continuously update new language packs to help users download videos from Youtube with the best experience.",
      ],
    },
  ];
  return (
    <section
      id="FaQs"
      className="md:max-w-[1200px] w-[90vw] mx-auto p-12 bg-slate-800 rounded my-12"
    >
      <h1 className="text-center text-[1.9rem] font-bold text-red-400 mb-12">
        Frequently Asked Questions
      </h1>
      {data.map((item: any) => (
        <div key={item.index} className="border-b-[1px] my-6">
          <h2 className="text-xl font-bold text-gray-200">
            {item.index + ". " + item.question}
          </h2>
          {item.answer.map((ans: any) => (
            <h4 className="text-sm my-4 text-gray-300" key={ans.index}>
              {"- " + ans}
            </h4>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Faqs;
