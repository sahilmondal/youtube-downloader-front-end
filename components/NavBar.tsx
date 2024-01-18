"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";
import { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="backdrop-blur-sm w-[100vw] h-[50px] sticky  top-0 py-8">
      <div className="py-[12px] w-[85%] max-w-[1200px] relative  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-b-[--border] border-b-[1px] flex justify-between items-center ">
        {/* logo */}
        <Link href="/" className="flex items-center justify-between gap-2">
          <Image src={logo} alt="vidimix logo" width={48} />
          <h1 id="logo" className="text-[24px] font-bold">
            Vidimix
          </h1>
        </Link>
        {/* logo end */}

        {/* hamburger menu  */}

        <div
          className={
            isClicked
              ? "is-active hamburger hover:cursor-pointer relative z-10 md:hidden"
              : "hamburger hover:cursor-pointer relative z-10 md:hidden"
          }
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="line w-[30px] h-[3px] bg-[--light] block my-[8px] mx-auto transition-all"></span>
          <span className="line w-[30px] h-[3px] bg-[--light] block my-[8px] mx-auto transition-all"></span>
          <span className="line w-[30px] h-[3px] bg-[--light] block my-[8px] mx-auto transition-all"></span>
          {/* menu icon end  */}
        </div>
        <div
          className={
            isClicked
              ? "top-[0] left-[-9%]  transition-all gap-14 font-display items-center justify-center bg-gradient-to-br from-[#000000] to-[#300303] bg-opacity-10 text-[2rem] flex flex-col absolute bg-blue-800 w-[100vw] h-[100vh]  md:hidden"
              : "top-[0] left-[120%]  transition-all gap-8 font-display items-center justify-center bg-gradient-to-br from-[#000000] to-[#300303] bg-opacity-10 text-[2rem] flex flex-col absolute bg-blue-800 w-[100vw] h-[100vh]  md:hidden"
          }
        >
          <Link
            href="/"
            onClick={() => setIsClicked(!isClicked)}
            className={
              isClicked
                ? " animate-fade-in hover:text-red-400"
                : "hover:text-red-400"
            }
          >
            Home
          </Link>
          <Link
            href="/audio"
            onClick={() => setIsClicked(!isClicked)}
            className={
              isClicked
                ? " animate-fade-in hover:text-red-400"
                : "hover:text-red-400"
            }
          >
            YT to Mp3 converter
          </Link>
          <Link
            href="/terms"
            onClick={() => setIsClicked(!isClicked)}
            className={
              isClicked
                ? " animate-fade-in hover:text-red-400"
                : "hover:text-red-400"
            }
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            onClick={() => setIsClicked(!isClicked)}
            className={
              isClicked
                ? " animate-fade-in hover:text-red-400"
                : "hover:text-red-400"
            }
          >
            Privacy Policy
          </Link>
          <Link
            href="/contacts"
            onClick={() => setIsClicked(!isClicked)}
            className={
              isClicked
                ? " animate-fade-in hover:text-red-400"
                : "hover:text-red-400"
            }
          >
            {" "}
            Contacts
          </Link>
        </div>

        <div className=" gap-8 font-display items-center text-[1rem] hidden md:flex">
          <Link href="/audio" className=" hover:text-red-400">
            YT to Mp3 converter
          </Link>
          <Link href="/FaQs" className=" hover:text-red-400">
            FaQs
          </Link>
          <Link href="/privacy" className=" hover:text-red-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className=" hover:text-red-400">
            Terms of Service
          </Link>
          <Link href="/contacts" className=" hover:text-red-400">
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
