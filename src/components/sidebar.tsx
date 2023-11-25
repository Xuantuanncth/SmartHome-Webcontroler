"use client";

import { useState } from "react";

const Sidebar = ({onStatus}:{onStatus:any}) => {
    const[current_index, setIndexState] = useState(0);
    const updateIndex = ({data}:{data:any}) => {
        console.log("index: " + data);
        onStatus(data);
        setIndexState(data);
    }

    function BarItem({ index, title, isChoose }:{index:any, title:any, isChoose:any}) {
        return (

                <button className={`${isChoose ? 'bg-teal-700' : 'bg-indigo-600'} w-[300px] h-[150px] rounded-[12px] mb-[30px] hover:bg-blue-700`}  
                onClick={() => { updateIndex(index) }}
                >
                    {title}
                </button>
        )
    }
   
    return (
        <div className="w-[360px] h-[840px] rounded-[20px] bg-[#FFFFFF] opacity-75 relative p-[30px]
                        text-center text-white font-normal font-['Ponnala'] text-[35px] ml-[50px] mr-[30px]
                        ">
            <BarItem index={0} title="Living Room" isChoose={current_index === 0 ?true:false}></BarItem>
            <BarItem index={1} title="Bed Room" isChoose={current_index === 1 ?true:false}></BarItem>
            <BarItem index={2} title="Kitchen" isChoose={current_index === 2 ?true:false}></BarItem>
        </div>
    );
};

export default Sidebar;