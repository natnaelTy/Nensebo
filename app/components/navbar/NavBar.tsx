"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./style.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import DropDown from "./DropDown";
import Image from "next/image";

function NavBar() {
  const [navbar, setNavBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function NavLinks() {
    return (
      <>
        <Link href={"/"}>
          <li className="hover:text-green-700">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="hover:text-green-700">About</li>
        </Link>
        <Link href={"/oursites"}>
          <li className="hover:text-green-700">{`Site's`}</li>
        </Link>
        <Link href={"/gallary"}>
          <li className="hover:text-green-700">Gallary</li>
        </Link>
        <Link href={"/FAQ"}>
          <li className="hover:text-green-700">FQA</li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:text-green-700">Contact</li>
        </Link>
      </>
    );
  }
  
  useEffect(() => {
    function changeHeader() {
      if (window.scrollY >= 90) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    }
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="max-w-[1200px] w-full flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-1">
            <div className="relative max-w-[65px] p-2 h-[65px]">
              <Image
                src="/images/coffeelogo.png"
                alt="logo"
                width={65}
                height={65}
                loading="lazy"
                className="w-full object-cover text-black"
              />
            </div>
            <h1 className="text-base md:text-2xl font-semibold">
              Sidama Nensebo
            </h1>
          </div>
        </Link>

        <ul className="hidden lg:flex justify-end gap-6 font-medium text-base">
          <NavLinks />
        </ul>
        </div>
        {/* hamburger menu */}
        {
          <button
            className="lg:hidden p-2 absolute top-5 right-2"
            style={{ fontSize: "30px" }}
            onClick={handleShowMenu}
          >
            {showMenu ? (
              <div>
                <LiaTimesSolid />
              </div>
            ) : (
              <div>
                <HiMenuAlt3 />
              </div>
            )}
          </button>
        }
      </nav>
      <DropDown handleShowMenu={handleShowMenu} showMenu={showMenu} />
    </>
  );
}

export default NavBar;
