import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useFetch } from "../customhooks/useFetch";
import { Link } from "react-router-dom";

export const Adminpanel = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  let url;
  if (user) {
    url = `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`;
  }

  const { data: users } = useFetch(url);

  let userProps;
  if (users) {
    userProps = Object.values(users)[0];
  }

  if (userProps) {
    if (userProps.isAdmin !== true) {
      navigate("/");
    }
  }

  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading]);

  return (
    <motion.section
      className="pageheader-section"
      style={{
        backgroundImage:
          "url(https://demos.codexcoder.com/themeforest/html/casina/casina/assets/images/pageheader/bg.jpg)",
      }}
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="section-wrapper text-center text-uppercase">
          <h2 className="pageheader-title">Admin Panel</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/adminpanel/userlist">Users</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </motion.section>
  );
};
