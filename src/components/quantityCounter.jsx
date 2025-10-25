export default function QuantityCounter({ quantity, onAdd, onRemove}) {
  return (
    <div>
      <button onClick={onRemove}>-</button>
      <span id="quantity_Product">{quantity}</span>
      <button onClick={onAdd}>+</button>
    </div>
  );
}