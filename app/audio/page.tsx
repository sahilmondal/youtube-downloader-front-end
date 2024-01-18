import Info from "@/components/Info";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <MainContent
        text="YouTube to Mp3 converter"
        server={process.env.NEXT_PUBLIC_MP3SERVER}
        file="tubesaver-mp3.mp3"
      />
      <Info />
    </>
  );
}
