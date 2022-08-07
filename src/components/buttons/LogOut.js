import { Link } from "react-router-dom";
import { logout } from "../../firebase";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useFetch } from "../customhooks/useFetch";

export const LogOut = () => {
  const [user] = useAuthState(auth);
  const {
    data: users,
    isPending,
    error,
  } = useFetch(
    `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`
  );
  return (
    <ul className="menu">
      <li className="menu-item-has-children">
        <a>Profile</a>
        <ul className="submenu">
          <li>
            <a>{user.displayName}</a>
          </li>
          <li>
            {error && <a>{error}</a>}
            {isPending && <a>Loading...</a>}
            {users &&  <a>Balance: {users.balance}$</a>}
          </li>
          <li>
            <Link to={`/profile/${user.uid}`}>My Profile</Link>
          </li>

          <li>
            <Link to="/deposit">Deposit</Link>
          </li>

          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
