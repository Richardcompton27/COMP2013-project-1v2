export default function NavBar({ username, cartCount }) {


  return (
    <div className="NavBar">
      <p className="NavUser">Hello, {username}</p>
      <h2 className="NavTitle">Groceries App </h2>
      <div className="cart-icon">
        {cartCount > 0 ? <img src="src\assets\cart-full.png"></img> : <img src="src\assets\cart-empty.png"></img>}
      </div>
    </div>
  );
}