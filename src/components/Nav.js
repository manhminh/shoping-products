import { useContext } from "react";
import "./Nav.css";
import CartContext from "../context/cart/CartContext";

const Nav = () => {
    const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <nav>
            <div className="nav__left">Store</div>
            <div className="nav__middle">
                <div className="input__wrapper">
                    <input type="text" />
                    <i className="fas fa-search" />
                </div>
            </div>
            <div className="nav__right">
                <div className="cart__icon">
                    <i
                        className='fa fa-shopping-cart'
                        aria-hidden='true'
                        onClick={() => showHideCart()}
                    >
                    </i>

                    {cartItems.length > 0 &&
                        <span className="item__count">
                            {cartItems.length}
                        </span>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav;