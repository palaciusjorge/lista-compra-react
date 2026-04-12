import { FaTrash, FaShoppingCart } from "react-icons/fa"

const Item = ({ product, onMove, onDelete }) => {
  return (
    <li className="item">
      
      <button 
        className="icon-btn"
        onClick={() => onDelete(product.id)}
      >
        <FaTrash />
      </button>

      <span className="item-text">
        {product.name}
      </span>

      {onMove && (
        <button 
          className="icon-btn"
          onClick={() => onMove(product.id)}
        >
          <FaShoppingCart />
        </button>
      )}

    </li>
  )
}

export default Item