import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Video Downloader",
  description:
    "This is the fastest Youtube Downloader tool that allows you to easily convert and download videos and audio from youtube for free and in the best available quality. Y2Mate is the ultimate tool for downloading unlimited youtube videos without any need for registration. You can quickly convert and download hundreds of videos and music files directly from youtube and other social media websites. We support all audio and video formats like MP3, MP4, M4V, FLV, WEBM, 3GP, WMV, AVI, etc.; the most fantastic thing is that it's completely free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
