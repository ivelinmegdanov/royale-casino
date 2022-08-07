import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LogAndReg } from '../buttons/LogAndReg';
import { LogOut } from '../buttons/LogOut';

export const Header = () => {
  const [user] = useAuthState(auth);
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
                        <Link to="/games">games</Link>
                      </li>
                      <li>
                        <Link to="/promotions">promotions</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>

                    { !user ? <LogAndReg/> : <LogOut/> }

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