
 import Image from "next/image";
 import { notFound } from "next/navigation";
 import OurSite from "../data";

 interface Props {
    params: {
      oursitesId: string;
    };
  }
  
 function SiteDetail({ params }: Props) {

    const site =  OurSite.find((s) => s.id.toString() === params.oursitesId);

    if (!site) return notFound();

   return (
     <div className="p-6 max-w-4xl mx-auto">
    
     <h1 className="text-3xl font-bold mt-4">page is {site.siteName}</h1>
     
     </div>
   );
 }

 export default SiteDetail;