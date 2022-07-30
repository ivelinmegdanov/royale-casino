export const Welcome = () => {
  return (
    <section className="about-section style2 pb-0">
      <div className="container">
        <div className="section-wrapper padding-top padding-bottom">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image position-relative">
                <img src="images/about/01.jpg" alt="about" className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about-wrapper">
                <div className="section-header">
                  <h2>WELCOME TO THE CASINO</h2>
                </div>
                <div className="about-content">
                  <p>
                  For most people, a night at the casino is an entertainment they enjoy as much as a night at the movies or a sports game. Gambling is an expense and playing wisely means not spending more money or time than you can reasonably afford. Risks are part of the fun and most of us can control them and usually know when to stop. However, there is a danger of developing a gambling addiction!
                  </p>
                  <ul className="about-list">
                    <li className="about-item d-flex flex-wrap">
                      <div className="about-item-thumb">
                        <span>1</span>
                      </div>
                      <div className="about-item-content">
                        <h5>REGISTER TODAY</h5>
                        <p>
                          Register free today!
                        </p>
                      </div>
                    </li>
                    <li className="about-item d-flex flex-wrap">
                      <div className="about-item-thumb">
                        <span>2</span>
                      </div>
                      <div className="about-item-content">
                        <h5>DEPOSIT CASH</h5>
                        <p>
                          Make your first deposit and get bonuses.
                        </p>
                      </div>
                    </li>
                    <li className="about-item d-flex flex-wrap">
                      <div className="about-item-thumb">
                        <span>3</span>
                      </div>
                      <div className="about-item-content">
                        <h5>START GAMBLING</h5>
                        <p>
                          Start playing your favorite gambling games.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
