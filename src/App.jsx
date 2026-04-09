import Anadir from './components/Anadir/index.jsx';

import List from './components/List/index.jsx'

import { defaultCompra } from './constants.js'

import { useState } from "react";


const App = () => {


  const[compra, setCompra] = useState(defaultCompra);

  const addProduct = ({ name }) => {
    
    const newProduct = {
      id: Date.now(), // Genera un ID único basado en la fecha y hora actual, asi evito problemas de duplicidad de ID (no es relevante)
      name,
      done: false
    };

    setCompra([...compra, newProduct]); //Modificamos siempre desde el setCompra para no modificar el estado directamente.

  }


  return (

    <section>

      <List content = {compra} />

      <Anadir newProduct = {addProduct} />

    </section>
  )   
}

export default App
