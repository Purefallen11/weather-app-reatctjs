import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import WeatherCard from './WeatherCard'

function App() {

  const [current, setCurrent] = useState([])
  const [location, setLocation] = useState([])

  useEffect(() => {
    axios
    .get(`https://api.weatherapi.com/v1/current.json?key=127534eed2164d31aa1155956212806&q=Dallas&aqi=no
`)
      .then(res => {
        console.log(res)
        setCurrent(res.data.current)
        setLocation(res.data.location)
      })
      .catch(err => {
      console.log("something went wrong", err)
    })
  },[])

  return (
    <div className="App">
      <WeatherCard current={current} location={location}/>
    </div>
  );
}

export default App;
