import React, { useState, useEffect } from "react";
import "../styles/Tracker.css";
import axios from "axios";

function Tracker() {
  // States:
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState(null);
  const [inputError, setInputError] = useState("");
  useEffect(() => {
    // Make an api req:
    axios
      .get(`https://disease.sh/v3/covid-19/countries/aka?strict=true`)
      .then((response) => {
        setApiData(response.data);
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
          setInputError("");
        })
        .catch((err) => {
          setInputError("Check the Spelling...kiddo!");
        });
    } else {
      console.log("no input");
    }
  };

  return (
    <>
      <div className="search">
        <div className="input-label">
          <label>Country Name ➡</label>
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
      </div>
      {apiData && (
        <>
          <div className="tracker-info">
            <img src={apiData.countryInfo.flag} alt="flag" />
            <div className="active-cases try">
              <h2>Active: &nbsp;</h2>
              <p>{apiData.active}</p>
            </div>
            <div className="total-cases try">
              <h2>Total: &nbsp;</h2>
              <p>{apiData.cases}</p>
            </div>
            <div className="total-deaths try">
              <h2>Deaths: &nbsp;</h2>
              <p>{apiData.deaths}</p>
            </div>
            <div className="Recovered try">
              <h2>Recovered: &nbsp;</h2>
              <p>{apiData.recovered}</p>
            </div>
          </div>
        </>
      )}

      {inputError && <div className="error-div">{inputError}</div>}
    </>
  );
}

export default Tracker;
