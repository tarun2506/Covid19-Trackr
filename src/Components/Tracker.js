import React, { useState, useEffect } from "react";
import "../styles/Tracker.css";
import axios from "axios";

function Tracker() {
  // States:
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    // Make an api req:
    axios
      .get(`https://disease.sh/v3/covid-19/countries/aka?strict=true`)
      .then((response) => {
        console.log(response);
        setApiData(response.data);
        console.log(apiData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleInputValue = (e) => {
    setInput((prev) => e.target.value);
  };

  const handleApiReq = () => {
    //Make an api req:
    if (input) {
      axios
        .get(`https://disease.sh/v3/covid-19/countries/${input}?strict=true`)
        .then((response) => {
          setApiData(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      console.log("no input");
    }
  };

  return (
    <div className="container-tracker">
      <div className="search">
        <label>Country Name: </label>
        <input
          type="text"
          className="Country-search"
          required
          onChange={handleInputValue}
        />
      </div>
      <button type="submit" className="submit-btn" onClick={handleApiReq}>
        Search
      </button>
      {apiData && (
        <div>
          <div className="tracker-info">
            <h1>Population: {apiData.population}</h1>
            <h2>Active cases - {apiData.active}</h2>
            <h2>Total cases - {apiData.cases}</h2>
            <h2>Total Deaths - {apiData.deaths}</h2>
            <h2>Recovered: {apiData.recovered}</h2>
            <img src={apiData.countryInfo.flag} alt="flag" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Tracker;
