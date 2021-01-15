import react from 'react';
import classes from './App.module.css';
import Weather from './components/Weather/weather';

function App() {
  return (
    <div className={classes.App}>
      <Weather/>
    </div>
  );
}

export default App;
