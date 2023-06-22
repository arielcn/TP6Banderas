import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ paises, setPaises ] = useState([]);
  const [ nombre, setNombre ] = useState('');
  const [ pais, setPais ] = useState({});

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        const paises = response.data.data;
        setPaises(paises);
        const paisRandom = paises[Math.floor(Math.random() * paises.length)];
        setPais(paisRandom);
      });
  }, []);

  const validarName = () => {
    if (nombre === pais.name) {
      console.log("very good")
    }
  }

  return (
    <div className="App">
      <h1>{pais.name}</h1>
      <img width='40%' src={pais.flag}/>
      <form onSubmit={validarName()}>
        <input onKeyUp={(e) => setNombre(e.target.value)} placeholder='nombre del pais' />
        <button type='submit'>Verificar</button>
      </form>
    </div>
  );
}

export default App;
