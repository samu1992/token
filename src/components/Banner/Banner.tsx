'use client'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Banner() {
    return (
        <section className="gap-16 relative top-0 flex flex-col items-end justify-end pt-40  pb-16 px-[100px] w-full h-[100vh]">
            <div className="flex items-center justify-center flex-col gap-20 z-50 relative w-full">
                <h1 className="text-balance indent-[50px]">SECURITY ON SOLANA HAS<br /> NEVER BEEN <span className="span_1">SAFER</span> BEFORE</h1>
                <button className="py-[10px] px-[16px] rounded-lg border-[1px] border-solid border-[#ffffff57] bg-[#ffffff14] tracking-wider">BUY IT NOW</button>
            </div>
            <div className=" w-full flex flex-row items-start justify-between">
                <section className=" w-full flex flex-col gap-6">
                    <p>
                        FOLLOW US
                    </p>
                    <div className="flex flex-row gap-4">
                        <FaXTwitter color={'#1AF7A0'} size={'1.5em'} />
                        <FaTelegramPlane color={'#1AF7A0'} size={'1.5em'} />
                    </div>
                </section>
            </div>
        </section>
    )
}