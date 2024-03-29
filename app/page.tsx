import Info from "@/components/Info";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <MainContent
        text="YouTube Downloader (shorts)"
        server={process.env.NEXT_PUBLIC_SERVER}
        file="tubesaver-yt.mp4"
      />
      <Info />
    </>
  );
}
