import {
  React,
  Hero,
  Course,
  Features,
  Learn,
  Pricing,
  StudentReview,
  Footer,
} from "./Landing.imports";

export const Landing: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Course />
      <Learn />
      <Pricing />
      <StudentReview />
      <Footer />
    </>
  );
};
