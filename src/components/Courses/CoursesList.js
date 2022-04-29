import React from "react";
import CourseCard from "./CourseCard";

import styles from "./CoursesList.module.scss";

const CoursesList = ({ courses }) => {
  return (
    <div className={styles.courses}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          image={course.image}
          name={course.name}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CoursesList;
