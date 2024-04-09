'use client'
import { card } from "@/assets/constants/constants"
import Image from "next/image"
import { Darker_Grotesque, Inter } from 'next/font/google';
import check from '../../assets/images/checkCard.svg';
import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { useEffect } from "react";


const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '500']
})
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '500', '600']
})


export default function Cards() {
    const { ref, isIntersecting } = useIntersectionObserver();
  
    useEffect(() => {
      if (isIntersecting && ref.current) {
        (ref.current as HTMLElement).querySelectorAll("component-padre").forEach((el: Element) => {
          el.classList.add("classe-whit-animation");
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isIntersecting]);


    return (
        <section className="z-[70]  relative flex flex-col items-center justify-center px-[100px] w-full">
            <article className=" gap-9 top-0 flex flex-col items-center justify-between">
                {
                    card.map(({ img, logo, name, span, state, subtitle, list }, index) => {
                        return (
                            <section key={index} className="flex relative  gap-4 w-full z-[70] flex-row items-center justify-center">
                                {/* <div className="">
                                    <Image alt="imgCard" src={img} />
                                </div> */}
                                <article  className={`${darker.className} relative  z-[60] px-[60px] pt-[30px] pb-[60px] flex flex-col items-start justify-start gap-6 rounded-[20px] border-[1px] border-solid border-[#090E14] bg-[#FFF] text-[#090E14]`}>
                                    <div>
                                        <Image alt="logoCard" src={logo} />
                                    </div>
                                    <p className="text-[32px] uppercase leading-none">{name}<br /><span className="text-[32px] font-bold uppercase">{span}</span></p>
                                    <div className="flex justify-center items-center py-[8px] px-3 rounded-md bg-[#262A31] text-[#1AF7A0]"><p className={`${inter.className} font-semibold uppercase text-[18px]`}>{state}</p></div>
                                    <p className="text-[24px] font-medium uppercase leading-[27.12px] text-balance max-w-[400px] ">{subtitle}</p>
                                    {
                                        list.map((item, indexText) => (
                                            <ul key={indexText} className="">
                                                <div className="flex flex-row items-center justify-center gap-2">
                                                    <Image alt="checkCard" src={check} />
                                                    <li className="#090E14 text-[20px] font-medium">{item.text}</li>
                                                </div>

                                            </ul>
                                        ))
                                    }
                                </article>
                            </section>
                        )
                    })
                }
            </article>
        </section>
    )
}