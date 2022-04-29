import React from "react";
import { Link } from "react-router-dom";

import styles from "./CourseCard.module.scss";

const CourseCard = (props) => {
  return (
    <div className={styles.course}>
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Link to={"/course/" + props.id}>See more</Link>
      </div>
    </div>
  );
};

export default CourseCard;
