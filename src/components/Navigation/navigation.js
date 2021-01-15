import react from 'react';
import classes from './navigation.module.css';

const navigation= (props)=>{
    return (
        <div>
            <nav>
                <ul>
                    <li><span className={classes.Brand}>AccuClimate</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default navigation;