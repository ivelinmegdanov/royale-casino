import { Link } from 'react-router-dom';
import { auth, db, logout } from "../../firebase";

export const Header = () => {
    return (
        <header className="header-section style2">
        <div className="container">
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
            <div className="brand-logo d-none d-lg-inline-block py-2">
              <div className="logo">
                <Link to="/">
                  <img src="images/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <Link to="/">
                      <img src="images/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="menu-area">
                    <ul className="menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <a href="#0">Features</a>
                        <ul className="submenu">
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="jaqpot.html">Casino Jackpot</a>
                          </li>
                          <li>
                            <a href="#0">games</a>
                            <ul className="submenu">
                              <li>
                                <a href="game-list.html">game list 1</a>
                              </li>
                              <li>
                                <a href="game-list2.html">game list 2</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="partners.html">partners</a>
                          </li>
                          <li>
                            <a href="pricing-plan.html">Pricing Plan</a>
                          </li>

                          <li>
                            <a href="#0">accounts</a>
                            <ul className="submenu">
                              <li>
                                <a href="login.html">login</a>
                              </li>
                              <li>
                                <a href="signup.html">signup</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#0">Shop</a>
                            <ul className="submenu">
                              <li>
                                <a href="shop.html">shop</a>
                              </li>
                              <li>
                                <a href="shop-single.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart-page.html">Cart Page</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/games">games</Link>
                      </li>
                      <li>
                        <a href="tournament.html">promotions</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <Link to="/login" className="login">
                      <i className="icofont-user"></i> <span>Log In</span>{" "}
                    </Link>
                    <Link to="/register" className="signup">
                      <i className="icofont-users"></i> <span>Sign Up</span>
                    </Link>
                      <button className="icofont-users" onClick={logout}> <span>Logout</span></button>

                    <div className="header-bar d-lg-none">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="ellepsis-bar d-lg-none">
                      <i className="icofont-info-square"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};