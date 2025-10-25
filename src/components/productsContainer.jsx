import ProductsCard from "./productsCard";

export default function ProductsContainer({
data,
productQuantity,
handleAddToQuantity,
handleRemoveQuantity, 
handleAddToCart,
}) {
return (
    <div className="ProductsContainer">
    {data.map((product) => (
        <ProductsCard
        key={product.id}
        {...product}
        productQuantity={productQuantity.find((p) => p.id === product.id)}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
        handleAddToCart={handleAddToCart}
        />
    ))}
    </div>
);
}
