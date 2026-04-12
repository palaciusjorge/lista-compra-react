import Item from '../Item/'
import Title from '../Title'

const List = ({ content, title, onMove, onDelete }) => {
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
                onMove={onMove}
                onDelete={onDelete}
              />
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default List