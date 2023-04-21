import Image from 'next/image'

import { Inter } from 'next/font/google'
import HandWave from '../utils/handWave'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className='min-h-screen items-center justify-center px-10 sm:px-20 md:px-10 lg:px-20 xl:px-30'>
            <div className='md:grid flex grid-cols-5 xl:grid-cols-7 flex-col-reverse md:gap-8 gap-10 w-full '>
                <div className='col-span-3 xl:col-span-5 flex flex-col w-full lg:w-full gap-20'>
                    <div className='flex flex-col justify-center w-full md:h-screen gap-2'>
                        <h1 className='text-5xl max-w-xl font-semibold'>
                            Hey there! <HandWave minInterval={10000} maxInterval={25000} />
                        </h1>
                        <h1 className='text-3xl max-w-xl break-after-column'>My name is Frederik Lauenborg and I'm a Visual Designer based in Copenhagen</h1>
                    </div>
                </div>
                <div className='md:sticky md:top-0 flex py-10  col-span-2  md:h-screen items-center justify-center md:justify-end'>
                    <div className='flex w-96 md:w-full flex-col gap-4 p-4 bg-white border-2 shadow-xl border-black rounded-3xl'>
                        <Image src='/img/pb.webp' width='750' height='750' alt='Frederik Lauenborg' className='aspect-square rounded-xl object-top object-cover' />
                        <nav className='flex flex-row sticky top-20 gap-2 p-2 w-full justify-evenly border-2 rounded-xl border-black'>
                            <a className='transition-all flex w-full h-10 items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer'>Project</a>
                            <div className='bg-slate-200 w-0.5'></div>
                            <a className='transition-all flex w-full h-10 items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer'>About</a>
                            <div className='bg-slate-200 w-0.5'></div>
                            <a className='transition-all flex w-full h-10 items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer'>Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    )
}
