import React from 'react'
import { getCurrentDate } from '../utils/currentWeather' 
import { IoLocationSharp } from "react-icons/io5";


interface CurrentProps {
  weather: {
    current: {
      condition: {
        icon: string;
        text: string;
      }; 
      temp_f: number;
    }; 
    location: {
      name: string;
      region: string
    } 
  }
}

export const Current = ({weather}: CurrentProps) => { 
  const currentWeather = getCurrentDate()
  const weatherIcon =  weather.current?.condition?.icon   
  return (
    <div className='z-[2]'>
          <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
      <div className='flex items-center'> 
      <div>
            <h1 className='text-3xl text-white'>Today</h1> 
      <p className='text-white'>{currentWeather}</p>
      </div> 
      {weatherIcon && (
        <img className='w-[50px] object-cover' src={weatherIcon} alt={weather.current.condition.text} />
      )}
  
      </div>
      
      <div>
       <p className='text-5xl text-white'>{weather?.current?.temp_f?.toFixed()} <span className='text-3xl'>°</span></p>
      <span className='text-white'>{weather.current?.condition?.text}</span>
      </div>

      <div>
        <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
        <IoLocationSharp/>
        <p>{weather.location?.name},{weather?.location?.region}</p>

        </div>
      </div>


    </div>
    </div>

  )
}
