import { Link } from "react-router-dom";
import { logout } from "../../firebase";

export const LogOut = () => {
  return (
    <ul className="menu">
      <li className="menu-item-has-children">
        <a>Profile</a>
        <ul className="submenu">
          <li>
            <a>names names</a>
          </li>
          <li>
            <a>Balance: 13.72$</a>
          </li>
          <li>
            <Link to="/profile">MyProfile</Link>
          </li>

          <li>
            <Link to="/deposit">Deposit</Link>
          </li>

          <li>
            <Link to="/" onClick={logout}>Logout</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
