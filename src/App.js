import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [paises, setPaises] = useState([]);
  const [nombre, setNombre] = useState('');
  const [pais, setPais] = useState({});
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        const paises = response.data.data;
        setPaises(paises);
        const paisRandom = paises[Math.floor(Math.random() * paises.length)];
        setPais(paisRandom);
      });
  }, []);

  const validarName = (e) => {
    e.preventDefault();
    if (nombre === pais.name) {
      console.log("very good")
      {skipPais()};
      setPuntos(puntos +10);
    }else{
      setPuntos(puntos -1)
      if (puntos <= 0) {
        setPuntos(puntos)
      }
    }
  }

  const skipPais = () => {
    const paisRandom = paises[Math.floor(Math.random() * paises.length)];
    setPais(paisRandom);
  }

  return (
    <div className="App">
      <h1>{puntos}</h1>
      <img width='40%' height='400px' src={pais.flag} />
      <form onSubmit={validarName}>
        <input onKeyUp={(e) => setNombre(e.target.value)} placeholder='nombre del pais' />
        <button type='submit'>Verificar</button>
        <button onClick={skipPais}>Skip</button>
      </form>
    </div>
  );
}

export default App;
