import Image from "next/image"
import vector from '../../assets/images/flowConect.svg'
import vector2 from '../../assets/images/flowConect2.svg'
import { Darker_Grotesque } from 'next/font/google'
import { useState, useEffect } from "react"


const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['700', '300', '400', '500', '600']
  })

export default function Flow() {

    return(
        <section className={`${darker.className}  flex py-4 md:py-14 gap-9 lg:gap-[65px] flex-col justify-center items-center px-10 md:px-[100px] bg-[#030504] leading-[132%]`}>
            <div className="flex flex-row justify-center  md:justify-end  gap-2 items-center w-full md:pr-[12%]">
                <h3 className="text-[#1AF7A0] text-[24px] md:text-[34px] xl:text-[46px] font-bold tracking-[1.6px] mb-4 lg:mb-10">OPPORTUNITY</h3>
                <Image  src={vector} alt="imgConect" className="hidden md:block w-[350px] lg:w-[600px] xl:w-full"/>
            </div>
            <div className="flex  flex-row justify-center items-center  md:justify-end gap-2 md:items-end w-full">
                <p className="text-[#F6F4EE] text-[24px] tracking-[0.24px] uppercase text-balance w-[400px] indent-[50px]"> Solanas booming ecosystem and community are eager to explore new tools offering value.</p>
            </div>
            <div className="flex  flex-row justify-center items-center  md:justify-end gap-2 md:items-end w-full md:pr-[12%]">
                <p className="text-[#F6F4EE] text-[24px] tracking-[0.24px] uppercase text-balance w-[500px] indent-[50px]">Now, theres a place where you can discover tokens, sense market sentiments, and gain wallet insights.</p>
                <Image  src={vector2} alt="imgConect" className="hidden md:block h-[200px]"/>
            </div>
            <button className="py-[10px] bg-[#262a3163] px-[16px] flex items-center justify-center rounded-[8px] border-solid border-[1px] border-[#454b56c4] hover:bg-[#000000a3] cursor-pointer">OUR WHITEPAPER</button>
        </section>
    )
}