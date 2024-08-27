
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
export default function page(){

    return(
        <main className="w-full h-[100%] bg-[#f1f7f8] ">
            <nav className="bg-[#f1f7f8] w-full h-20 shadow-md flex items-center">
                <div className="ml-4 text-[#594cc9] ">
                    <button >
                        <HiBars3 className="w-10 h-10 hover:scale-110"/>
                    </button>
                </div>
                <div>
                    <FaCalendarAlt className="w-16 h-full text-[#594cc9] ml-4"/>  
                </div>
                <h1 className="ml-2 font-extrabold text-[#594cc9] text-xl" >
                    AGENDA CIDADÃ
                </h1>
                <BiSolidLogIn />
            </nav>
        </main>
        
    )
}