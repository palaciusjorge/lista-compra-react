import { useState } from 'react'
import Title from '../Title'
import { TagTypes } from '../../types'

const Anadir = ( { newProduct } ) => {
    const[name, setName] = useState('')

    const handleChange = ({ target }) => {
        setName(target.value)
    }
    const handleClick = () => {
        newProduct ({ name })
        setName('')
    }
    return(
        <section>
            <Title title = "Añadir producto" tag={TagTypes.H3}/>

            <input onChange={handleChange} type="text" value = { name }/>   

            <button onClick={handleClick}> 
                Añadir
            </button>
        
        </section>
    )
}
export default Anadir 