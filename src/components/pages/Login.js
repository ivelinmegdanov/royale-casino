import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login-section padding-top padding-bottom">
      <div className=" container">
        <div className="account-wrapper">
          <h3 className="title">Login</h3>
          <form className="account-form text-start">
            <div className="form-group">
              <label>Email:</label>
              <input type="text" name="email" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="d-block default-button">
                <span>Submit Now</span>
              </button>
            </div>
          </form>
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Don't Have any Account? <Link to="/register"> Sign Up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
