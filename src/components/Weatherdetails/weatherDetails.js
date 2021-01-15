import react from 'react';
import classes from "./weatherDetails.module.css";

const weatherDetails= (props)=> {
    return(
        <div className={classes.Section}>
            <div className={classes.Section1}>
            <table>
                <tr>
                    <td><h4>High/Low: </h4></td>
                    <td><span>{Math.floor(props.data.main.temp_max-273.15)}/{" "}
                        {Math.floor(props.data.main.temp_min-273.15)} C </span></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><h4>Humidity: </h4></td>
                    <td><span>{props.data.main.humidity}%</span></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><h4>Pressure: </h4></td>
                    <td><span>{props.data.main.pressure}hPa</span></td>               
               </tr>
            </table>
            <table>
                <tr>
                    <td><h4>Visibility: </h4></td>
                    <td><span>{Math.floor(props.data.visibility/1000)}km</span></td>
                </tr>
            </table>
            </div>
            <div className={classes.Section2}>
            <table>
                <tr>
                    <td><h4>Wind Speed: </h4></td>
                    <td><span>{Math.floor((props.data.wind.speed)*18/5)}km/hr</span></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><h4>Wind Direction: </h4></td>
                    <td><span>{props.data.wind.deg}<sup>o</sup>deg</span></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><h4>Sunrise: </h4></td>
                    <td><span>
                        {new Date(props.data.sys.sunrise*1000).toLocaleTimeString()}
                        </span></td>               
               </tr>
            </table>
            <table>
                <tr>
                    <td><h4>Sunset: </h4></td>
                    <td><span>
                        {new Date(props.data.sys.sunset *1000).toLocaleTimeString()}
                        </span></td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default weatherDetails;