import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center border-t-[1px] border-gray-400 py-12 px-6">
      {/* footer links  */}
      <div className="flex justify-center items-center gap-4 mb-6">
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
      <h2>
        © 2024 <span className=" atext-red-400">TubeSaver</span> - Your favorite
        video converter.
      </h2>
      <h2>Made with 💗 by Sahil Mondal.</h2>
    </footer>
  );
};

export default Footer;
