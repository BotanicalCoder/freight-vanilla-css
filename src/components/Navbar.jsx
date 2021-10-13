import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <p className="nav_logo">sendFreight</p>

      <p className="nav_input_container">
        <input className="nav_input" placeholder="Search" />
        <span className="nav_input_icon">
          <AiOutlineSearch className="nav_input_icon" />
        </span>
      </p>

      <div>
        <button className="nav_button1">Request Quote</button>
        <button className="nav_button2">Book Shipment</button>
      </div>
    </nav>
  );
};

export default Navbar;
