import { react } from "react";
import classes from "./todayWeather.module.css";
import WeatherDetails from '../Weatherdetails/weatherDetails';

const todayWeather= (props)=>  {
    var {data}= props;
    var iconurl= "http://openweathermap.org/img/wn/" + `${props.data.weather[0].icon}` + ".png";
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    return(
        <div className={classes.Summary}>
            <div className={classes.Todaycard}>
                <div className={classes.Locationdata}>
                    <p className={classes.Location}>{props.data.name},<span className={classes.Country}>{props.data.sys.country}</span>
                    </p>
                    <span className={classes.Day}>{n}</span>
                    <span className={classes.Time}>{new Date().toLocaleTimeString()}</span>
                </div>
                <div className={classes.Weatherdata}>
                <span className={classes.Type}>{props.data.weather[0].description}</span>
                    <img src={iconurl} alt="icon"></img>
                    <span className={classes.Temp}>{Math.floor(props.data.main.temp-273)}<sup className={classes.Sup} >o</sup><span className={classes.Metric}>C</span></span>
                   

                </div>
                
            </div>
            <WeatherDetails data={data}/>
        </div>
    )
}

export default todayWeather;