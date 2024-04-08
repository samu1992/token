'use client'
import { metrics } from "@/assets/constants/constants"
import { useEffect, useRef, useState } from 'react'



const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};
export default function Metrics() {
    const [isObserver, setIsObserver] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((([entry]) => {
            if (entry.isIntersecting) setIsObserver(entry.isIntersecting);
        }), options);

        const elementToObserve = ref.current;
        if (elementToObserve) observer.observe(elementToObserve);

        return () => {
            if (elementToObserve) {
                observer.disconnect();
            }
        };
    }, []);


    return (
        <main ref={ref} className="containerSlide gap-[120px] py-9 w-full bg-[#030504]">
            <section className={`${'logosSlide'} ${isObserver ? '' : 'noAnimation'} flex flex-row justify-center items-center py-9 px-0  gap-32`}>
                {
                    metrics.map(({ number, text }, index) => {
                        return (
                            <div className="flex flex-col justify-center items-center gap-6" key={index}>
                                <h2 className="number-metrics text-[#B8C5D0] text-[90px]">{number}</h2>
                                <p className="text-metrics text-[#FFF] text-[20px]">{text}</p>
                            </div>
                        )
                    })
                }
            </section>
            <section className={`${'logosSlide'} ${isObserver ? '' : 'noAnimation'} flex flex-row justify-center items-center py-9 px-0  gap-32`}>
                {
                    metrics.map(({ number, text }, index) => {
                        return (
                            <div className="flex flex-col justify-center items-center gap-6" key={index}>
                                <h2 className="number-metrics text-[#B8C5D0] text-[90px]">{number}</h2>
                                <p className="text-metrics text-[#FFF] text-[20px]">{text}</p>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}