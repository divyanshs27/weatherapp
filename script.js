const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6986b3d387msh59534812b3d2e13p1ffe18jsn9c29b0eb7b78',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function weapi(city){
try {
	cityName.innerHTML=city
	var response = await fetch(url.replace("delhi",city), options);
	var result = await response.text();
	console.log(result);
	
    var result_json=JSON.parse(result)
	console.log(result_json);
	console.log(result_json.temp);
	// cloud_pct.innerHTML = result_json.cloud_pct
	temp.innerHTML  = result_json.temp
	temp2.innerHTML  = result_json.temp
	feels_like.innerHTML = result_json.feels_like
	humidity.innerHTML = result_json.humidity
	humidity2.innerHTML = result_json.humidity
	min_temp.innerHTML = result_json.min_temp
	max_temp.innerHTML = result_json.max_temp
	wind_speed.innerHTML = result_json.wind_speed
	wind_speed2.innerHTML = result_json.wind_speed
	wind_degrees.innerHTML = result_json.wind_degrees
	sunrise.innerHTML = result_json.sunrise
	sunset.innerHTML = result_json.sunset
} catch (error) {
	console.error(error);
}}
weapi("delhi");
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	weapi(city.value);
})


// const options = {
//     method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6986b3d387msh59534812b3d2e13p1ffe18jsn9c29b0eb7b78',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// }
// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options)
// .then(response=>response.json())
// .then(response=>{console.log(response)
// console.log(response.cloud_pct)
// })
// .catch(err=>console.error(err));