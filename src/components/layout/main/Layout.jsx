import React from "react";
import Header from "../header/Header";

const Layout = ({ children,title }) => {
    return (
    <div className="flex flex-row min-h-screen w-[vw]">
        <div className="flex w-full color1 flex-col">
            <div className="fixed w-full flex-col">
                <Header/>
            </div>
            <div className='flex w-full justify-between max-w-7xl mx-auto mt-20 first-line p-4 flex-col gap-6'>
                <h1 className="text-2xl font-bold text-textBlack">{title}</h1>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Layout;