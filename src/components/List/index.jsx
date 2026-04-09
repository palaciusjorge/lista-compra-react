import Item from '../Item/'

const List = ( { content } ) => {
  return (
        <section>
        <h2>Lista de la compra</h2>
            <section>
                <ul>
                    {content.map((product)=>{
                        return <Item key = {product.id} product={product.name}/>
                    })}
                </ul>
                
            </section>
        </section>
  )
}

export default List
