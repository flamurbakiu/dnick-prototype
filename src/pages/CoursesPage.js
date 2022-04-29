import React from "react";
import CoursesList from "../components/Courses/CoursesList";
import { Container } from "../components/layout/Container";

const CoursesPage = (props) => {
  return (
    <Container>
      <CoursesList courses={props.courses} />
    </Container>
  );
};

export default CoursesPage;
