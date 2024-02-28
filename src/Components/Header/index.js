import { FaRegUserCircle } from "react-icons/fa";

import "./index.css";

const Header = () => (
  <div>
    <nav className="nav-container">
      <div className="logo-cont">
        <img
          src="https://clipart-library.com/img1/689289.gif"
          alt="logo"
          className="logo"
        />
        <h1>LOGO</h1>
      </div>

      <ul className="nav-items">
        <li>Bid</li>
        <li>POD</li>
        <li>Vender</li>
        <li>User</li>

        <li>
          <FaRegUserCircle /> Freight EG
        </li>

        <select className="select-options">
          <option></option>
        </select>
      </ul>
    </nav>
  </div>
);

export default Header;
