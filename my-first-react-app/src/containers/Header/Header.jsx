import "../../styles/header.css";
import Search from "./Search";
import Location from "./Location";
import IconButtons from "../../components/Header/IconButtons";
import { items } from "../../assets/arraysOfObjects";
  
function Header(props) {
  return (
    <div className="header">
      <span className="left">
        <img
          id="brand-logo"
          src="./src/assets/Header/brand-logo.png"
          alt="brand-logo"
        />
        <h1 id="brand-name">SALON-X</h1>
      </span>
      <span className="center">
        <Location />
        <Search />
      </span>
      <span className="right">  
          <IconButtons
            id="cart" 
            num={items}
            src="./src/assets/Header/cart-icon.svg"
            alt="cart-icon"
            text="Cart"
          />
          <IconButtons
          id="sign-in" 
          src="./src/assets/Header/sign-in-icon.svg"
          alt="sign-in-icon"
          text="Sign In"/>
      </span>
    </div>
  );
}

export default Header;
