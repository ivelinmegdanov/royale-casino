import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useFetch } from "../customhooks/useFetch";
import { depositNow, log } from "../../deposit";
import { DepositHistory } from "../depositHistory/DepositHistory";

export const Deposit = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // loading screen
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading]);

  const [deposit, setDeposit] = useState("");

  const buy = () => {
    if (!user.uid || !deposit || deposit < 10 || deposit > 5000) {
      alert("Enter ammout between 10$ and 5000$");
    } else {
      depositNow(deposit, user.uid);
      log(deposit, user.uid);
      navigate("/");
    }
  };

  let url;
  if (user) {
    url = `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/purchaseHistory/${user.uid}.json`;
  }
  const { data: purchaseHistory, isPending, error } = useFetch(url);

  return (
    <motion.div
      className="shop-cart padding-top padding-bottom"
      ntial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="section-wrapper">
          <div className="cart-bottom">
            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="cart-overview">
                    <h3>Deposit</h3>
                    <ul className="codex">
                      <li>
                        <span className="pull-left">Money to deposit</span>
                        <p className="pull-right">
                          {" "}
                          <input
                            type="number"
                            name="deposit"
                            placeholder="00.00"
                            pattern="^\d*(\.\d{0,2})?$"
                            step="0.01"
                            value={deposit}
                            onChange={(e) => setDeposit(e.target.value)}
                          />
                        </p>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={buy}
                    className="default-button reverse-effect"
                  >
                    <span>Buy credit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-top">
            <table>
              <thead>
                <tr>
                  <th className="cat-product">Uer</th>
                  <th className="cat-price">Ammount</th>
                  <th className="cat-quantity">Quantity</th>
                  <th className="cat-toprice">Date</th>
                  <th className="cat-edit">Bonus</th>
                </tr>
              </thead>
              <tbody>
                {error && <tr>{error}</tr>}
                {isPending && <tr>Loading...</tr>}
                {purchaseHistory && <DepositHistory history={purchaseHistory} user={user} />}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
