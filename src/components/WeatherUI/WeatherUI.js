import { react, useState } from "react";
import classes from './WeatherUI.module.css';
import TodayWeather from '../TodayWeather/todayWeather';
import DaysForecast from '../DaysForecast/daysForecast';

const WeatherUI= (props)=> {
    var {data}= props;
    const [forecastData,setForecast]= useState([]);
    const [available,setShow]= useState(false);

    const displayHandler= ()=> {
        var x = document.getElementById("btn");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    async function forecastHandler(e){

        e.preventDefault();
        if(!available){
            let daysData= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city.trim()}&appid=${props.APIKEY}`)
                    .then(res=> {
                        return res.json();
                    });
            setForecast({
                daysData: daysData
            });
        }
        setShow(!available);
    }
    return(
        
        <div className={classes.Con}>
            {data.cod != "404"? (
            <div>
                <TodayWeather data={data}/>
                <div className={classes.Alignment}>
                    <button className={classes.Forecastbtn} type="button" onClick={(e)=> forecastHandler(e)}>5-day Forecast</button>
                </div>
                {available? <DaysForecast  id = "btn" data={forecastData.daysData}/>: null}
            </div>
                
            ) : (
                <div className={classes.Error}><p >{data.message}</p></div>
            )}
            
        </div>
        
    )
}
 

export default WeatherUI;