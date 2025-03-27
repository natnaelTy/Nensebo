"use client"
import { motion } from 'framer-motion';

function OurSites(){

    return(
        <div className="text-center mb-8 p-4 relative ">
             <div className="max-w-sm h-auto absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
                <img src="./images/coffeeplant.png" alt="" className="w-full h-full object-cover"/>
            </div>
            {/* description */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">Our site's</h1>
            {/* description underline */}
            <div className="underlineForTitle"></div>
            
            <motion.div initial={{opacity: 0, y: 150}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 1.5}}
                        viewport={{once: true}} 
                        exit={{y:0}}
                        className="flex items-center justify-around flex-wrap gap-20 mt-14">
                <div className="imageContainer">
                    <div className="contentContainer">
                       <h1 className="siteName">01. Mendoyu</h1>
                       <p className="siteDescription">This site located about 2400 altitude at one of the tropical regions in oromia region.</p>
                    </div>
                    <img src="./images/tade-7.jpg" alt="" className="siteImage"/>
                </div>

                <div className="imageContainer">
                    <div className="contentContainer">
                       <h1 className="siteName">02. Yemasera</h1>
                       <p className="siteDescription">This site one of our largest site with the size of over 100 workers.</p>
                    </div>
                    <img src="./images/site2.jpg" alt="" className="siteImage"/>
                </div>

                <div className="imageContainer">
                    <div className="contentContainer">
                       <h1 className="siteName">03. Uchuro </h1>
                       <p className="siteDescription">This site planted at the remote area of oromia region with abundant coffee resources.</p>
                    </div>
                    <img src="./images/site4.jpg" alt="" className="siteImage"/>
                </div>

                <div className="imageContainer">
                    <div className="contentContainer">
                       <h1 className="siteName">04. Mewa Amrieha</h1>
                       <p className="siteDescription">This site dedicated to improve the quality of our coffee.</p>
                    </div>
                    <img src="./images/site5.jpg" alt="" className="siteImage"/>
                </div>

            </motion.div>
        </div>
    )
}

export default OurSites;

