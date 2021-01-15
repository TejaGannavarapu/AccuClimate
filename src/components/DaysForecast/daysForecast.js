import react from 'react';
import classes from './daysForecast.module.css';

const daysForecast= (props)=> {
    console.log(props.data);
    var iconurl= "http://openweathermap.org/img/wn/" + `${props.data.list[0].weather[0].icon}` + ".png";
    return(
        <div className={classes.Container}>
            <div className={classes.Row}>
                <div className={classes.Col1}>
                    <span>{new Date(props.data.list[0].dt*1000).toLocaleDateString()}</span>
                    <p><span className={classes.Temp}>{Math.floor(props.data.list[0].main.temp-273)}<sup>o</sup>C</span></p>
                    <img src={"http://openweathermap.org/img/wn/" + `${props.data.list[0].weather[0].icon}` + ".png"}></img>
                    <p><span  className={classes.Type}>{props.data.list[0].weather[0].description}</span></p>
                </div>
                <div className={classes.Col2}>
                    <span>{new Date(props.data.list[8].dt*1000).toLocaleDateString()}</span>
                    <p><span  className={classes.Temp}>{Math.floor(props.data.list[8].main.temp-273)}<sup>o</sup>C</span></p>
                    <img src={"http://openweathermap.org/img/wn/" + `${props.data.list[8].weather[0].icon}` + ".png"}></img>
                    <p><span className={classes.Type}>{props.data.list[8].weather[0].description}</span></p>
                </div>
                <div className={classes.Col3}>
                    <span>{new Date(props.data.list[16].dt*1000).toLocaleDateString()}</span>
                    <p><span className={classes.Temp}>{Math.floor(props.data.list[16].main.temp-273)}<sup>o</sup>C</span></p>
                    <img src={"http://openweathermap.org/img/wn/" + `${props.data.list[16].weather[0].icon}` + ".png"}></img>
                    <p><span className={classes.Type}>{props.data.list[16].weather[0].description}</span></p>
                </div>
                <div className={classes.Col4}>
                    <span>{new Date(props.data.list[24].dt*1000).toLocaleDateString()}</span>
                    <p><span className={classes.Temp}>{Math.floor(props.data.list[24].main.temp-273)}<sup>o</sup>C</span></p>
                    <img src={"http://openweathermap.org/img/wn/" + `${props.data.list[24].weather[0].icon}` + ".png"}></img>
                    <p><span className={classes.Type}>{props.data.list[24].weather[0].description}</span></p>
                </div>
                <div className={classes.Col5}>
                    <span>{new Date(props.data.list[32].dt*1000).toLocaleDateString()}</span>
                    <p><span className={classes.Temp}>{Math.floor(props.data.list[32].main.temp-273)}<sup>o</sup>C</span></p>
                    <img src={"http://openweathermap.org/img/wn/" + `${props.data.list[32].weather[0].icon}` + ".png"}></img>
                    <p><span className={classes.Type}>{props.data.list[32].weather[0].description}</span></p>
                </div>
            </div>
        </div>
    )
}

export default daysForecast;