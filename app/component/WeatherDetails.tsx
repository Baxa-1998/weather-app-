import React from 'react'
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { GiWindSlap } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { PiCompassFill } from "react-icons/pi";
import { MdAir } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";

interface WeatherDetailsProps {
  weather: {
    current:{
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number; 
      feelslike_f: number;
      vis_km: number; 
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    }
  }
}


export const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  return (
    <div className='p-12 z-[2]'>
      <h1 className='mb-4 text-2xl z-[5] text-white'>Weather Details</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white'>

        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Wind Speed</h3>
            <h3>{weather.current.wind_mph} mph</h3>

          </div>
          <div>
            <GiWindSlap fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Humidity</h3>
            <h3>{weather.current.humidity}%</h3>

          </div>
          <div>
            <WiHumidity fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Wind direction</h3>
            <h3>{weather.current.wind_dir}</h3>

          </div>
          <div>
            <PiCompassFill fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Sunrise</h3>
            <h3>{weather.forecast.forecastday[0].astro.sunrise}</h3>

          </div>
          <div>
            <BsSunriseFill fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
          <h3>Sunset</h3>
            <h3>{weather.forecast.forecastday[0].astro.sunset}</h3>

          </div>
          <div>
            <BsSunsetFill fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Air Pressure</h3>
            <h3>{weather.current.pressure_mb} hPa</h3>

          </div>
          <div>
            <MdAir fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Feel Like</h3>
            <h3>{weather.current.feelslike_f}°</h3>

          </div>
          <div>
            <CiTempHigh fontSize={40} />

          </div>

        </div>
        <div className='bg-white/40 flex p-4 items-center justify-center gap-6 rounded-xl'>
          <div className='text-2xl'>
            <h3>Visibility</h3>
            <h3>{weather.current.vis_km} km</h3>

          </div>
          <div>
            <FaEye fontSize={40} />

          </div>

        </div>
      </div>
    </div>
  )
}
