"use client";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiPhoneIncomingThin } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLocationPin } from "react-icons/tfi";

function Footer() {
  return (
    <div className="bg-green-950 flex flex-col items-start justify-around md:flex-row p-4 py-10 gap-10 md:gap-0 text-white">
        <div className="flex items-start flex-col justify-start">
          <div className="w-full flex items-center justify-start p-2">
            <img
              src="./images/coffeelogo.png"
              alt=""
              className="w-[70px] object-cover mb-6"
            />
            <h1 className="text-lg md:text-xl font-medium">Sidama Nensebo</h1>
          </div>
          <p>
            Speciality coffee from the land <br /> of origin.
          </p>
        </div>

        <div className="LinkBox">
          <h1 className="footerHeaderText">Usefull Links</h1>
          <ul className="unorderList">
            <button>
              <Link href={"/"}>Home</Link>
            </button>
            <button>
              <Link href={"/aboutUs"}>About</Link>
            </button>
            <a href="">What we offer</a>
            <button>
              <Link href={"/ordering-info"}>Info (FAQ)</Link>
            </button>
            <button>
              <Link href={"/contact"}>Contact</Link>
            </button>
          </ul>
        </div>
        
        <div className="LinkBox">
          <h1 className="footerHeaderText">Socials</h1>
          <ul className="unorderList text-xl">
            <li className="hover:text-blue-700">
              <a href="https://www.facebook.com/tadesse.degife.1?mibextid=ZbWKwLhttps://www.facebook.com/tadesse.degife.1?mibextid=ZbWKwL">
                <FaFacebook />
              </a>
            </li>
            <li className="hover:text-green-500">
              <a href="">
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="hover:text-blue-700 ">
              <a href="https://www.linkedin.com/in/tade-coffee-export-847341358/">
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="LinkBox">
          <h1 className="footerHeaderText">Contact us</h1>
          <div className="unorderList">
          <div className="footerContactCard">
            <PiPhoneIncomingThin className="text-2xl" />
            <p>+251 911828573</p>
          </div>
          <div className="footerContactCard">
            <PiPhoneIncomingThin className="text-2xl" />
            <p>+251 913291960</p>
          </div>
          <div className="footerContactCard">
            <HiOutlineMail className="text-2xl" />
            <p className="text-sm md:text-base">sidamanensebo@gmail.com</p>
          </div>
          <div className="footerContactCard">
            <TfiLocationPin className="text-2xl" />
            <p>Sarbet, Addis Ababa</p>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
