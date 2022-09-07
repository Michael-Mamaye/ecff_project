import React from "react";
import EcffLogo from "../public/Logo White.svg";
import Image from "next/Image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-5  text-white auto-cols-max bg-[#810102] px-10 py-10 gap-6">
        <div className="flex-col ">
          <Image src={EcffLogo.src} alt="ecff logo" width={70} height={50} />
          <p className="flex overflow-hidden">
            lorem ipsum doloe consecafdas lorem ipsum doloe consecafdas lorem
            ipsum doloe consecafdas lorem ipsum doloe consecafdas lorem ipsum
            doloe consecafdas
          </p>
        </div>
        <div className="flex-col">
          <p className="text-xl font-semibold pt-3 pb-4 gap-4">Quick Links</p>
          <Link href="/">Home</Link>
          <br />
          <Link href="/about">About Us</Link>
          <br />
          <Link href="#">Projects</Link>
          <br />
          <Link href="#">Resources</Link>
          <br />
        </div>
        <div className="flex-col">
          <p className="text-xl font-semibold pt-3 pb-4 gap-4">About Us</p>
          <Link href="/">History</Link>
          <br />
          <Link href="/about">Mission/Vission</Link>
          <br />
          <Link href="#">Our Team</Link>
          <br />
          <Link href="#">Partners</Link>
          <br />
        </div>
        <div className="flex-col">
          <p className="text-xl font-semibold pt-3 pb-4 gap-4">Projects</p>
          <Link href="/">project-1</Link>
          <br />
          <Link href="/about">project-2</Link>
          <br />
          <Link href="#">project-3</Link>
          <br />
          <Link href="#">project-4</Link>
          <br />
        </div>
        <div className="flex-col">
          <p className="text-xl font-semibold pt-3 pb-4 gap-4">Contact Info</p>
          <p>
            lorem ipsum doloe consecafdas lorem ipsum doloe consecafdas lorem
            ipsum doloe consecafdas
          </p>
          <p>project-3</p>
          <p>project-4</p>
        </div>
      </div>
      <div className="flex justify-between bg-[#450000] px-10 py-3 text-sm text-center text-white opacity-75 items-center">
        <p>&copy; ECFF 2022</p>
        <p>
          Powered by{" "}
          <a className="link underline" href="#">
            M.A.D Technologies
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
