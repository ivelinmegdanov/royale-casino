import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiOBAzdgrBwlDBifA2e0HmJKnU2WjNrVM",
  authDomain: "royale-casino.firebaseapp.com",
  databaseURL:
    "https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "royale-casino",
  storageBucket: "royale-casino.appspot.com",
  messagingSenderId: "456857569837",
  appId: "1:456857569837:web:33116a8f8ac6b1863186a4",
  measurementId: "G-TDKKM69DE8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

auth.onAuthStateChanged(user => {
  if (user){
    console.log(user)
  }
  else{
    console.log(user)
  }
})

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      const data = {
        balance: 0.00,
        isAdmin: false,
        firstTimeDeposit: true
      }
      await fetch(
        `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email
      });
    }
  } catch (err) {
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password, phoneNumber) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const photoURL = "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png";
    const data = {
      phoneNumber: phoneNumber,
      balance: 0.00,
      isAdmin: false,
      firstTimeDeposit: true,
      email: email,
      username: name,
      photoURL: photoURL
    }
    await fetch(
      `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    await updateProfile(user, { displayName: name, photoURL: photoURL, phoneNumber: phoneNumber})
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
  }
};

const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};
