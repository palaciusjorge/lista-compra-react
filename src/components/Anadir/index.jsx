import { useState } from 'react'

const Anadir = ( { newProduct } ) => {
    const[name, setName] = useState('')

    const handleChange = ({ target }) => {
        setName(target.value)
    }
    const handleClick = () => {
        newProduct ({ name })
    }
    return(
        <section>
            <h3>Añadir producto</h3>

            <input onChange={handleChange} type="text"/>   

            <button onClick={handleClick}> 
                Añadir
            </button>
        
        </section>
    )
}
export default Anadir 