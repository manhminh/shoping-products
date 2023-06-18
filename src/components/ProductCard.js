import "./ProductCard.css";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import { useContext } from "react";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    let opts = { format: "%s%v", symbol: "€" };
    return (
        <div className="productCard__wrapper">
            <div>
                <img className="productCard__img" src={product.image} alt={product.name} />
            </div>
            <h4>{product.name}</h4>
            <div className="productCard__price">
                <h5>{formatCurrency(`${product.price}`, opts)}</h5>
            </div>
            <div className="productCard__Rateting">
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                />
            </div>
            <button
                className="productCard__button"
                onClick={() => addToCart(product)}
            >Add to basket</button>
        </div>
    )
}
export default ProductCard;