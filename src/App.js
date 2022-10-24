import {useState} from 'react';
import './App.css'
import ComponenteEjemplo from './Padre';
import Hijo from './Hijo';

function App() {
  return (
    <>
    <ComponenteEjemplo >
      <Hijo name={"Ariel"}/>
    </ComponenteEjemplo>
    <ComponenteEjemplo >
      <Hijo name={"Santiago"}/>
    </ComponenteEjemplo>
    </>
  );
}

export default App;
