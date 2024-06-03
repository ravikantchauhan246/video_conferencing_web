"use client"
import MeetingTypeList from "@/components/MeetingTypeList";
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <div className="flex flex-col gap-2">
            <h1 className='text-4xl font-extrabold lg:text-5xl'>
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home