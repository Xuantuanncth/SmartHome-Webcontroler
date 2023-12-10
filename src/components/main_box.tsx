"use client";
import React, { useState, useEffect } from 'react';
import { Progress, Space } from 'antd';
import Lamp_icon from '@/assets/images/lamp.png';
import Fan_icon from '@/assets/images/fan.png';
import Image from 'next/image';

const MainBox = ({ current_index }: { current_index: any }) => {

    const conicColors = { '10': '#87d068', '20': '#ffe58f', '40': '#ffccc7' };
    const authKey = "G48J18orU7owhtf8y3iWgVMkChTVKGoISmybPr50";
    const firebaseApiUrl = "https://smarthomev1-a1624-default-rtdb.firebaseio.com/.json";
    const livingRoom_data = { temperature: 0, humidity: 0, lamp_status: 0, fan_status: 0 };
    const bedRoom_data = { temperature: 0, humidity: 0, lamp_status: 0, fan_status: 0 };
    const kitchen_data = { gas: 0, lamp_status: 0, fan_status: 0 };
    const [livingRoom, updateLivingRoom] = useState(livingRoom_data);
    const [bedRoom, updateBedRoom] = useState(bedRoom_data);
    const [kitChen, updateKitchen] = useState(kitchen_data);


    const getDataFromFirebase = async () => {
        try {
            const response = await fetch(firebaseApiUrl).then((response) => response.json());
            // console.log("Data: ",response);
            updateLivingRoom({ temperature: response.livingroom.temperature, humidity: response.livingroom.humidity, lamp_status: response.livingroom.lamp, fan_status: response.livingroom.fan });
            updateBedRoom({ temperature: response.bedroom.temperature, humidity: response.bedroom.humidity, lamp_status: response.bedroom.lamp, fan_status: response.bedroom.fan });
            updateKitchen({ gas: response.Kitchen.Gas, lamp_status: response.Kitchen.lamp, fan_status: response.Kitchen.fan });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const getIntervalData = async () => {
        try {
            const response = await fetch(firebaseApiUrl).then((response) => response.json());
            compareData(response);
            // console.log("Data: ",response);
            // updateLivingRoom({ temperature: response.livingroom.temperature, humidity: response.livingroom.humidity, lamp_status: response.livingroom.lamp, fan_status: response.livingroom.fan });
            // updateBedRoom({ temperature: response.bedroom.temperature, humidity: response.bedroom.humidity, lamp_status: response.bedroom.lamp, fan_status: response.bedroom.fan });
            // updateKitchen({ gas: response.Kitchen.Gas, lamp_status: response.Kitchen.lamp, fan_status: response.Kitchen.fan });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // 
    const compareData = ( data:any) => {
        //Compare living
        // console.log("Data: ",data);
        if(livingRoom.temperature != data.livingroom.temperature){
            updateLivingRoom(prev => ({ ...prev, temperature: data.livingroom.temperature }));
        } else if(livingRoom.humidity != data.livingroom.humidity){
            updateLivingRoom(prev => ({ ...prev, humidity:data.livingroom.humidity}))
        } else if (livingRoom.fan_status != data.livingroom.fan){
            updateLivingRoom(prev => ({ ...prev, fan_status:data.livingroom.fan}))
        } else if (livingRoom.lamp_status != data.livingroom.lamp){
            updateLivingRoom(prev => ({ ...prev, lamp_status:data.livingroom.lamp}))
        } else if (bedRoom.temperature != data.bedroom.temperature){
            updateLivingRoom(prev => ({ ...prev, temperature: data.bedroom.temperature }))
        } else if (bedRoom.humidity != data.bedroom.humidity){
            updateLivingRoom(prev => ({ ...prev, humidity:data.bedroom.humidity}))
        } else if (bedRoom.fan_status != data.bedroom.fan){
            updateLivingRoom(prev => ({ ...prev, fan_status:data.bedroom.fan}))
        } else if (bedRoom.lamp_status != data.bedroom.lamp){
            updateLivingRoom(prev => ({ ...prev, lamp_status:data.bedroom.lamp}))
        } else if (kitChen.fan_status != data.Kitchen.fan){
            updateLivingRoom(prev => ({ ...prev, fan_status:data.Kitchen.fan}))
        } else if (kitChen.lamp_status != data.Kitchen.lamp){
            updateLivingRoom(prev => ({ ...prev, lamp_status:data.Kitchen.lamp}))
        }
    }

    const fetchDataInterval = setInterval(getIntervalData, 15000);

    const sendDataToFirebase = (passApi: string, data: number) => {
        fetch(passApi, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json;
        }).then((data) => {
            console.log('Updated user data:', data);
        }).catch((error) => {
            console.error('Error updating user data:', error);
        });
    }



    useEffect(() => {
        getDataFromFirebase();
    }, []);

    const getApiName = (index: number, device: string) => {
        const apiName = "https://smarthomev1-a1624-default-rtdb.firebaseio.com/"
        const roomName = ["livingroom", "bedroom", "Kitchen"];
        if (device === "lamp") {
            return apiName + roomName[index] + "/lamp.json";
        } else {
            return apiName + roomName[index] + "/fan.json";
        }
    }

    const getRoomName = (index: number) => {
        const roomNames = ['Living Room', 'Bed Room', 'Kitchen']; // Replace this with your actual room names
        return roomNames[index] || 'Unknown Room';
    };

    const getDeviceStatus = (index: number, device: string) => {
        if (device === "lamp") {
            const lampSts = [livingRoom.lamp_status, bedRoom.lamp_status, kitChen.lamp_status];
            return lampSts[index];
        } else {
            const fanSts = [livingRoom.fan_status, bedRoom.fan_status, kitChen.fan_status];
            return fanSts[index]
        }
    }

    const updateDeviceStatus = (index: number, status: number, device: string) => {
        if (index === 0) {
            if (device === "lamp") {
                updateLivingRoom(prev => ({ ...prev, lamp_status: status }));
            } else {
                updateLivingRoom(prev => ({ ...prev, fan_status: status }));
            }
        } else if (index === 1) {
            if (device === "lamp") {
                updateBedRoom(prev => ({ ...prev, lamp_status: status }));
            } else {
                updateBedRoom(prev => ({ ...prev, fan_status: status }));
            }
        } else {
            if (device === "lamp") {
                updateKitchen(prev => ({ ...prev, lamp_status: status }));
            } else {
                updateKitchen(prev => ({ ...prev, fan_status: status }));
            }
        }
    }

    const setStatus = (device: string) => {
        const _api = getApiName(current_index, device);
        console.log("API: " + _api);
        sendDataToFirebase(_api, (getDeviceStatus(current_index, device)) ? 0 : 1);
        updateDeviceStatus(current_index, (getDeviceStatus(current_index, device)) ? 0 : 1, device);
    }
    const Room = getRoomName(current_index);
    const status_fan = getDeviceStatus(current_index, "fan");
    const status_lamp = getDeviceStatus(current_index, "lamp");
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

                    {current_index === 2 ? (
                        <p className="pt-[53px]">Gas percent: {kitChen.gas}%</p>
                    ) : (
                        <>
                            <Space wrap className='pt-[40px]'>
                                <Progress type="dashboard" percent={current_index === 1 ? bedRoom.temperature : livingRoom.temperature} format={(percent) => `${percent} ℃`} strokeColor={conicColors} size={250} />
                            </Space>
                            <p className="pt-[53px]">Humidity: {current_index === 1 ? bedRoom.humidity : livingRoom.humidity}%</p>
                            <p className='pt-[10px]'>Temperature Normal</p>
                        </>
                    )}
                </div>
                <div className="w-[234px] h-[209px] bg-yellow-400 rounded-xl mt-[90px] ml-[64px] text-black text-2xl font-normal font-['Pontano Sans'] ">
                    <div className='flex text-center mt-[15px]'>
                        <Image src={Lamp_icon.src} width={Lamp_icon.width} height={Lamp_icon.height} alt="This is icon" />
                        <h3 className='pt-[10px] pl-[25px]'>Lamp {status_lamp ? "On" : "Off"}</h3>
                    </div>
                    <div className="w-[120px] h-[50px] ml-[57px] mt-[40px] relative">
                        <button className="w-[120px] h-[50px] left-0 top-0 absolute bg-zinc-100 rounded-[20px]" onClick={() => { setStatus("lamp") }}></button>
                        {/* <div class="w-[46px] h-[46px] left-[65px] top-[2px] absolute bg-cyan-600 rounded-full"></div> */}
                        <div className={`${status_lamp ? 'left-[5px]' : 'left-[65px]'} w-[46px] h-[46px] top-[2px] transition-left duration-500 absolute bg-cyan-600 rounded-full`}></div>
                    </div>
                </div>
                <div className="w-[234px] h-[209px] bg-indigo-600 rounded-xl mt-[90px] ml-[64px] text-black text-3xl font-normal font-['Pontano Sans']">
                    <div className='flex text-center mt-[15px] ml-[10px]'>
                        <Image src={Fan_icon.src} width={Fan_icon.width} height={Fan_icon.height} alt="This is icon" />
                        <h3 className='pt-[10px] pl-[25px]'>Fan {status_fan ? "On" : "Off"}</h3>
                    </div>
                    <div className="w-[120px] h-[50px] ml-[57px] mt-[47px] relative">
                        <button className="w-[120px] h-[50px] left-0 top-0 absolute bg-zinc-100 rounded-[20px]" onClick={() => { setStatus("fan") }}></button>
                        {/* <div class="w-[46px] h-[46px] left-[65px] top-[2px] absolute bg-cyan-600 rounded-full"></div> */}
                        <div className={`${status_fan ? 'left-[5px]' : 'left-[65px]'} w-[46px] h-[46px]  top-[2px] transition-left duration-500 absolute bg-cyan-600 rounded-full`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBox;