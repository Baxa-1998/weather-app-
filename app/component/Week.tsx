import React from 'react'


interface DayForecast{
  weather: string;
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    }; 
    maxtemp_f: number;
    mintemp_f: number;
  }
}

interface WeekForecastProps{
  weather: {
    forecast:{
      forecastday: DayForecast[];
    };
  };
}

export const Week = ({weather}: WeekForecastProps) => { 

  return (
    <div className='grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full z-[2]'> 
    {weather?.forecast?.forecastday?.map((day, i)=> (
      <div key={i} className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
        <p>{new Date(day?.date).toLocaleString('en-US', {weekday: 'short'})}</p> 
        <img src={day?.day?.condition?.icon} alt={day?.day?.condition?.text} /> 
        <div>
          <p>H {day.day.maxtemp_f.toFixed()}°</p>
          <p>L {day.day.mintemp_f.toFixed()}°</p>
        </div>
      </div>  

      
    ))}
  
    </div>
  )
}