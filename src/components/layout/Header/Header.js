import { Fragment, useState } from "react";

import { Container } from "../Container/index";
import MobileHeader from "./MobileHeader";

import styles from "./Header.module.scss";
import "./hamburger-menu.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = (event) => {
    setIsOpen(event.target.checked);
  };

  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <header>
        <Container>
          <div className={styles.header}>
            <Link to="/">
              {/* <img
                src={logoMobile}
                className={styles.imageMobile}
                alt="CodePurpose Logo"
              />
              <img src={logo} className={styles.image} alt="CodePurpose Logo" /> */}
              <h1 className={styles.title}>MathPurpose</h1>
            </Link>

            <nav className={styles.nav}>
              <div className={styles.hamburger}>
                <label htmlFor="check">
                  <input
                    type="checkbox"
                    id="check"
                    checked={isOpen}
                    onChange={toggleMenuHandler}
                  />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                  <Link to="/about">About</Link>
                </li> */}
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/auth">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>

      {isOpen && <MobileHeader onClose={closeMenuHandler} />}
    </Fragment>
  );
};

export default Header;
