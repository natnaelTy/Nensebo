"use client";
import OurSite from "./data";
import Image from "next/image";
import Link from "next/link";
import { MdPushPin } from "react-icons/md";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function Oursites() {
  return (
    <>
      {/* common banner photo */}
      <div className="bannerContainer">
        <div className="nestedBannerContainer">
          <Link href={"/about"} className="hover:text-green-800">
            <h2>About</h2>
          </Link>
          <h2>
            <RiArrowRightDoubleFill />
          </h2>
          <h2>Our {`Site's`}</h2>
        </div>
      </div>

      {/* title */}
      <h1 className="text-4xl text-center text-green-700 font-bold mt-10 mb-10">
        <span className="text-gray-900 font-extralight"> Our</span> {`Site's`}
        <div className="underlineForTitle"></div>
      </h1>


      <div className="flex items-center justify-around gap-5 flex-col md:flex-row w-full h-full mt-20 p-4">
        {OurSite.length > 0 &&
          OurSite.map((data) => (
            <div
              key={data.id}
              className="overflow-hidden max-w-[500px] lg:max-w-[300px]"
            >
              <Image
                src={data.imageUrl}
                alt="image"
                width={280}
                height={250}
                className="object-cover w-full rounded-t-xl h-52 "
              />
              <div className="flex items-start text-left flex-col p-3 gap-3 bg-gray-50 h-[250px]">
                <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <MdPushPin />
                  {data.location}
                </p>
                <h1 className="siteName">{data.siteName}</h1>
                <p className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-xs font-semibold">
                  {data.Process}
                </p>
                <p className="siteDescription">{data.shortDescription}</p>
                <Link href={`/oursites/${data.id}`}>
                  <button className="border-1 border-gray-950 rounded-md px-3 py-2 text-sm mt-2 cursor-pointer">
                    {data.btn}
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Oursites;
