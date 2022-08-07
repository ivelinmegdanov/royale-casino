import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from "framer-motion"
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <motion.div className="login-section padding-top padding-bottom"  intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className=" container">
        <div className="account-wrapper">
          <h3 className="title">Login</h3>
          <div className="account-form text-start">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <Link to="/reset">Forgot Password?</Link>
              </div>
            </div>
            <div className="form-group">
              <button
                className="d-block default-button"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                <span>Login Now</span>
              </button>
            </div>
          </div>
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Don't Have an Account? <Link to="/register"> Register now. </Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>
            <h5 className="subtitle">Login with Google</h5>
            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
              <button
                className="login__btn login__google"
                onClick={signInWithGoogle}
              >
                <img src="assets/images/match/social-1.png" alt="vimeo" />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
