'use client'
import { Darker_Grotesque } from 'next/font/google';


const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '600', '900']
})


const socialMedia = [
    {text: 'X'},
    {text: 'TELEGRAM'},
    {text: 'WHITEPAPER'},
    {text: 'DECK'},

]


export default function Footer() {



    return(
        <footer className="md:px-[60PX] px-6 gap-12  bg-[#000000] relative bottom-0 py-[30px] flex flex-col justify-center items-center w-full">
            <section className="w-full">
                <ul className={`${darker.className} gap-4 w-full flex flex-col justify-start items-start`}>
                    {
                        socialMedia.map(({text},index)=>{
                            return(
                                <li key={index} className="text-[#1AF7A0] text-[24px] font-extrabold leading-[106%] tracking-[0.96px]">{text}</li>
                            )
                        })
                    }
                </ul>
                
            </section>
            <section className='w-full  uppercase flex flex-row justify-end items-end  tracking-[6.325px] leading-[100%] font-black text-[#494949]'>
                    <h2 className='text-[#b8c5d03a] text-[50px] sm:text-[70px] md:text-[90px] lg:text-[120px] xl:text-[180px] 2xl:text-[200px] font-extrabold tracking-[6px] leading-[115%]'>Contact</h2>
            </section>
        </footer>
    )
}