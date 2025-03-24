"use client"
import { useEffect, useState } from "react";
import  Link  from 'next/link'
import './style.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function NavBar(){

    const [navbar, setNavBar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const menuVar = {
        initial:{
            scaleY: 0,
        },
        animate:{
            scaleY: 1,
            transition:{
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit:{
            scaleY: 0,
            transition:{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    function NavLinks(){
        return(
            <>
             <Link href={'/'}><li className="hover:text-green-700">Home</li></Link>
             <Link href={'/about'}><li className="hover:text-green-700">About</li></Link>
             <Link href={'/ordering-info'}><li className="hover:text-green-700">Info (FQA)</li></Link>
             <Link href={'/contact'}><li className="hover:text-green-700">Contact</li></Link>
             <Link href={'/contact'}><li className="hover:text-green-700">Contact</li></Link>
            </>
        )
    }
    useEffect(() => {
      function changeHeader(){
        if(window.scrollY >= 90){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
      };
      window.addEventListener('scroll', changeHeader);
      return() => {
        window.removeEventListener('scroll', changeHeader);
      }
    },[])

    function hanldeShowMenu(){
        setShowMenu(!showMenu);
    }

    return(
        <div>
            <nav className={ navbar ? 'navbar active' : 'navbar'}>
              <Link href={'/'}>
                <div className="flex items-center justify-start gap-1 w-[550px]">
                    <div className="logo relative w-[65px] p-2 h-[65px]">
                       <img src="./images/coffeelogo.png" alt=""  className="w-full object-cover text-black"/>
                     </div>
                     <h1 className="text-sm md:text-2xl">Nensebo.</h1>
                </div>
                </Link>
                  
                 <ul className="hidden lg:flex justify-end gap-8 font-base text-md w-[500px]">
                      <NavLinks/>
                 </ul>

                 {/* hamburger menu */}
                 {
                    <button className="lg:hidden p-2 absolute top-5 right-2" style={{fontSize: '30px'}} onClick={hanldeShowMenu}>{showMenu ? <div><LiaTimesSolid/></div>  : <div><HiMenuAlt3/></div>}</button>
                 }  
            </nav>
              <AnimatePresence>
                 {showMenu && (
                    <motion.div variants={menuVar}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="navDropDown md:hidden origin-top flex basis-full items-start justify-between w-full top-0 bg-[#1c1c1c] text-white z-20 fixed gap-15 p-10 ">
                           <ul onClick={hanldeShowMenu} className="flex flex-col items-start justify-start gap-10 mt-8">
                             <NavLinks/>
                          </ul>         
                    </motion.div>
                 )}
             </AnimatePresence>
        </div>
    )
}

export default NavBar;