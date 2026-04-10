const Item = ({ product, onClick }) => {
  return (
    <li onClick={() => onClick(product.id)}>
      {product.name}
    </li>
  )
}

export default Item