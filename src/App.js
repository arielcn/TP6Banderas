import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        setPaises(response.data.data);
      });
  });

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="App">
      {paises[randomNumber()]}
      <img src='paises.flag'></img>
    </div>
  );
}

export default App;
