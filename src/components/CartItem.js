import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    let opts = { format: "%s%v", symbol: "€" };
    return (
        <li className='CartItem__item'>
            <img src={item.image} alt='' />
            <div className="CartItem__details">
                <div className="CartItem__info">
                    <div className="CartItem__title">
                        {item.name}
                    </div>
                    <div className="CartItem__price">
                        Price {formatCurrency(`${item.price}`, opts)}
                    </div>
                </div>
            </div>
            <div className='CartItem__button'>
                <button onClick={() => removeItem(item._id)}>
                    Remove
                </button>
            </div>
        </li>
    );
};
export default CartItem;