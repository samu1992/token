'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from '../Cards/Cards';
import { Darker_Grotesque } from 'next/font/google';



const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '600']
})



export default function SectionHow() {
    return (
        <main className={`${darker.className} h-[1424px] overflow-y-hidden text-[#090E14] relative  flex flex-col justify-between items-center bg-[#030504]`}>
            <div className=" z-10 absolute top-[-160px]  w-full overflow-hidden">
                <h2 className={`tracking-[17px] solsni font-semibold text-[#ffffff25] text-center text-[380px] w-full`}>Solsniffer</h2>
            </div>
            <div className='w-full h-[1200px] absolute top-56 z-20 rounded-[50%] elipse' />
            <div id="texture" className="absolute top-0 right-0 z-30 w-full h-[1424px]"></div>
            <section className=' relative z-50 w-full px-[100px] mt-[400px] gap-[30px]'>
                <h2 className=' text-[80px] text-balance leading-[74px] font-semibold uppercase'>How we<br /> stand out?</h2>
                <p className=' text-[36px] uppercase font-semibold'>all-in-one platform</p>
                <p className=' uppercase text-[36px] mb-5'>Understanding on-chain data</p>
                <button className='flex bg-[#262A31] text-[#fff] tracking-[1px] uppercase rounded-[10px] flex-crow justify-center items-center gap-3 py-3 px-5 border-[1px] border-[#ffffff32] border-solid'>PITCH DECK
                    <FaArrowRightLong color='#1AF7A0' size='1.5em' />
                </button>
            </section>
            <section className="w-full h-[150vh] mt-5">
                <Cards />
            </section>
        </main>
    )
}