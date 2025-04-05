"use client";
import Image from "next/image";
import OurSite from "./data";
import Link from "next/link";
import { MdPushPin } from "react-icons/md";


function OurSites() {
  return (
    <div className="bg-gray-100 pt-12 pb-12">
      {/* description */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-center">{`Our site's`}</h1>
      {/* description underline */}
      <div className="underlineForTitle"></div>

      <div className="flex items-center justify-between w-full flex-col md:flex-row p-4">
        <div className="flex text-left gap-5 items-start justify-center flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Discover Our Coffee Source</h1>
          <p className="max-w-2xl">
            Kerchanshe sources coffee from nine different regions in Ethiopia -
            Sidamo, Guji, Yirgacheffe, Limmu, Bale, Harar, Jimma, Nekemte,
            Kaffa.
          </p>
          <button className="bg-green-950 cursor-pointer px-4 py-2 text-white rounded-md">
            View All
          </button>
        </div>

        <div className="flex items-start justify-center flex-col md:flex-wrap lg:flex-row w-full gap-10 md:gap-6 h-full mt-10">
          {OurSite.length > 0 &&
            OurSite.slice(0, 3).map((data) => (
              <div
                key={data.id}
                className="overflow-hidden max-w-[280px]"
              >
                <Image
                  src={data.imageUrl}
                  alt="image"
                  width={280}
                  height={250}
                  className="object-cover w-full rounded-t-xl h-52 "
                />
                <div className="flex items-start text-left flex-col p-3 gap-3 bg-gray-50 h-[250px]">
                  <p className="text-sm font-medium text-gray-600 flex items-center gap-2"><MdPushPin/>{data.location}</p>
                  <h1 className="siteName">{data.siteName}</h1>
                  <p className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-xs font-semibold">{data.coffeeType}</p>
                  <p className="siteDescription">{data.shortDescription}</p>
                  <Link href={`/oursites/${data.id}`}>
                    <button className="border-1 border-gray-950 rounded-md px-3 py-2 text-sm mt-2">
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
