'use client'
import { utilities } from "@/assets/constants/constants"
import { FaArrowRightLong } from "react-icons/fa6"
import { Darker_Grotesque } from "next/font/google"


const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '600', '500']
})


export default function Utilities() {
    return (
        <article className="w-full  px-[15px] py-3 lg:p-[110px] flex flex-col justify-center items-start gap-6 md:gap-16 h-vh">
            <div className={`${darker.className} font-semibold text-[24px] flex flex-row gap-4 justify-start items-center`}>
                <div className="w-[16px] mt-1 h-[16px]  bg-[#1AF7A0] rounded-full" />
                <h3 className="uppercase">$snif utilities</h3>
            </div>
            <section className="w-full">
                <h5 className="text-[22px] sm:text-[28px] md:text-[32px] text-[#F6FAFF] font-medium text-balance leading-[111%] tracking-[1.28px]">Community is everything. Users, followers, members… We recognize they are the blood to our heart. Our values and actions must reflect our appreciation.</h5>
            </section>
            <section className="flex flex-row flex-wrap w-full  justify-between">
                {
                    utilities.map(({ number, text }, index) => {
                        return (
                            <div key={index} className="flex flex-row gap-5 justify-center items-center w-[500px] border-t-[1px] border-[#42474E] border-solid pt-[19px] pb-[35px]">
                                <h4 className="text-[26px] md:text-[32px] font-extrabold uppercase tracking-[1.28px]">{number}</h4>
                                <p className="text-[18px] sm:text-[20px] md:text-[26px] text-[#F6FAFF)] font-medium tracking-[0.48px] text-start">{text}</p>
                            </div>
                        )
                    })
                }
            </section>
            <div>
                <button className='flex hover:bg-[#262A31] text-[#fff] tracking-[1px] uppercase rounded-[10px] flex-crow justify-center items-center gap-3 py-3 px-5 border-[1px] border-[#ffffff32] border-solid bg-[#000000]'>whitepaper
                    <FaArrowRightLong color='#1AF7A0' size='1.5em' />
                </button>
            </div>
        </article>
    )
}