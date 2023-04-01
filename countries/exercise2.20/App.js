
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const searchCountries = async () => {
      if (search) {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
        setCountries(response.data);
      } else {
        setCountries([]);
      }
    }

    searchCountries();
  }, [search]);


  const handleClick = (newCountry) => {
    return (
      <div>
        {console.log(newCountry)}
        <h2 key={newCountry.name.common}>{newCountry.name.common}</h2>
        <p>capital : {newCountry.capital}</p>
        <p>area : {newCountry.area}</p>
        <h3>Language : </h3>
        {Object.keys(newCountry.languages).map((lang) => <li>{lang}</li>)}
        <br />
        <img src={newCountry.flags.png} />
      </div>
    )


  }


  return (
    <>
      find countries : <input value={search} onChange={handleSearch} />
      <ul>
        {
          countries.length === 1 ?
            countries.map((country) => (
              <div>
                {
                }
                <h2 key={country.name.common}>{country.name.common}</h2>
                <p>capital : {country.capital}</p>
                <p>area : {country.area}</p>
                <h3>Language : </h3>
                {Object.keys(country.languages).map((lang) => <li>{lang}</li>)}
                <br />
                <img src={country.flags.png} />
                <WeatherApp
                  searchValue={countries}
                />
              </div>
            ))
            :
            countries.length < 10 ? (
              countries.map((country) => (
                <div>
                  <li key={country.name.common}>{country.name.common}</li>
                  <button onClick={() => { handleClick(country) }}>show</button>
                </div>

              ))
            )
              : (
                <li>Too many matches, specify another filter</li>
              )}
      </ul>

    </>
  )
}

export default App;


const WeatherApp = (props) => {
  const [weather, setWeather] = useState(null);
  const { searchValue } = props;

  let country = searchValue[0].name.common;

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const searchWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${apiKey}`
      );
      setWeather(response.data);
    };
    searchWeather();
  }, [country, apiKey]);

  return (
    <>
      {weather && (
        <>
          <h2>Weather in {country}</h2>
          <p>temparature: {weather.list[0].main.temp}</p>
          {console.log(weather.list[0].weather[0].icon)}

          <img src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`} alt="icon" />
          <p>wind: {weather.list[0].wind.speed} m/s</p>

        </>
      )}
    </>
  );
};







