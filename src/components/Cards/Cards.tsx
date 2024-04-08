'use client'
import { card } from "@/assets/constants/constants"
import Image from "next/image"
import { Darker_Grotesque } from 'next/font/google';
import check from '../../assets/images/checkCard.svg'



const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '500']
})


export default function Cards() {


    return (
        <>
            <section className="relative z-[70] overflow-y-hidden max-h-[700px] flex flex-col items-center justify-center px-[100px] gap-[120px] border w-full">
                {
                    card.map(({ img, logo, name, span, state, subtitle, list }, index) => {
                        return (
                            <section key={index} className="flex flex-row items-center justify-center border2">
                                <div>
                                    <Image alt="imgCard" src={img} />
                                </div>
                                <div className={`${darker.className} px-[60px] pt-[30px] pb-[60px] flex flex-col items-start justify-start gap-6 rounded-[20px] border-[1px] border-solid border-[#090E14] bg-[#FFF] text-[#090E14]`}>
                                    <article>
                                        <Image alt="logoCard" src={logo} />
                                    </article>
                                    <p className="text-[32px] uppercase leading-none">{name}<br /><span className="text-[32px] font-bold uppercase">{span}</span></p>
                                    <div className="flex justify-center items-center py-[8px] px-3 rounded-md bg-[#262A31] text-[#1AF7A0]"><p className="uppercase text-[18px]">{state}</p></div>
                                    <p className="text-[24px] font-medium uppercase leading-[27.12px] text-balance max-w-[300px] ">{subtitle}</p>
                                    {
                                        list.map((item, indexText) => (
                                            <ul key={indexText} className="">
                                                <div className="flex flex-row items-center justify-center gap-4">
                                                    <Image alt="checkCard" src={check} />
                                                    <li>{item.text}</li>
                                                </div>

                                            </ul>
                                        ))
                                    }
                                </div>
                            </section>
                        )
                    })
                }
            </section>
        </>
    )
}