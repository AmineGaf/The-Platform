import { useState } from "react"
import { Logo,menu,close } from "../assets"
import Button from "./Button"

const Navbar = () =>  {

    const [toggle, seToggle] = useState("false");

    return(
    
    <nav className='flex flex-col md:flex-row lg:justify-between mx-[30px] md:gap-[50px] md:mx-0 '>
        <div className="flex flex-row ">
            <div className="flex gap-3">
                <img src={Logo} alt="Logo" className="h-[30px] w-[30px]" />
                <h1 className=" font-poppins font-bold text-2xl text-white ">THE 
                <span className="text-heading ml-2">PLATFORM</span></h1>
            </div>
            <div className="flex flex-1 justify-end items-center md:hidden">
                <img src={toggle ? close : menu} 
                alt="menu"
                className="cursor-pointer w-[24px] h-[24px] object-contain"
                onClick={() => seToggle((prev) => (!prev))} />

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-title absolute top-20 right-0 my-2 min-w-[140px] rounded-xl` }>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 gap-4 '>
                    <li 
                        className={`font-poppins  cursor-pointer text-[16px] text-white hover:text-primary `}>
                        Home
                    </li>
                    <li 
                        className={`font-poppin cursor-pointer text-[16px] text-white hover:text-primary`}>
                        About Us
                    </li>
                    <li 
                        className={`font-poppins cursor-pointer text-[16px] text-white hover:text-primary`}>
                        Services
                    </li>
                    <li 
                        className={`font-poppins cursor-pointer text-[16px] text-white hover:text-primary`}>
                        Contact
                    </li>
          </ul>
          </div>
            </div>
            
        </div>
        
        <ul className="font-poppins text-title md:flex gap-[40px] cursor-pointer hidden">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About Us</li>
            <li className="hover:text-white">Services</li>
            <li className="hover:text-white">Contact</li>
        </ul>
        <div className="md:flex gap-2 md:gap-4 hidden">
            <button className="font-poppins text-title hover:text-white">Login</button>
            <Button title={"Sign Up"} styles={"w-[100px]"}/>
        </div>
    </nav>
  )
}

export default Navbar