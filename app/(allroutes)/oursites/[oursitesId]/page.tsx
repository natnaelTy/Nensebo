
import { notFound } from "next/navigation";
import OurSite from "../../../oursite/data";
import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { SiOrigin } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { TfiPackage } from "react-icons/tfi";
import { PiPlantLight } from "react-icons/pi";

interface Props {
  params: {
    oursitesId: string;
  };
}

async function SiteDetail({ params }: Props) {

    const { oursitesId } = await params;
    
    const site =  OurSite.find((s) => s.id.toString() ===  oursitesId);

    if (!site) return notFound();

   return (
     <div className="p-6 flex items-center flex-wrap justify-between w-full">
    
      <Image src={site.imageUrl} alt={site.siteName} width={600} height={500}/> 

      <div className="flex flex-col items-center justify-center max-w-[750px] w-full p-4">
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
      </div>
     </div>
   );
 }

 export default SiteDetail;