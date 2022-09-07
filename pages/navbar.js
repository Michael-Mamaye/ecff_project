import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../public/Logo White.svg";

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`brightness-200 z-20 absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-start filter px-4 drop-shadow-md bg-black bg-opacity-50 h-20">
        {" "}
        {/*logo container*/}
        <NavLink className="text-xl font-semibold" to="/">
          <span>
            <Image
              src={LogoWhite}
              alt="this text"
              width={100}
              height={25}
              color="black"
            />
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col ml-4 m-2">
        <NavLink className="text-xl font-medium my-4 text-white" to="/about">
          About
        </NavLink>
        <NavLink className="text-xl font-normal my-4 text-white" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () =>
      screen.width > 760 ? setOpen(false) : true
    );
  }, []);

  return (
    <nav
      style={{ width: "100%" }}
      className="brightness-200 absolute flex justify-between bg-black bg-opacity-50 md:bg-transparent px-10 py-4 h-20 items-center"
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex justify-around">
        {!open && (
          <Image
            src={LogoWhite}
            alt="this text"
            width={100}
            height={25}
            color="black"
          />
        )}
      </div>
      <div className="flex">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex justify-between gap-5 text-white">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/publications">PUBLUCATIONS</NavLink>
          <NavLink to="/partners">PARTNERS</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
        </div>
      </div>
    </nav>
  );
}
