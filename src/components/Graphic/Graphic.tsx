'use client'
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

import { Darker_Grotesque } from "next/font/google"


const darker = Darker_Grotesque({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800', '400', '600', '500']
})


export default function Graphic() {
    // Define los datos del gráfico
    const chartData = {
        labels: [
            'PUBLIC SEED',
            'COMMUNITY INCENTIVES',
            'ECOSYSTEM FUND',
            'RESERVES',
            'INITIAL LP'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [40, 25, 20, 7, 8],
            backgroundColor: [
                '#B25EEE',
                '#1AF7A0',
                '#E0DDD6',
                '#B8C5D0',
                '#651CA8',
            ],
            hoverOffset: 5
        }],
    };

    // Extrae las etiquetas y los datos
    const { labels, datasets } = chartData;

    // Crea un nuevo arreglo para almacenar la información en el formato deseado
    const chartInfo = labels.map((label, index) => ({
        label: label,
        value: datasets[0].data[index], // Obtén el valor correspondiente del dataset
        color: datasets[0].backgroundColor[index]
    }));

    return (
        <section className={`${darker.className} relative w-full flex gap-12 flex-col items-center justify-between px-[120px] pb-[80px] bg-[#F6FAFF]`}>
            <div className=' absolute top-[-30px]  px-[120px] w-full flex justify-start items-start'>
                <h5 className='text-[#b8c5d03a] text-[200px] font-extrabold tracking-[6px] leading-[115%] '>TOKENOMICS</h5>
            </div>
            <section className='flex flex-row mt-[180px]  w-full items-center justify-center'>
                <div className=' flex w-full h-[700px]'>
                    <Pie data={chartData} options={{
                        plugins: {
                            legend: {
                                labels: {
                                    font: {
                                        size: 0, // Tamaño de la fuente
                                        weight: 'normal'
                                    },
                                    color: '#090E14',
                                    padding: 30,

                                }
                            }
                        }
                    }} />
                </div>
                <div className='flex flex-col items-start justify-start w-[50%]'>
                    {chartInfo.map((info, index) => (
                        <p key={index} className='text-[24px] font-medium leading-[100%] tracking-[0.96px] text-[#090E14] '>
                            <span className='text-[64px] font-extrabold leading-[100%] tracking-[-2.5px] ' style={{ color: info.color }}>{info.value}%</span><br />
                            {info.label}
                        </p>
                    ))}
                    <div className='flex flex-row gap-20 mt-12 items-start justify-start w-[50%]'>
                        <p className='text-[24px] font-medium leading-[100%] tracking-[0.96px] text-[#090E14] '><span className='text-[64px] font-extrabold leading-[100%] tracking-[-2.5px] '>100%</span><br />COMMUNITY TOKEN</p>
                        <p className='text-[24px] uppercase font-medium leading-[100%] tracking-[0.96px] text-[#090E14] '><span className='text-[64px] font-extrabold leading-[100%] tracking-[-2.5px] '>0%</span><br />team allocation</p>
                    </div>
                </div>
            </section>
        </section>
    )
}