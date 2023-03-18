import { images } from "../constants";
export { default as Header } from "./Header/Header";
export { default as Landing } from "./Landing/Landing";
export { default as CoursesCo } from "./Courses/Courses";
export { default as Campus } from "./Campus/Campus";
export { default as Facilities } from "./Facilities/Facilities";
export { default as Testimonials } from "./Testimonials/Testimonials";
export { default as Enroll } from "./Enroll/Enroll";
export { default as Footer } from "./Footer/Footer";
export { default as PagesBackground } from "./PagesBackground/PagesBackground";
export { default as AboutContent } from "./AboutContent/AboutContent";
export { default as BlogContent } from "./BlogContent/BlogContent";
export { default as ContactContent } from "./ContactContent/ContactContent";

export const coursesContent = [
  {
    title: "Intermediate",
  },
  {
    title: "Degree",
  },
  {
    title: "Post Graduation",
  },
  {
    title: "Degree",
  },
];

export const campusContent = [
  {
    title: "London",
    imgSrc: images?.london,
  },
  {
    title: "New York",
    imgSrc: images?.newyork,
  },
  {
    title: "Washington",
    imgSrc: images?.washington,
  },
  {
    title: "New York",
    imgSrc: images?.newyork,
  },
];

export const facilitiesContent = [
  {
    title: "World Class Library",
    imgSrc: images?.library,
  },
  {
    title: "Largest Play Ground",
    imgSrc: images?.cafeteria,
  },
  {
    title: "Tasty And Healthy",
    imgSrc: images?.basketball,
  },
  {
    title: "World Class Library",
    imgSrc: images?.library,
  },
];
