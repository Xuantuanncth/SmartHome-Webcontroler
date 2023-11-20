"use client";

const Sidebar = () => {
    //Fix commit message
    return (
        <div className="w-[360px] h-[840px] rounded-[20px] bg-[#FFFFFF] opacity-75 relative p-[30px] 
                        text-center text-white font-normal font-['Ponnala'] text-[35px] ml-[50px] mr-[30px]
                        
                        ">
            <div className='w-[300px] h-[150px] rounded-[12px] bg-indigo-600 shadow transition duration-300 ease-in-out hover:bg-blue-700'>
                <h1 className='pt-[50px]'>Living Room</h1>
            </div>
            <div className='w-[300px] h-[150px] rounded-[12px] bg-indigo-600 shadow mt-[30px] transition duration-300 ease-in-out hover:bg-blue-700'>
                <h1 className='pt-[50px]'>Bed Room</h1>
            </div>
            <div className='w-[300px] h-[150px] rounded-[12px] bg-indigo-600 shadow mt-[30px] transition duration-300 ease-in-out hover:bg-blue-700'>
                <h1 className='pt-[50px]'>Kitchen</h1>
            </div>
        </div>
    );
};

export default Sidebar;