import { useState } from "react";
import ProductsContainer from "./productsContainer";
import NavBar from "./navBar";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer({ data }) {
    //controls the products and has the object for all its items
  const [productQuantity, setProductQuantity] = useState(
    data.map((product) => ({
      id: product.id,
      quantity: 0,
      //makes sure the price is represented and displayed properly
      price: parseFloat(product.price.replace("$", "")),
    }))
  );
//controls the cart and has the object for all of its items
  const [cartItems, setCartItems] = useState([]);

  // Add quantity
  const handleAddToQuantity = (productID) => {
    const newProductQuantity = productQuantity.map((prod) =>
      prod.id === productID ? { ...prod, quantity: prod.quantity + 1 } : prod
    );
    setProductQuantity(newProductQuantity);
  };

  // Remove quantity ternerary
  const handleRemoveQuantity = (productID) => {
    const newProductQuantity = productQuantity.map((prod) =>
      prod.id === productID && prod.quantity > 0 
    ? { ...prod, quantity: prod.quantity - 1 } : prod
    );
    setProductQuantity(newProductQuantity);
  };


  // Add to cart quantity
  const handleCartAddToQuantity = (productID) => {
    const newCartItems = cartItems.map((item) =>
      item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCartItems);
  };
  
  // Remove from cart quantity ternerary
  const handleCartRemoveQuantity = (productID) => {
    const newCartItems = cartItems.map((item) =>
      item.id === productID && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(newCartItems);
  };


const handleAddToCart = (productID) => {
console.log("Adding to cart:", productID);
  const productData = data.find((p) => p.id === productID);
  const quantityData = productQuantity.find((p) => p.id === productID);

  // prevent adding 0 quantity
  if (!quantityData || quantityData.quantity === 0) {
    alert("Please select a quantity before adding to cart");
    return;
  }

  setCartItems((prev) => {
    const existing = prev.find((item) => item.id === productID);
    if (existing) {
      // if the product is already in cart, update its quantity
      return prev.map((item) =>
        item.id === productID
          ? { ...item, quantity: item.quantity + quantityData.quantity }
          : item
      );
    }
    // otherwise, add a new item to the cart
    return [
      ...prev,
      {
        id: productData.id,
        productName: productData.productName,
        price: quantityData.price,
        quantity: quantityData.quantity,
        image: productData.image,
      },
    ];
  });
};
    const handleEmptyCart = () => {
    setCartItems([]); // clears the entire cart
    };

    const handleBuy = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
    };

    const handleRemoveItem = (productID) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productID));
};

  return (
    //displays navbar at the very top of the page
    <div>
        
      <NavBar username="Username" cartCount={cartItems.length} />

    <div className="main">
    <div className="products-section">
        <ProductsContainer
        data={data}
        productQuantity={productQuantity}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        handleAddToCart={handleAddToCart}
        />
    </div>

    <div className="cart-section">
        <CartContainer
        cartItems={cartItems}
        handleEmptyCart={handleEmptyCart}
        handleBuy={handleBuy}
        handleCartAddToQuantity={handleCartAddToQuantity}
        handleCartRemoveQuantity={handleCartRemoveQuantity}
        handleRemoveItem={handleRemoveItem}
          
        />
    </div>
  </div>
  </div>
  );
}