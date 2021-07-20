import React, { useState } from "react";
import "../styles/Tracker.css";
import Data from "./Data";
import axios from "axios";

function Tracker() {
  // States:
  const [input, setInput] = useState("");

  // Functions:
  const handleInputValue = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleApiReq = () => {
    if (input) {
      // Make an api req:
      axios
        .get(`https://disease.sh/v3/covid-19/countries/${input}?strict=true`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      console.log("Input is null");
    }
  };

  return (
    <div className="container-tracker">
      <form>
        <label>Country Name: </label>
        <input
          type="text"
          className="Country-search"
          required
          onChange={handleInputValue}
        />
      </form>
      <button type="submit" className="submit-btn" onClick={handleApiReq}>
        Search
      </button>
    </div>
  );
}

export default Tracker;
