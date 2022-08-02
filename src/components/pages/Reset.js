import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";
import { motion } from "framer-motion";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) return;
      if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
      <motion.div className="reset" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className="reset__container">
          <input
            type="text"
            className="reset__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button
            className="reset__btn"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset email
          </button>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </div>
      </motion.div>
    );
  }
  export default Reset;