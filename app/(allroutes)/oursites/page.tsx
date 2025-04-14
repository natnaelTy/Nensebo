"use client";
import OurSite from "./data";
import Image from "next/image";
import Link from "next/link";
import { MdPushPin } from "react-icons/md";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { TfiPackage } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

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
      <div className="p-2">
      <h1 className="text-2xl lg:text-3xl text-center text-green-900 font-bold mt-10 mb-10">
        <span className="text-gray-900 font-extralight"> Our</span> {`Site's`}
        <div className="underlineForTitle"></div>
      </h1>
      <div className="relative">
        <h1 className="procesesTitle">Sun dried station</h1> 
      </div>
      <div className="procesesContainer">
        {OurSite.length > 0 &&
          [OurSite["0"], OurSite["3"], OurSite["10"]].map((data) => (
            <div
              key={data.id}
              className="overflow-hidden w-full max-w-[500px] lg:max-w-[350px] shadow-md rounded-lg"
            >
              <Image
                src={data.imageUrl}
                alt="image"
                width={280}
                height={250}
                loading="lazy"
                className="object-cover w-full rounded-t-xl h-52 "
              />
              <div className="contentContainer">
                <p className="icon">
                  <MdPushPin />
                  {data.location}
                </p>
                <h1 className="siteName">{data.siteName}</h1>
                <p className="procesesP">{data.Process}</p>
                <p className="flex items-center gap-2 text-sm font-medium">
                  <TfiPackage /> {data.Packaging}
                </p>
                <p className="font-medium text-xs w-full flex items-center justify-end gap-1">
                  <GoDotFill className="text-green-500 text-lg" />
                  Contract available
                </p>
                <Link href={`/oursites/${data.id}`}>
                  <button className="procesesBtn">{data.btn} <GoArrowRight className="text-lg"/></button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <div className="relative">
        <h1 className="procesesTitle">Anarobic station</h1>
      </div>

      <div className="procesesContainer">
        {OurSite.length > 0 &&
          [OurSite["6"], OurSite["7"], OurSite["8"]].map((data) => (
            <div
              key={data.id}
              className="overflow-hidden w-full max-w-[500px] lg:max-w-[350px] shadow-md rounded-lg"
            >
              <Image
                src={data.imageUrl}
                alt="image"
                width={280}
                height={250}
                className="object-cover w-full rounded-t-xl h-52 "
              />
              <div className="contentContainer">
                <p className="icon">
                  <MdPushPin />
                  {data.location}
                </p>
                <h1 className="siteName">{data.siteName}</h1>
                <p className="procesesP">{data.Process}</p>
                <p className="flex items-center gap-2 text-sm font-medium">
                  <TfiPackage /> {data.Packaging}
                </p>
                <Link href={`/oursites/${data.id}`}>
                  <button className="procesesBtn">{data.btn} <GoArrowRight className="text-lg"/></button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <div className="relative">
        <h1 className="procesesTitle">Washing station</h1>
      </div>
      <div className="procesesContainer">
        {OurSite.length > 0 &&
          [OurSite["2"], OurSite["1"], OurSite["9"]].map((data) => (
            <div
              key={data.id}
              className="overflow-hidden w-full max-w-[500px] lg:max-w-[350px] shadow-md rounded-lg"
            >
              <Image
                src={data.imageUrl}
                alt="image"
                width={280}
                height={250}
                className="object-cover w-full rounded-t-xl h-52 "
              />
              <div className="contentContainer">
                <p className="icon">
                  <MdPushPin />
                  {data.location}
                </p>
                <h1 className="siteName">{data.siteName}</h1>
                <p className="procesesP">{data.Process}</p>
                <p className="flex items-center gap-2 text-sm font-medium">
                  <TfiPackage /> {data.Packaging}
                </p>
                <Link href={`/oursites/${data.id}`}>
                  <button className="procesesBtn">{data.btn} <GoArrowRight className="text-lg"/></button>
                </Link>
              </div>
            </div>
          ))}
      </div>
      </div>
    </>
  );
}

export default Oursites;
