/* eslint-disable @next/next/no-img-element */
'use client'
import { Darker_Grotesque } from 'next/font/google';
import { revenue } from '@/assets/constants/constants';
import Image from 'next/image';
import animationData from '../../assets/images/Flow 2 (1).json';
import Lottie from 'lottie-react';



const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '600']
})

export default function SectionRevenue() {
    return (
        <>
            <section className="w-full p-[110px] flex flex-col justify-center items-start gap-16 h-vh">
                <div className={`${darker.className} font-semibold text-[24px] flex flex-row gap-4 justify-start items-center`}>
                    <div className="w-[16px] mt-1 h-[16px]  bg-[#1AF7A0] rounded-full" />
                    <h3 className="uppercase">revenue model</h3>
                </div>
                <article className='flex flex-row w-full'>
                    <section className=' w-full'>
                        <ul className='flex flex-col gap-12'>
                            {
                                revenue.map(({ icon, text }, index) => {
                                    return (
                                        <div key={index} className='flex border-b-[1px] py-4 px-2 flex-roy justify-start items-center gap-4 max-w-[450px]'>
                                            <Image alt='icon' src={icon} />
                                            <li className='text-[24px]'>
                                                {text}
                                            </li>
                                        </div>

                                    )
                                })
                            }
                        </ul>

                    </section>
                    <section className='flex items-center justify-center'>
                        <Lottie animationData={animationData} />
                    </section>
                </article>
            </section>
        </>
    )
}