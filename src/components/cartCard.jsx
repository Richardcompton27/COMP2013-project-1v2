import QuantityCounter from "./quantityCounter";

export default function CartCard({
  productName,
  image,
  price,
  quantity,
  id,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleRemoveItem,
}) {
  return (
    <div className="CartCard">
      <img src={image} alt={productName} />
      <h4>{productName}</h4>

      <QuantityCounter
        quantity={quantity}
        onAdd={() => handleAddToQuantity(id)}
        onRemove={() => handleRemoveQuantity(id)}
      />

      <p>${price.toFixed(2)}</p>
      <p>Total: ${(price * quantity).toFixed(2)}</p>

      <button className="RemoveButton" onClick={() => handleRemoveItem(id)}>
        Remove Item
      </button>
    </div>
  );
}
