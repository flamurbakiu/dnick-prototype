import { Route, Switch } from "react-router";

import Layout from "./components/layout/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import InsideCourse from "./components/Courses/InsideCourse";
import AuthPage from "./pages/AuthPage";

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
  {
    id: "c4",
    name: "Algebra 1",
    description:
      "Learn the basics of Algebra 1 with this free course from top teacher...",
    image: "https://miro.medium.com/max/800/1*AF7G8g5kaYRgNOvAKVIQng.jpeg",
  },
  {
    id: "c5",
    name: "Algebra 2",
    description:
      "Learn the basics of Algebra 2 with this free course from top teacher...",
    image: "https://miro.medium.com/max/800/1*AF7G8g5kaYRgNOvAKVIQng.jpeg",
  },
  {
    id: "c6",
    name: "Calculus 1",
    description:
      "Learn the basics of Calculus 1 with this free course from top teacher...",
    image: "https://miro.medium.com/max/990/1*RJ8DZD1b-ipwDENqdK3WRA.png",
  },
  {
    id: "c7",
    name: "Algebra 2",
    description:
      "Learn the basics of Algebra 2 with this free course from top teacher...",
    image: "https://miro.medium.com/max/800/1*AF7G8g5kaYRgNOvAKVIQng.jpeg",
  },
  {
    id: "c8",
    name: "Calculus 1",
    description:
      "Learn the basics of Calculus 1 with this free course from top teacher...",
    image: "https://miro.medium.com/max/990/1*RJ8DZD1b-ipwDENqdK3WRA.png",
  },
];

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Route path="/courses" exact>
          <CoursesPage courses={courses} />
        </Route>

        <Route path="/course/:id" exact>
          <InsideCourse courses={courses} />
        </Route>

        <Route path="/contact" exact>
          <ContactPage />
        </Route>

        <Route path="/auth" exact>
          <AuthPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
