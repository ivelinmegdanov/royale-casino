import { Link } from "react-router-dom";
import 'swiper/css';
export const Banner = () => {
  return (
    <div className="banner__slider overflow-hidden">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="banner banner-style2 banner-styling-first">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-6 col-12">
                  <div className="banner__content">
                    <h3>welcome bonus</h3>
                    <h1>up to 500$</h1>
                    <h2>+100 free spins</h2>
                    <p>
                      Create an account. Make the minimum or larger deposit as
                      stated in the promotion. Find your bonus in the profile.
                      Contact us if you have questions.
                    </p>
                    <Link to="/promotions" className="default-button">
                      <span>
                        About Bonus <i className="icofont-play-alt-1"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner banner-style2 banner-styling-second">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-6 col-12">
                  <div className="banner__content">
                    <h3>Royale Casino</h3>
                    <h1>every day</h1>
                    <h2>up to 50 free spins</h2>
                    <p>
                      Log in to your account. Make the minimum or larger deposit
                      as stated in the promotion. Find your bonus in the
                      profile. Contact us if you have questions.
                    </p>
                    <Link to="/promotions" className="default-button">
                      <span>
                        About Bonus <i className="icofont-play-alt-1"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="banner banner-style2 banner-styling-third">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-6 col-12">
                  <div className="banner__content">
                    <h3>cashback</h3>
                    <h1>up to 500$</h1>
                    <h2>Weekly cashback 10%</h2>
                    <p>
                      Log in to your account. Make the minimum or larger deposit
                      as stated in the promotion. Find your bonus in the
                      profile. Contact us if you have questions.
                    </p>
                    <Link to="/promotions" className="default-button">
                      <span>
                        About Bonus <i className="icofont-play-alt-1"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
