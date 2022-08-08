import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useFetch } from "../customhooks/useFetch";

export const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data : users, isPending, error } = useFetch(`https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`);
  
  let userProps;
  if(users){
    userProps = Object.values(users)[0]
  }

  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (userId !== user.uid) navigate("/");
    if (!user) navigate("/login");
  }, [user, loading]);

  return (
    <motion.div className="login-section padding-top padding-bottom" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className=" container">
        <div className="account-wrapper">
          <h3 className="title">User Profile</h3>
          {isPending || loading ? <h1>Loading...</h1> :
          <div className="account-form text-start">
            <div className="form-group">
              <label>Username:</label>
              <input type="text" name="Username" value={user.displayName} disabled />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="text" name="email" value={user.email} disabled/>
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" name="number" value={userProps.phoneNumber} disabled/>
            </div>
            <div className="form-group">
              <label>Balance:</label>
              <input type="text" name="balance" value={userProps.balance.toFixed(2) + " $"} disabled/>
            </div>
            <div className="form-group">
              <label>Role:</label>
              <input type="text" name="role" value={!userProps.isAdmin ? "User" : "Admin"} disabled/>
            </div>
            <div className="form-group">
              <label>PhotoUrl:</label>
              <input type="text" name="photo" value={user.photoURL} disabled/>
            </div>
            <div className="form-group">
              <button className="d-block default-button">
                <span>Edit Information</span>
              </button>
            </div>
          </div>
          }
        </div>
      </div>
    </motion.div>
  );
};
