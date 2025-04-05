
 import { notFound } from "next/navigation";
 import OurSite from "../data";
 import Image from "next/image";

  
 async function SiteDetail({ params }: { params: {oursitesId: string } }) {

    const site =  await OurSite.find((s) => s.id.toString() ===  params.oursitesId);

    if (!site) return notFound();

   return (
     <div className="p-6 flex items-center justify-between w-full">
    
      <Image src={site.imageUrl} alt={site.siteName} width={600} height={500}/> 
     </div>
   );
 }

 export default SiteDetail;