import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, phoneNumber);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <motion.div className="login-section padding-top padding-bottom"  intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className=" container">
        <div className="account-wrapper">
          <h3 className="title">Register Now</h3>
          <div className="account-form text-start">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                name="username"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="PhoneNumber"
                name="PhoneNumber"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="birth-select">
              <label>Date Of Birth:</label>
              <select className="form-select ms-0">
                <option selected="">Day</option>
                <option value={1}>01</option>
                <option value={2}>02</option>
                <option value={3}>03</option>
                <option value={4}>04</option>
                <option value={5}>05</option>
                <option value={6}>06</option>
                <option value={7}>07</option>
                <option value={8}>08</option>
                <option value={9}>09</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={25}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
              </select>
              <select className="form-select">
                <option selected="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select className="form-select">
                <option selected="">Year</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2018</option>
                <option value={2017}>2017</option>
                <option value={2016}>2016</option>
                <option value={2015}>2015</option>
                <option value={2014}>2014</option>
                <option value={2013}>2013</option>
                <option value={2012}>2012</option>
                <option value={2011}>2011</option>
                <option value={2010}>2010</option>
                <option value={2009}>2009</option>
                <option value={2008}>2008</option>
                <option value={2007}>2007</option>
                <option value={2006}>2006</option>
                <option value={2005}>2005</option>
                <option value={2004}>2004</option>
                <option value={2003}>2003</option>
                <option value={2002}>2002</option>
                <option value={2001}>2001</option>
                <option value={2000}>2000</option>
                <option value={1999}>1999</option>
                <option value={1998}>1998</option>
                <option value={1997}>1997</option>
                <option value={1996}>1996</option>
                <option value={1995}>1995</option>
                <option value={1994}>1994</option>
                <option value={1993}>1993</option>
                <option value={1992}>1992</option>
                <option value={1991}>1991</option>
                <option value={1990}>1990</option>
                <option value={1989}>1989</option>
                <option value={1988}>1988</option>
                <option value={1987}>1987</option>
                <option value={1986}>1986</option>
                <option value={1985}>1985</option>
                <option value={1984}>1984</option>
                <option value={1983}>1983</option>
                <option value={1982}>1982</option>
                <option value={1981}>1981</option>
                <option value={1980}>1980</option>
                <option value={1979}>1979</option>
                <option value={1978}>1978</option>
                <option value={1977}>1977</option>
                <option value={1976}>1976</option>
                <option value={1975}>1975</option>
                <option value={1974}>1974</option>
                <option value={1973}>1973</option>
                <option value={1972}>1972</option>
                <option value={1971}>1971</option>
              </select>
            </div>
            <div className="form-group">
              <button onClick={register} className="d-block default-button">
                <span>Register Now</span>
              </button>
            </div>
          </div>
          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Already have an account? <Link to="/Login">Login</Link>
            </span>
            <span calssName="or">
              <span>or</span>
            </span>
            <h5 calssName="subtitle">Register With Google</h5>
            <ul calssName="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
              <li>
                <button onClick={signInWithGoogle}>
                <img src="https://cdn.discordapp.com/attachments/727243562282123355/1007246927991165119/unknown.png" alt="google" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
