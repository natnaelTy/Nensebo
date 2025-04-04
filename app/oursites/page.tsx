"use client";
import Image from "next/image";
import OurSite from "./data";
import Link from "next/link";


function OurSites() {
  return (
    <div className="text-center mb-8 p-4 relative">
      {/* description */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">{`Our site's`}</h1>
      {/* description underline */}
      <div className="underlineForTitle"></div>

      <div className="imageContainer">
        <div className="contentContainer">
          <div className="flex text-center gap-6 items-center justify-center w-full flex-col">
            <h1 className="text-3xl font-semibold">
              Discover Our Coffee Source
            </h1>
            <p className="">
              Kerchanshe sources coffee from nine different regions in Ethiopia
              - Sidamo, Guji, Yirgacheffe, Limmu, Bale, Harar, Jimma, Nekemte,
              Kaffa.
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 w-full">
            <div className="flex items-start justify-between w-full text-left gap-2">
              {OurSite.length > 0 &&
                OurSite.map((data) => (
                  <div
                    key={data.id}
                    className="flex flex-col gap-3 items-start"
                  >
                    <Image
                      src={data.imageUrl}
                      alt="image"
                      width={300}
                      height={250}
                      className="rounded-md h-[250px] object-cover"
                    />
                    <h1 className="siteName">{data.siteName}</h1>
                    <p className="siteDescription">{data.shortDescription}</p>
                    <Link href={`/oursites/${data.id}`}>
                      <button className="primarybtn mt-2">{data.btn}</button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <Image
          src="/images/homepic.jpg"
          alt="coffee"
          width={1200}
          height={700}
          className="w-full h-[700px] object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default OurSites;
