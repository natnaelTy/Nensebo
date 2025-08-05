import Image from "next/image";

export default function CommonBanner(){

    return(
           <div className="relative h-[300px]">
              <div className="flex h-[300px]">
                 <Image src="/images/headerimage.jpg" width={"1200"} height={"300"} loading="lazy" alt="our coffee" className=" object-cover h-[300px] w-full"/>
              </div>
        </div>        
    )
}

