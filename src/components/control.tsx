"use client";

import Sidebar from "./sidebar";
import MainBox from "./main_box";
import { SetStateAction, useState } from "react";

const Control = () =>{
    const [indexState, setIndexState] = useState(0);
    const  handleStateChange = ({thisIndex}:{thisIndex:any}) =>{
        console.log("handleStateChange: ",thisIndex );
        setIndexState(thisIndex);
    }
    return(
        <div className="bg-[#ECF5FF] h-[900px] pt-[32px] flex">
            <Sidebar onStatus={handleStateChange}></Sidebar>
            <MainBox current_index={indexState}></MainBox>
        </div>
    );
};

export default Control;