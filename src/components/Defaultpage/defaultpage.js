import { react } from "react";
import classes from './defaultpage.module.css';

const defaultpage= (props)=> {
    return( 
        <div className={classes.Loader}>
            <div>
                <h1>AccuClimate</h1>
                <p className={classes.Tagline}>Accurate Weather reports at a glance</p>
                <p className={classes.Herotext}>AccuClimate makes it easy for you to know the weather of any location you're living in or you want to go.<br/>
                This global website presents official weather observations, weather forecasts and climatological information for selected cities worldwide.<br/>
                It also provides high and low temperatures of the day as well as additional information about Wind speed,Humidity,Wind direction,Pressure,Visibility along with sunrise and sunset timings too.<br/>
                Weather icons are shown alongside forecasts in this site to facilitate visual inspection.<br/>
                It also presents a detailed and a very accurate 5-day weather forecast.<br/></p>

            </div>
        </div>
    )
}

export default defaultpage;