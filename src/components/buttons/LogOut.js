import { logout } from "../../firebase";
export const LogOut = () => {
  return (
    <button className="icofont-users login" onClick={logout}>
      {" "}
      <span>Logout</span>
    </button>
  );
};
