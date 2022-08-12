import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useFetch } from "../customhooks/useFetch";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const { userId } = useParams();
  const navigate = useNavigate();
  const deleteUser = () => {
    navigate("/");
    try {
      fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`,
        {
          method: "DELETE",
        }
      ).then(data => console.log("DELETED WITH FETCH"));
    } catch (err) {
      console.log(err);
    }
    user
      .delete()
      .then(function () {
        console.log("Deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (!user) navigate("/login");
    if (userId !== user.uid) navigate("/");
  }, [user, loading]);
  
  const {
    data: users,
    isPending,
    error,
  } = useFetch(
    `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`
  );

  let userProps;
  if (users) {
    userProps = Object.values(users)[0];
  }

  return (
    <motion.div
      className="login-section padding-top padding-bottom"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" container">
        <div className="account-wrapper">
          <h3 className="title">User Profile</h3>
          {error && <h1>Error</h1>}
          {isPending || loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="account-form text-start">
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  name="Username"
                  value={userProps.username}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="text" name="email" value={user.email} disabled />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="number"
                  value={userProps.phoneNumber}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Balance:</label>
                <input
                  type="text"
                  name="balance"
                  value={userProps.balance + " $"}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  value={!userProps.isAdmin ? "User" : "Admin"}
                  disabled
                />
              </div>
              <div className="form-group">
                <label>PhotoUrl:</label>
                <input
                  type="text"
                  name="photo"
                  value={user.photoURL}
                  disabled
                />
              </div>
              <div className="form-group">
                <button className="d-block default-button">
                  <Link to={`/edit/${user.uid}`} className="span">
                    Edit Information
                  </Link>
                </button>
                <button onClick={deleteUser} className="d-block default-button">
                  <span>Delete Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
