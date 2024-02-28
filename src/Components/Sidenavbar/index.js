import { BsGridFill } from "react-icons/bs";

import "./index.css";

const Sidenavbar = () => (
  <nav className="nav-sidebar-container">
    <ul className="nav-list-items">
      <li>
        <BsGridFill />
        <p>Bid</p>
      </li>

      <li>
        <BsGridFill />
        <p> POD</p>
      </li>

      <li>
        <BsGridFill />
        <p> Vender</p>
      </li>

      <li>
        <BsGridFill />
        <p>User</p>
      </li>
    </ul>

    <ul className="nav-list-items">
      <li>
        <BsGridFill />
        <p>Settings</p>
      </li>

      <li>
        <BsGridFill />
        <p> Profile</p>
      </li>

      <li>
        <BsGridFill />
        <p>Contact Us</p>
      </li>

      <li>
        <BsGridFill />
        <p>Logout</p>
      </li>
    </ul>
  </nav>
);

export default Sidenavbar;
