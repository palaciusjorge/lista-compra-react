import Anadir from './components/Anadir';
import ClearButton from "./components/ClearButton";

import List from './components/List'
import Title from './components/Title';

import { defaultCompra } from './constants.js'

import { useState , useEffect } from "react";

import './index.css'


const App = () => {


  const getInitialCompra = () => {
    const saved = localStorage.getItem("compra")
    return saved ? JSON.parse(saved) : defaultCompra
  }

  const getInitialCarro = () => {
    const saved = localStorage.getItem("carro")
    return saved ? JSON.parse(saved) : []
  }

  const [compra, setCompra] = useState(getInitialCompra)
  const [carro, setCarro] = useState(getInitialCarro)
  useEffect(() => {
  localStorage.setItem("compra", JSON.stringify(compra))
  }, [compra])
  useEffect(() => {
  localStorage.setItem("carro", JSON.stringify(carro))
  }, [carro])
  


  const addProduct = ({ name }) => {
    const normalize = (text) => text.trim().toLowerCase()

    const exists = compra.some(product => normalize(product.name) === normalize(name));


    if (exists) {
      alert('El producto ya existe en la lista de la compra');
      return;
    }
    
    const newProduct = {
      id: Date.now(), // Genera un ID único basado en la fecha y hora actual, asi evito problemas de duplicidad de ID (no es relevante)
      name : name.trim(), // Elimina espacios en blanco al inicio y al final del nombre del producto,
      done: false
    };

    setCompra([...compra, newProduct]);
   } //Modificamos siempre desde el setCompra para no modificar el estado directamente.

    const moveToCarro = (id) => {
    const product = compra.find(item => item.id === id)

    setCompra(compra.filter(item => item.id !== id))
    setCarro([...carro, product])
    }

    const removeFromCarro = (id) => {
    setCarro(carro.filter(item => item.id !== id))
    }

    const clearAll = () => {
    setCompra([])
    setCarro([])
    }


  return (
  <section className = 'layout'>

    <Title text={`Total productos: ${compra.length + carro.length}`} />
    <div className='column'>
      <List 
      content={compra} 
      title="Lista de la compra"
      onItemClick={moveToCarro}
    />
    </div>
    
    <div className='column'>
      <List
        content={carro} 
        title="Productos ya en el carro"
        onItemClick={removeFromCarro}
      />
    </div>
    <div className='sidebar'>
      <Anadir newProduct={addProduct} />

      <ClearButton onClear = {clearAll}/>
    </div>

  </section>
  )
}

export default App
