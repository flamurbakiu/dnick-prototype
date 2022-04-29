import { Link } from "react-router-dom";
import styles from "./MobileHeader.module.scss";

function MobileHeader(props) {
  return (
    <ul className={styles["mobile-header"]}>
      <li onClick={props.onClose}>
        <Link to="/">Home</Link>
      </li>
      {/* <li onClick={props.onClose}>
        <Link to="/about">About</Link>
      </li> */}
      <li onClick={props.onClose}>
        <Link to="/courses">Courses</Link>
      </li>
      <li onClick={props.onClose}>
        <Link to="/contact">Contact</Link>
      </li>
      <li onClick={props.onClose}>
        <Link to="/auth">Login</Link>
      </li>
    </ul>
  );
}

export default MobileHeader;
