import Image from "next/image";
import Logo from "@/public/logo.webp";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="py-6 border-b-[1px] border-gray-500 text-center flex mx-auto justify-center md:justify-between items-center max-w-[1200px]">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image src={Logo} alt="TubeSaver logo" className="w-[2rem]" />
        <h1 className="text-red-600 font-black text-2xl">TubeSaver</h1>
      </Link>
      <div className="  hidden md:flex justify-center items-center gap-4 ">
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
    </nav>
  );
};

export default NavBar;
