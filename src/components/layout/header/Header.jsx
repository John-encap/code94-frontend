import React  from "react";
import Logo from "../../../images/Logo.png"
import profile from "../../../images/profile.jpg"
import PopoverMenu from '../../common/PopOverMenu'

const Header = () => {
    const handleTogle = () =>{
        alert("jj") 
    }
    return(
        <div className="flex z-50 bg-white flex-row w-full h-16 bg-color1 shadow-md shadow-bottom-custom text-color5">
            <div className="flex w-full justify-between max-w-7xl mx-auto items-center">
                <div className="flex items-center ml-5 h-full w-fit">
                    <img className="h-8" src={Logo}></img>
                </div>
                {/* <div className="flex items-center mr-8 h-full w-fit">
                    <div className="mr-5 text-color5">Gihan</div>
                    <div className="w-10 h-10">
                    <img className="h-10 rounded-full" src={profile}></img>
                    </div>
                </div> */}
                <div className="mr-8 flex flex-row gap-2 items-center justify-center">
                    <p>Gihan</p>
                    <PopoverMenu image={profile}/> 
                </div>
            </div>
           
        </div>
    )
}

export default Header