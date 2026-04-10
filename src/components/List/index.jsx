import Item from '../Item/'
import Title from '../Title'

const List = ({ content, title, onItemClick }) => {
  return (
    <section>
      <Title title={title} />
      <section>
        <ul>
          {content.map((product) => {
            return (
              <Item 
                key={product.id} 
                product={product}
                onClick={onItemClick}
              />
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default List