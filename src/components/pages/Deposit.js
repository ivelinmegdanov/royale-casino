import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

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
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const buy = () => {};

  return (
    <motion.div
      class="shop-cart padding-top padding-bottom"
      ntial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="container">
        <div className="section-wrapper">
          <div className="cart-bottom">
            <div className="cart-checkout-box">
              <form className="coupon">
                <input
                  type="text"
                  name="coupon"
                  placeholder="Coupon Code..."
                  className="cart-page-input-text"
                />
                <button type="submit" className="default-button ms-2 px-4">
                  <span>Apply</span>
                </button>
              </form>
            </div>
            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="calculate-shiping">
                    <h3>Details</h3>
                    <div className="outline-select">
                      <input
                        type="text"
                        name="address"
                        placeholder="Billing Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="outline-select shipping-select">
                      <input
                        type="text"
                        name="Country"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="outline-select shipping-select">
                      <input
                        type="text"
                        name="ZIP"
                        placeholder="ZIP"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
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
                  <th className="cat-product">Product</th>
                  <th className="cat-price">Price</th>
                  <th className="cat-quantity">Quantity</th>
                  <th className="cat-toprice">Total</th>
                  <th className="cat-edit">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-item cat-product">
                    <div className="p-thumb">
                      <a href="#">
                        <img src="assets/images/shop/01.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="p-content">
                      <a href="#">Product Text Here</a>
                    </div>
                  </td>
                  <td className="cat-price">$250</td>
                  <td className="cat-quantity">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton">-</div>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue={3}
                      />
                      <div className="inc qtybutton">+</div>
                    </div>
                  </td>
                  <td className="cat-toprice">$750</td>
                  <td className="cat-edit">
                    <a href="#">
                      <img src="assets/images/shop/del.png" alt="product" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-item cat-product">
                    <div className="p-thumb">
                      <a href="#">
                        <img src="assets/images/shop/02.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="p-content">
                      <a href="#">Product Text Here</a>
                    </div>
                  </td>
                  <td className="cat-price">$250</td>
                  <td className="cat-quantity">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton">-</div>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue={2}
                      />
                      <div className="inc qtybutton">+</div>
                    </div>
                  </td>
                  <td className="cat-toprice">$500</td>
                  <td className="cat-edit">
                    <a href="#">
                      <img src="assets/images/shop/del.png" alt="product" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-item cat-product">
                    <div className="p-thumb">
                      <a href="#">
                        <img src="assets/images/shop/03.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="p-content">
                      <a href="#">Product Text Here</a>
                    </div>
                  </td>
                  <td className="cat-price">$50</td>
                  <td className="cat-quantity">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton">-</div>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue={2}
                      />
                      <div className="inc qtybutton">+</div>
                    </div>
                  </td>
                  <td className="cat-toprice">$100</td>
                  <td className="cat-edit">
                    <a href="#">
                      <img src="assets/images/shop/del.png" alt="product" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-item cat-product">
                    <div className="p-thumb">
                      <a href="#">
                        <img src="assets/images/shop/04.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="p-content">
                      <a href="#">Product Text Here</a>
                    </div>
                  </td>
                  <td className="cat-price">$100</td>
                  <td className="cat-quantity">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton">-</div>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue={2}
                      />
                      <div className="inc qtybutton">+</div>
                    </div>
                  </td>
                  <td className="cat-toprice">$200</td>
                  <td className="cat-edit">
                    <a href="#">
                      <img src="assets/images/shop/del.png" alt="product" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-item cat-product">
                    <div className="p-thumb">
                      <a href="#">
                        <img src="assets/images/shop/05.jpg" alt="product" />
                      </a>
                    </div>
                    <div className="p-content">
                      <a href="#">Product Text Here</a>
                    </div>
                  </td>
                  <td className="cat-price">$200</td>
                  <td className="cat-quantity">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton">-</div>
                      <input
                        className="cart-plus-minus-box"
                        type="text"
                        name="qtybutton"
                        defaultValue={2}
                      />
                      <div className="inc qtybutton">+</div>
                    </div>
                  </td>
                  <td className="cat-toprice">$400</td>
                  <td className="cat-edit">
                    <a href="#">
                      <img src="assets/images/shop/del.png" alt="product" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
