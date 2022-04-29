import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../layout/Container";

import styles from "./InsideCourse.module.scss";

const InsideCourse = (props) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  let { id } = useParams();
  const course = props.courses.filter((course) => course.id === id)[0];

  const enrolledHandler = () => {
    setIsEnrolled(true);
  };

  return (
    <Container>
      <div className={styles["inside-course"]}>
        <div className={styles.left}>
          <img src={course.image} alt={course.name} />
        </div>
        <div className={styles.right}>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
          {!isEnrolled && <button onClick={enrolledHandler}>Enroll</button>}
        </div>
      </div>

      {isEnrolled && <div>Content of the course</div>}
    </Container>
  );
};

export default InsideCourse;
