"use client";
import React, { useState, useEffect } from 'react';
import { Progress, Space } from 'antd';
import Lamp_icon from '@/assets/images/lamp.png';
import Fan_icon from '@/assets/images/fan.png';
import Image from 'next/image';

const MainBox = ({ current_index }) => {

    const conicColors = { '10': '#87d068', '20': '#ffe58f', '40': '#ffccc7' };

    const [currentTime, setCurrentTime] = useState(new Date());
    const [lamp_checker, setLampChecker] = useState(false);
    const [fan_checker, setFanChecker] = useState(false);

    const getRoomName = (index: number) => {
        const roomNames = ['Living Room', 'Bed Room', 'Kitchen']; // Replace this with your actual room names
        return roomNames[index] || 'Unknown Room';
    };
    const Room = getRoomName(current_index);
    return (
        <div className="w-[1110px] h-[840px] rounded-[20px] bg-[#FFFFFF] ">
            <div className="w-[988px] h-[210px] bg-blue-300 rounded-xl shadow ml-[62px] mt-[32px] flex">
                <div className="text-black text-[35px] font-normal font-['Pontano Sans'] pt-[40px] ml-[30px]">
                    <h1>Hello Admin</h1>
                    {/* <h2>{formattedTime}</h2> */}
                </div>
                <h1 className=" text-white text-opacity-90 text-6xl font-normal font-['Ponnala'] pt-[60px] pl-[200px]">{Room}</h1>
            </div>
            <div className="flex ml-[62px] mt-[58px]">
                <div className="w-[357px] h-[481px] bg-indigo-50 rounded-xl text-black text-3xl font-normal font-['Pontano Sans'] text-center" >
                    <Space wrap className='pt-[40px]'>
                        <Progress type="dashboard" percent={25} format={(percent) => `${percent} ℃`} strokeColor={conicColors} size={250} />
                    </Space>
                    {current_index === 2 ? (
                        <p className="pt-[53px]">Gas percent: 75%</p>
                    ) : (
                        <>
                            <p className="pt-[53px]">Humidity: 75%</p>
                            <p className='pt-[10px]'>Temperature Normal</p>
                        </>
                    )}
                </div>
                <div className="w-[234px] h-[209px] bg-yellow-400 rounded-xl mt-[90px] ml-[64px] text-black text-2xl font-normal font-['Pontano Sans'] ">
                    <div className='flex text-center mt-[15px]'>
                        <Image src={Lamp_icon.src} width={Lamp_icon.width} height={Lamp_icon.height} alt="This is icon" />
                        <h3 className='pt-[10px] pl-[25px]'>Lamp {lamp_checker ? "Off" : "On"}</h3>
                    </div>
                    <div className="w-[120px] h-[50px] ml-[57px] mt-[40px] relative">
                        <button className="w-[120px] h-[50px] left-0 top-0 absolute bg-zinc-100 rounded-[20px]" onClick={() => setLampChecker(!lamp_checker)}></button>
                        {/* <div class="w-[46px] h-[46px] left-[65px] top-[2px] absolute bg-cyan-600 rounded-full"></div> */}
                        <div className={`${lamp_checker ? 'left-[65px]' : 'left-[5px]'} w-[46px] h-[46px] top-[2px] transition-left duration-500 absolute bg-cyan-600 rounded-full`}></div>
                    </div>
                </div>
                <div className="w-[234px] h-[209px] bg-indigo-600 rounded-xl mt-[90px] ml-[64px] text-black text-3xl font-normal font-['Pontano Sans']">
                    <div className='flex text-center mt-[15px] ml-[10px]'>
                        <Image src={Fan_icon.src} width={Fan_icon.width} height={Fan_icon.height} alt="This is icon" />
                        <h3 className='pt-[10px] pl-[25px]'>Fan {fan_checker ? "Off" : "On"}</h3>
                    </div>
                    <div className="w-[120px] h-[50px] ml-[57px] mt-[47px] relative">
                        <button className="w-[120px] h-[50px] left-0 top-0 absolute bg-zinc-100 rounded-[20px]" onClick={() => setFanChecker(!fan_checker)}></button>
                        {/* <div class="w-[46px] h-[46px] left-[65px] top-[2px] absolute bg-cyan-600 rounded-full"></div> */}
                        <div className={`${fan_checker ? 'left-[65px]' : 'left-[5px]'} w-[46px] h-[46px]  top-[2px] transition-left duration-500 absolute bg-cyan-600 rounded-full`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBox;