import React, {useState} from 'react';
const api = {
   key:"7b69a8c0ae232af4ca0e1cacf81ef173",
   base: "https://api.openweathermap.org/data/2.5/"
}





function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt=> {
    if  (evt.key ==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res =>res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  return (
    <div className={ (typeof weather.main !="undefined") ? ((weather.main.temp > 20) ? 'app warm' : 'app') :'app'} >
       <main>
         <div className ="search-box">
           <input 
             type="text"
             className="search-bar"
             placeholder="Search..."
             onChange= {e =>setQuery(e.target.value)}
             value={query}
             onKeyPress={search} >
           </input>
    </div>
        {(typeof weather.main !="undefined") ? (
        <div>
           <div className="location-box">
             <div className="location"> {weather.name}, {weather.sys.country}   </div>
             <div className="date">{new Date().toDateString()}</div>
           </div>
           <div className="weather-box"> 
             <div className="temp"> 
               {Math.round(weather.main.temp)}°C </div>
             <div className="weather"> {weather.weather[0].main} </div>
           </div>
        </div>
         ) :('')}
       </main>
    </div>
  );
}

export default App;

