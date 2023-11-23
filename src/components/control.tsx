"use client";

import Sidebar from "./sidebar";
import MainBox from "./main_box";

const Control = () =>{
    return(
        <div className="bg-[#ECF5FF] h-[900px] pt-[32px] flex">
            <Sidebar></Sidebar>
            <MainBox></MainBox>
        </div>
    );
};

export default Control;