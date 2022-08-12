import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useFetch } from "../customhooks/useFetch";
import React, { useState } from "react";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";

export const Edit = () => {
  const [user, loading] = useAuthState(auth);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  const editUser = async () => {
    try {
      let auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          updateEmail(auth.currentUser, email)
            .then(() => {
              alert("User Updated");
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    } catch (err) {
      console.log(err);
    }

    let data;

    await fetch(
      `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`
    )
      .then((response) => response.json())
      .then((x) => (data = x));

    Object.values(data)[0].username = name;
    Object.values(data)[0].email = email;
    Object.values(data)[0].phoneNumber = phone;
    Object.values(data)[0].photoURL = photo;

    await fetch(
      `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
  };

  let url;
  if (user) {
    url = `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`;
  }

  const { data: currUser } = useFetch(url);

  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (!user) navigate("/login");
    if (currUser) {
      if (userId !== user.uid || !currUser.isAdmin) navigate("/");
    }
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
          <h3 className="title">Edit Profile</h3>
          {error && <h1>Error</h1>}
          {isPending || loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="account-form text-start">
              <div className="form-group">
                <label>Username:</label>
                <input
                  className="edit_profile"
                  type="text"
                  name="Username"
                  placeholder={userProps.username}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  className="edit_profile"
                  type="text"
                  name="email"
                  placeholder={user.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  className="edit_profile"
                  type="number"
                  name="number"
                  placeholder={userProps.phoneNumber}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>PhotoUrl:</label>
                <input
                  className="edit_profile"
                  type="text"
                  name="photo"
                  placeholder={user.photoURL}
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button onClick={editUser} className="d-block default-button">
                  <span>Update Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
