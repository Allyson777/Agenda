'use client'
import {useState} from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";


export default function page(){
    //estado da sidebar
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSideBarOpen);
    }

    return(
        <main className="w-full h-[100%] bg-[#f1f7f8] ">
            <nav className="bg-[#f1f7f8] w-full h-20 shadow-md flex items-center">
                <div className="ml-4 text-[#594cc9] w">
                    <HiBars3 className="w-10 h-10 hover:scale-110 cursor-pointer" onClick={toggleSidebar}/>    
                </div>
                <div className='flex items-center justify-center'>
                    <FaCalendarAlt className=" sm:pr-4 w-16 h-full text-[#594cc9] ml-16 md:ml-4 "/>
                </div>
                <h1 className=" font-extrabold text-[#594cc9] text-xl" >
                    AGENDA CIDADÃ
                </h1>
                <a className="flex ml-auto mr-6" href="http://localhost:3000/"><MdLogin className="flex text-[#594cc9] w-10 h-10"/></a>
            </nav>
            {isSideBarOpen &&(    
                <div className={`fixed top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-br from-[#594cc9] to-gray-200 text-white p-4 transition-transform duration-700 ease-in-out transform ${isSideBarOpen ? 'translate-x-0': '-translate-x-full'}`}>
                    <button onClick={toggleSidebar} className="w-16 h-10">
                        <HiBars3 className="w-12 h-12 hover:scale-110 cursor-pointer" onClick={toggleSidebar}/>    
                    </button>
                    <ul className="mt-16">
                        <li className="py-2">Item 1</li>
                        <li className="py-2">Item 2</li>
                        <li className="py-2">Item 3</li>
                    </ul>
                </div>
            )}
        </main>
        
    )
}