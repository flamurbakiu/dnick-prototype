import { Container } from "../layout/Container/index";
import Button from "../UI/Button/Button";

import styles from "./Home.module.scss";
import mathBanner from "../../assets/math-banner.svg";
import CourseCard from "../Courses/CourseCard";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "c1",
    name: "Algebra 1",
    description:
      "Learn the basics of Algebra 1 with this free course from top teacher...",
    image: "https://miro.medium.com/max/800/1*AF7G8g5kaYRgNOvAKVIQng.jpeg",
  },
  {
    id: "c2",
    name: "Algebra 2",
    description:
      "Learn the basics of Algebra 2 with this free course from top teacher...",
    image: "https://miro.medium.com/max/800/1*AF7G8g5kaYRgNOvAKVIQng.jpeg",
  },
  {
    id: "c3",
    name: "Calculus 1",
    description:
      "Learn the basics of Calculus 1 with this free course from top teacher...",
    image: "https://miro.medium.com/max/990/1*RJ8DZD1b-ipwDENqdK3WRA.png",
  },
];

const Home = () => {
  return (
    <div className={styles["home-background"]}>
      <Container>
        <div className={styles.home}>
          <div className={styles.content}>
            <h6>MathPurpose Academy</h6>
            <h2>Education for all</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley to make a type
              specimen book.
            </p>
            <div className={styles.button}>
              <Link to="/contact">
                <Button>Contact us!</Button>
              </Link>
            </div>
          </div>

          <div className={styles.image}>
            <img src={mathBanner} alt="Math" />
          </div>
        </div>

        <div className={styles["courses-container"]}>
          <h2>Latest Courses</h2>

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
        </div>
      </Container>
    </div>
  );
};

export default Home;
