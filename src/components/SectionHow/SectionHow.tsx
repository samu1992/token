'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from '../Cards/Cards';
import { useState, useEffect } from "react";
import animationData from '../../assets/images/Flow 3.json';
import Lottie from 'lottie-react';
import { Darker_Grotesque } from 'next/font/google';


const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '600']
})



export default function SectionHow() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <main className={`${darker.className} h-[fit-content]  text-[#090E14] relative  flex flex-row justify-between items-start pt-[350px] pb-[150px] bg-[#030504]`}>
            <div className=" z-10 absolute top-[-160px]  w-full overflow-hidden">
                <h2 className={`tracking-[17px] solsni font-semibold text-[#ffffff25] text-center text-[380px] w-full`}>Solsniffer</h2>
            </div>
            {/* <div className='w-full h-[1200px] absolute top-56 z-20 rounded-[50%] elipse' />
            <div id="texture" className="absolute top-0 right-0 z-30 w-full h-[100%]"></div> */}
            <section className={`w-full px-[60px] z-50 flex flex-col text-[#F6FAFF] items-start justify-start ${isSticky ? 'sm:sticky top-[50px]' : ''}`}>
                <div className="ml-[55px]">
                    <h2 className=' text-[60px] text-balance leading-[54px] font-semibold uppercase'>How we stand out?</h2>
                    <p className=' text-[24px] uppercase font-semibold'>all-in-one platform</p>
                    <p className=' uppercase text-[20px] mb-5'>Understanding on-chain data</p>
                    <button className='flex bg-[#262A31] text-[#fff] tracking-[1px] uppercase rounded-[10px] flex-crow justify-center items-center gap-3 py-3 px-5 border-[1px] border-[#ffffff32] border-solid'>PITCH DECK
                        <FaArrowRightLong color='#1AF7A0' size='1.5em' />
                    </button>
                </div>
                <section className='flex  mt-6 items-center justify-center'>
                    <Lottie animationData={animationData} width={200} height={200} />
                </section>
            </section>
            <section className="w-full  h-[fit-content] mt-5">
                <Cards />
            </section>
        </main>
    )
}