



export default function Vectores() {
    return (
        <main className="w-full absolute h-full top-0 overflow-hidden">
            <section className="absolute w-full h-full z-10">
                <div className="w-[456px] h-[456px] absolute right-[-162px] bottom-[100px] rounded-[556px] border-[1px] border-solid border-[#c3d6de61]"></div>
                <div className="w-[225px] h-[225px] rotate-[39.162deg] absolute right-[-35.62px] top-[-10px] filtro-vector_1 rounded-full"></div>
                <div className="w-[550px] h-[550px] absolute rotate-[360.49deg] top-[100px] right-1/3 filtro-vector_2 rounded-full"></div>
                <div className="w-[200px] h-[200px] rotate-[159.49deg] absolute left-6 bottom-12 filtro-vector_3 rounded-full"></div>
                <div className="w-[456px] h-[456px] absolute left-[-250px] bottom-[80px] rounded-[556px] border-[1px] border-solid border-[#c3d6de61]"></div>
                <div className="w-[200px] h-[200px] rotate-[159.49deg] absolute left-0 top-[-125px] filtro-vector_3 rounded-full"></div>
            </section>
            <div id="filtro" className="absolute top-0 right-0 z-20 w-full h-full"></div>
        </main>
    )
}