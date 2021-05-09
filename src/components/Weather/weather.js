import react,{useEffect, useState} from 'react';
import classes from './weather.module.css';
import Navigation from '../Navigation/navigation';
import WeatherUI from '../WeatherUI/WeatherUI';
import Defaultpage from '../Defaultpage/defaultpage';
import Spinner from '../Spinner/Spinner';


const Weather= (props)=> {
    const [form,setForm] = useState({
        city: "",
        country: ""
    });
    const [weatherData,setData]= useState([]); 
    const [click,setClicked]= useState(false);
    const [error,setError]= useState(true);

    var apiKey= "0ffa9cd06b44a5813fc38bc672462748";

    const changeHandler= (event)=> {
        event.preventDefault();
        let {name,value}= event.target;
        if(name=== "city"){
            setForm({
                ...form,
                city: value
            });
        }
        if(name=== "country"){
            setForm({
                ...form,
                country: value
            });
        }
        
    }
    

    async function getWeatherData(e){
        e.preventDefault();
        setClicked(true);
        setError(false);
        let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city.trim()},${form.country}&appid=${apiKey}`)
                    .then(res=> {
                        return res.json();
                    }).catch(error=> {
                        setError(true);
                        setData(undefined);
                    });
         setData({
             data: data
        });
        setClicked(false);
    }
    return (

        <div className={classes.Weather}>
            <Navigation/>
            <div className={classes.Alignment} >
                    <form >
                        <label className={classes.Label}><h2>Enter Location:</h2></label>
                        <input type="text" name="city" autoComplete="off" placeholder="Enter city" onChange= {(event)=> changeHandler(event) } required></input>
                        
                        <button className={classes.Searchbtn} type="submit" onClick={(e)=> {getWeatherData(e)}}>Search</button>
                    </form>
            </div>
            {click? <Spinner/> : null}
            { weatherData.data!== undefined ? <WeatherUI data={weatherData.data} city={form.city} APIKEY={apiKey}/> : <Defaultpage/>}
            <footer>
                <p>AccuCLimate<br/>
                <a href="mailto:hege@example.com">accuClimate.com</a></p>
            </footer>
        </div>
    )
}

export default Weather;