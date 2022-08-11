import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row g-3 justify-content-center g-lg-0">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="images/footer/icons/01.png" alt="Phone-icon" />
                  </div>
                  <div className="lab-content">
                    <span>Phone Number : +359 88 933 7266</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="images/footer/icons/02.png" alt="email-icon" />
                  </div>
                  <div className="lab-content">
                    <span>Email : iv4o.megdanov@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img src="images/footer/icons/03.png" alt="location-icon" />
                  </div>
                  <div className="lab-content">
                    <span>Address : Veliko Tarnovo, Poltava 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle padding-top padding-bottom">
        <div className="container">
          <div className="row padding-lg-top">
            <div className="col-lg-4 col-md-6 col-12 footers">
              <div className="footer-middle-item-wrapper">
                <div className="footer-middle-item mb-lg-0">
                  <div className="fm-item-title mb-4">
                    <img src="images/logo/logo.png" alt="logo" />
                  </div>
                  <div className="fm-item-content">
                    <p className="mb-4">
                      Royale Casino is operated by Ivelin Megdanov. This site is
                      not public and never will be. It is done for experience as
                      well for exam in Softuni!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-content text-center">
                <p>&copy;2022 Royale Casino - All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
