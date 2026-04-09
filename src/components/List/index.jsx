import Item from '../Item/'
import Title from '../Title'

const List = ( { content, title } ) => {
  return (
        <section>
            <Title title={title} />
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
