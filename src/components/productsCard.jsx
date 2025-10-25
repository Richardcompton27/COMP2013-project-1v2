
import QuantityCounter from "./quantityCounter";

export default function ProductsCard({

  productName,
  brand,
  //quantity,
  image,
  productQuantity,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  return (
    
  <div className="ProductCard">
  <img src={image} alt={productName} />
  <h4>{productName}</h4>
  <p>{brand}</p>
  
  <QuantityCounter
    quantity={productQuantity.quantity}
    onAdd={() => handleAddToQuantity(productQuantity.id)}
    onRemove={() => handleRemoveQuantity(productQuantity.id)}
  />
  <p>${productQuantity.price.toFixed(2)}</p>
  <button className="add-btn" onClick={() => handleAddToCart(productQuantity.id)}>
    Add to Cart
    
  </button>
    </div>
    
    
  );
}
