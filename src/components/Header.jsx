import "./components_style/Header.css";
import LOGO from "../assets/images/Logo.svg";
import Search from "../assets/images/Search.svg";
import Cart from "../assets/images/cart.svg";

export default function Header() {
  return (
    <div className="header-bg">
      <div className="wrapper header">
        <a href="#">
          <img src={LOGO} alt="LOGO" />
        </a>
        <nav className="header-links">
          <a href="">HOME</a>
          <a href="">PRODUCTS</a>
          <a href="">ABOUT US</a>
          <a href="">CONTACT US</a>
        </nav>
        <div className="header-right">
          <div className="header-search">
            SEARCH
            <img src={Search} alt="Search icon" />
          </div>
          <div className="shopcart">
            <a href="">
              <img src={Cart} alt="CART" />
              <span className="cart-number">3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}