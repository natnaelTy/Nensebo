"use client"
import  Link  from 'next/link'
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";

interface NavbarProps {
    showMenu: boolean,
    handleShowMenu: () => void,
}


function DropDownList () {

    return (
        <>
        <Link href={'/'}><li className="liList">Home</li></Link>
         <Link href={'/about'}><li className="liList">About</li></Link>
         <Link href={'/ordering-info'}><li className="liList">Info (FQA)</li></Link>
         <Link href={'/gallary'}><li className="liList">Gallary</li></Link>
         <Link href={'/contact'}><li className="liList">Contact</li></Link>
        </>
    )
}

const DropDown: React.FC<NavbarProps> = ({showMenu, handleShowMenu}) => {

  
    
    return(
        <>
         <AnimatePresence>
                 {showMenu && (
                    <motion.div 
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="md:hidden origin-top flex basis-full items-start justify-between w-full top-22 bg-white shadow-xl z-20 fixed p-2">
                           <ul onClick={handleShowMenu} className="flex flex-col items-start justify-center gap-8 py-4 ">
                             <DropDownList/>
                          </ul>         
                    </motion.div>
                 )}
             </AnimatePresence>
        </>
    )
}

export default DropDown;