
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

  let temp
  return (
    <>
      find countries : <input value={search} onChange={handleSearch} />
      <ul>
        {
          countries.length === 1 ?
            countries.map((country) => (
              <div key={country.name.common}>
                {
                }
                <h2 key={country.name.common}>{country.name.common}</h2>
                <p>capital : {country.capital}</p>
                <p>area : {country.area}</p>
                <h3>Language : </h3>
                {Object.keys(country.languages).map((lang) => <li>{lang}</li>)}
                <br />
                <img src={country.flags.png} />
              </div>
            ))
            :
            countries.length < 10 ? (
              countries.map((country) => (
                <li key={country.name.common}>{country.name.common}</li>
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


