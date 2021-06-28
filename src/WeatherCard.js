import React from 'react'


const WeatherCard = ({ current, location }) => {
	
	return (
		<div>
			<div>
				<p>
					{location.name}, {location.region}, {location.country}
				</p>

				<p>
					{location.localtime}
				</p>
			</div>
			<div>
				<div>
					condition : blah blah
					
				</div>
				<div>
					Currently it is: {current.temp_f} f <br />
					Feels like {current.feelslike_f} f
				</div>
				
			</div>
		</div>
		
	)
}
/*
current:
cloud: 75
condition: {text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png", code: 1003}
feelslike_c: 34.3
feelslike_f: 93.7
gust_kph: 13.7
gust_mph: 8.5
humidity: 63
is_day: 1
last_updated: "2021-06-28 13:30"
last_updated_epoch: 1624905000
precip_in: 0
precip_mm: 0
pressure_in: 30.5
pressure_mb: 1015
temp_c: 29.4
temp_f: 84.9
uv: 6
vis_km: 16
vis_miles: 9
wind_degree: 40
wind_dir: "NE"
wind_kph: 9
wind_mph: 5.6

*/
export default WeatherCard