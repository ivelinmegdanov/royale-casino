import { Link } from "react-router-dom";

export const LogAndReg = () => {
  return (
    <div>
      <Link to="/login" className="login">
        <i className="icofont-user"></i> <span>Log In</span>{" "}
      </Link>
      <Link to="/register" className="signup">
        <i className="icofont-users"></i> <span>Sign Up</span>
      </Link>
    </div>
  );
};
