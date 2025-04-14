"use client";
import Image from "next/image";
import OurSite from "./data";
import Link from "next/link";
import { MdPushPin } from "react-icons/md";

function OurSites() {
  return (
    <div className="bg-gray-100 pt-12 pb-12">
      {/* description */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">{`Our site's`}</h1>
      {/* description underline */}
      <div className="underlineForTitle"></div>

      <div className="flex items-center justify-between w-full flex-col md:flex-row p-4 mt-14">
        <div className="flex text-left gap-5 items-start justify-center flex-col mb-10 pr-4">
          <h1 className="text-2xl md:text-3xl font-medium">
            Discover Our Coffee Source
          </h1>
          <p className="max-w-sm text-sm ">
          Sidama Nensebo is one of the largest coffee producers and exporter in the oromia region , we located in west arsi nensebo , a region renowned for its rich soil, perfect altitude, and perfect climate for growing world-class coffee. We provide best quality coffee that processed over 10 stations
          </p>
          <Link href={"/oursites"}>
            <button className="bg-green-800 cursor-pointer px-4 text-sm font-medium py-2 hover:bg-green-700 text-white rounded-md transition ease-in duration-300">
              View All
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-around gap-5 flex-col md:flex-row w-full h-full mt-10">
          {OurSite.length > 0 &&
            OurSite.slice(0, 3).map((data) => (
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
                    <button className="procesesBtn">
                      {data.btn}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default OurSites;
