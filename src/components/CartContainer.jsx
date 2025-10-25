import CartCard from "./cartCard";

export default function CartContainer({
  cartItems,
  handleCartAddToQuantity,
  handleCartRemoveQuantity,
  handleRemoveItem,
  handleEmptyCart,
  handleBuy,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="CartContainer">
      <h3>Cart Items: {cartItems.length}</h3>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="CartItems">
          {cartItems.map((product) => (
            <CartCard
              key={product.id}
              id={product.id}
              productName={product.productName}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
              handleCartAddToQuantity={handleCartAddToQuantity}
              handleCartRemoveQuantity={handleCartRemoveQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="CartSummary">
          <button id="emptyCart" onClick={handleEmptyCart}>
            Empty Cart
          </button>
          <button className="BuyButton" onClick={handleBuy}>
            Checkout
            <p id="checkout">${total.toFixed(2)}</p>
          </button>
        </div>
      )}
    </div>
  );
}
