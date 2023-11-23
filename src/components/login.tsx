"use client";
import loginBackground from "@/assets/images/login-background.png";

const Login = () => {
    return (
        <div className="h-[900px] bg-cover bg-[url('../assets/images/login-background.png')] bg-center pt-[300px] pl-[162px]">
            <div className="w-[414px] h-[430px] relative bg-neutral-200 bg-opacity-70 rounded-2xl font-ponnala text-black text-[20px] font-[400] leading-normal">
                <div className="pt-[44px] pl-[33px]">
                    <p>Username</p>
                    <div className="rounded-xl w-[346px] h-[60px] bg-white mt-2">
                        <input className="pt-5 pl-2 rounded-xl w-[340px]"  placeholder="Enter username" type="text" />
                    </div>
                </div>
                <div className="pt-[35px] pl-[33px]">
                    <p>Password</p>
                    <div className="rounded-xl w-[346px] h-[60px] bg-white mt-2">
                        <input className="pt-5 pl-2 rounded-xl w-[340px]" placeholder="Enter password" type="password" />
                    </div>  
                </div>
                <div className="pt-[60px] pl-[33px]">
                    <button className="rounded-xl w-[346px] h-[60px] bg-[#F97070]  font-[550]">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;