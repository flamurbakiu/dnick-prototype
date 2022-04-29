import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Copyright ©{new Date().getFullYear()} MathPurpose. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
