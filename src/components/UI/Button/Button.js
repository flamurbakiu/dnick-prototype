import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = (props) => {
  return <Link className={styles.btn}>{props.children}</Link>;
};

export default Button;
