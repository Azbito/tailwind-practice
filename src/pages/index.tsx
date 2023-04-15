import Image from 'next/image'
import Duck from '../../public/images/duck.jpg'

const itemsStyle = "bg-slate-900 hover:bg-slate-800 flex items-center justify-center h-screen text-center text-white h-full duration-300 rounded-lg"

export default function Home() {

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <div className='flex items-center justify-center  flex-col'>
        <Image src={Duck} alt='duckling' className='rounded-full w-32 mt-16 hover:scale-125 transition duration-300  shadow-2xl' />
        <strong className='text-2xl text-white bg-indigo-500 p-5 rounded-lg font-sans mt-5'>This is a flexbox practicing with Tailwind</strong>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-96 p-8">
        <p className={itemsStyle}>1</p>
        <p className={itemsStyle}>2</p>
        <p className={itemsStyle}>3</p>
        <p className={itemsStyle}>4</p>
        <p className={itemsStyle}>5</p>
        <p className={itemsStyle}>6</p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-96 p-8 bg-purple-600 w-1/1 hover:-translate-y-56 duration-300 shadow-2xl">
        <div className="flex items-center flex-row-reverse gap-5 w-full rounded-full">
          <p className="bg-sky-400 flex items-center justify-center text-white w-32 h-full rounded-lg shadow-2xl">1</p>
          <p className="bg-sky-700 flex items-center justify-center text-white w-20 h-full rounded-lg shadow-2xl">2</p>
          <p className="bg-indigo-900 flex items-center justify-center text-white w-60 h-full rounded-lg shadow-2xl">3</p>
          <p className="bg-indigo-900 flex items-center justify-center text-white w-1/3 h-full rounded-lg shadow-2xl">4</p>
        </div>
        <div className="flex items-center flex-row gap-5 w-full">
          <p className="bg-rose-700 flex items-center justify-center text-white w-1/2 h-full rounded-tl-full">4</p>
          <p className="bg-rose-700 flex items-center justify-center text-white w-1/6 h-full">5</p>
          <p className="bg-rose-700 flex items-center justify-center text-white w-1/3 h-full">5</p>
        </div>
        <p className="bg-lime-500 flex items-center justify-center text-white rounded-bl-full">5</p>
        <div className="flex flex-row gap-5">
          <p className="bg-lime-500 flex items-center justify-center text-white w-1/2 rounded-full origin-center hover:rotate-45 duration-300">5</p>
          <p className="bg-lime-500 flex items-center justify-center text-white w-1/2 rounded-full origin-center hover:rotate-180 duration-300">5</p>
          <p className="bg-lime-500 flex items-center justify-center text-white w-1/2 rounded-full origin-center hover:rotate-12 duration-300">0</p>
        </div>

        <p className="bg-lime-500 flex items-center justify-center text-white rounded-tr-full">6</p>
        <p className="bg-emerald-700 flex items-center justify-center text-white rounded-br-full">7</p>
      </div>
      <div className="w-full">
        <div className="bg-amber-500 flex items-center justify-center text-white w-full h-32 hover:scale-110 transition duration-500  shadow-2xl z-10 relative">
        </div>
      </div>
    </div>
  )
}
