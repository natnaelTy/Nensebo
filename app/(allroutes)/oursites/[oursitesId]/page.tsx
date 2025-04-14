
import { notFound } from "next/navigation";
import OurSite from "../data";
import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { SiOrigin } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { TfiPackage } from "react-icons/tfi";
import { PiPlantLight } from "react-icons/pi";
import { BiBarChartAlt } from "react-icons/bi";
import { GiCoffeeBeans } from "react-icons/gi";
import { CiCoffeeBean } from "react-icons/ci";
import { TbWashDryDip } from "react-icons/tb";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Link from "next/link";

async function SiteDetail({ params }: {params : Promise<{oursitesId: string}>}) {
   
    const  oursitesId  = (await params).oursitesId;
    
    const site =  OurSite.find((s) => s.id.toString() ===  oursitesId);

    if (!site) return notFound();

   return (
     <>
    {/* common banner photo */}
          <div className="bannerContainer">
            <div className="nestedBannerContainer">
              <Link href={"/oursites"} className="hover:text-green-800">
                <h2>Our {`Site's`}</h2>
              </Link>
              <h2>
                <RiArrowRightDoubleFill />
              </h2>
              <h2>Details</h2>
            </div>
          </div>

     <div className="p-4 flex items-start flex-wrap justify-between w-full bg-gray-50">

      <Image src={site.imageUrl} alt={site.siteName} width={600} height={500} loading="lazy"/> 
    
      <div className="flex flex-col items-center justify-center max-w-[600px] w-full p-2">
      <div className="w-full">
          <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold max-w-lg text-green-900">About this coffee station</h1>
          <p className="max-w-3xl mt-5 text-sm text-gray-700">{site.fullDescription}</p>
      </div>
      
      <div className="w-full mt-10">
      <div className="infoBox">
          <p className="text_icon"><TfiLocationPin/>Origin</p> 
          <span className="font-bold">{site.origin}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><SiOrigin/>Region</p> 
          <span className="font-bold">{site.Region}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><FcProcess/>Process</p> 
          <span className="font-bold">{site.Process}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><TfiPackage/>Packaging</p> 
          <span className="font-bold">{site.Packaging}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><MdDateRange/>Harvest period</p> 
          <span className="font-bold">{site.Harvest_period}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><PiPlantLight/>Type of harvest</p> 
          <span className="font-bold">{site.Type_of_harvest}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><BiBarChartAlt/>Altutude</p> 
          <span className="font-bold">{site.Altitude}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><GiCoffeeBeans/>Variety</p> 
          <span className="font-bold">{site.Variety}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><CiCoffeeBean/>Species</p> 
          <span className="font-bold">{site.Species}</span>
      </div>
      <div className="infoBox">
          <p className="text_icon"><TbWashDryDip/>Drying</p> 
          <span className="font-bold">{site.Drying}</span>
      </div>
      </div>
      </div>
     </div>
     </>
   );
 }

 export default SiteDetail;