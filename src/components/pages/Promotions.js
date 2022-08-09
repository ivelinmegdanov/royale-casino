import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Promotions = () => {
  return (
    <motion.section
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pricing-section padding-top padding-bottom"
    >
      <div className="container">
        <div className="section-header">
          <h2>Our Top Promotions</h2>
        </div>
        <div className="section-wrapper mt-4">
          <div className="pricing-plan-wrapper">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-sm-6 promotions">
                <div className="price-item">
                  <div className="price-item-inner">
                    <div className="price-top">
                      <h6>Welcome Bonus</h6>
                      <h2>100% to 500$</h2>
                      <p>First Deposit Welcome Bonus up to 500$ and 100 free spins</p>
                    </div>
                    <div className="price-bottom">
                      <ul>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>The bonus is available to all users.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Minimum deposit amount €20.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Maximum deposit amount: €500.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Wager 35 times the amount.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>FS will be automatically credited.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>The bonus is valid for 10 days.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Only for casino games.</p>
                        </li>
                      </ul>
                      <Link to="/deposit" className="default-button">
                        <span>- Get Bonus -</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 promotions">
                <div className="price-item">
                  <div className="price-item-inner">
                    <div className="price-top">
                      <h6>Welcome Bonus</h6>
                      <h2>100% to 500$</h2>
                      <p>First Deposit Welcome Bonus up to 500$ and 100 free spins</p>
                    </div>
                    <div className="price-bottom">
                      <ul>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>The bonus is available to all users.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Minimum deposit amount €20.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Maximum deposit amount: €500.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Wager 35 times the amount.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>FS will be automatically credited.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>The bonus is valid for 10 days.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Only for casino games.</p>
                        </li>
                      </ul>
                      <Link to="/deposit" className="default-button">
                        <span>- Get Bonus -</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 promotions">
                <div className="price-item">
                  <div className="price-item-inner">
                    <div className="price-top">
                      <h6>Welcome Bonus</h6>
                      <h2>100% to 500$</h2>
                      <p>First Deposit Welcome Bonus up to 500$ and 100 free spins</p>
                    </div>
                    <div className="price-bottom">
                      <ul>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>The bonus is available to all users.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Minimum deposit amount €20.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Maximum deposit amount: €500.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Wager 35 times the amount.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>FS will be automatically credited.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>The bonus is valid for 10 days.</p>
                        </li>
                        <li>
                          <i className="icofont-check-circled" />
                          <p>Only for casino games.</p>
                        </li>
                      </ul>
                      <Link to="/deposit" className="default-button">
                        <span>- Get Bonus -</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
