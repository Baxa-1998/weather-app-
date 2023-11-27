"use client";


import { useState } from "react";

import Image from "next/image";
import { Input } from "./component/Input";
import { Current } from "./component/Current";
import { Week } from "./component/Week";
import { WeatherDetails } from "./component/WeatherDetails";

export default function Home() {


 

  const [city, setCity] = useState('')

  const [weather, setWeather] = useState<any>({})

  // const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`


  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement> ) => {
   
    
  


      if(e.key === 'Enter'){
        e.preventDefault()
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error();
          }
          const data = await response.json();
          setWeather(data);
          setCity('')
          setError('')
        } catch (error) {
          setError("City not found")
          setWeather('')
        }
        
      }

   


  }


  const handleSearchKey = async (e: React.MouseEvent<HTMLDivElement>) =>{
    e.preventDefault()
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setWeather(data);
      setCity('')
      setError('')
    } catch (error) {
      setError("City not found")
      setWeather('')
    }
    

  } 





  // const url2 = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${}`

  let content;
  if (Object.keys(weather).length === 0 && error === '') {
    content = (
      <div className="text-white text-center h-fit mt-[250px]">
        <h1 className="text-5xl font-bold mb-4">Welcome to the weather app</h1>
        <p className="text-xl">Enter a city name for get information about weather </p>
      </div>
    )
  } else if( error !== ''){
    content = (
        <div className="text-white text-center h-fit mt-[250px]">
      <p className="text-3xl font-bold mb-4">City not found</p>
        <p className="text-xl">Enter a valid City</p>
  
    </div> 
    )
  
    
  }
  
  else {
    content = (
      <> 
       <div className="flex md:flex-row flex-col p-12 items-center justify-between">
        <Current weather={weather} />
        <Week weather={weather} />
      </div>
        <div>
          <WeatherDetails weather ={weather}/>
        </div>
      </>


    )
  }


  return (
    <div className="h-fit">

      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]">
      </div>
      <Image className="img" src='/background.jpg' alt="back" layout="fill" />
      <div className="relative flex flex-col md:flex-row items-center justify-between p-12">
        <Input handleSearchKey={handleSearchKey}  handleSearch={handleSearch} setCity={setCity} />

        <h1 className="mb-8 md:mb-0 order-1 py-2 px-4 rounded-xl font-bold text-white z-[2] text-[22px]">Weather App.</h1>

      </div>
      <h2 className="relative z-[999]">
        {content}
      </h2>







    </div>

  )
}
