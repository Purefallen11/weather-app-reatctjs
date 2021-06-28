import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import WeatherCard from './WeatherCard'
import {Button} from 'reactstrap'

function App() {

  const [current, setCurrent] = useState([])
  const [location, setLocation] = useState([])
  const [condition, setCondition] = useState([])
  const [city, setCity] = useState('las vegas')

  

  useEffect(() => {
    axios
    .get(`https://api.weatherapi.com/v1/current.json?key=127534eed2164d31aa1155956212806&q=${city}&aqi=no
`)
      .then(res => {
        console.log(res)
        setCurrent(res.data.current)
        setLocation(res.data.location)
        setCondition(res.data.current.condition)
      })
      .catch(err => {
      console.log("something went wrong", err)
    })
  },[city])

  return (
    <div className="App">
      <WeatherCard current={current} location={location} condition={condition} />
      <Button color="primary" onClick={() => setCity('dallas')}>Dallas</Button>
      <Button color="primary" onClick={() => setCity('austin')}>Austin</Button>
      <Button color="warning" onClick={() => setCity('tegucigalpa')}>Tegucigalpa</Button>
    </div>
  );
}

export default App;
