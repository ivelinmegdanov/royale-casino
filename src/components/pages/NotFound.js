import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <motion.section className="fore-zero padding-top padding-bottom" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="container">
        <div className="section-wrapper">
          <div className="zero-item">
            <div className="zero-thumb">
              <img src="/images/404.png" alt={404} />
            </div>
            <div className="zero-content">
              <h2>Oops! This Page Not Found</h2>
              <p>
                We are Really Sorry But the Page you Requested is Missing{" "}
                <i className="icofont-worried" />
              </p>
              <Link to="/" className="default-button reverse-effect">
                <span>
                  Go Back to Home <i className="icofont-double-right" />
                </span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
