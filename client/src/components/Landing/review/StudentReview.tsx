import React from "react";
import { Header, Comment } from "./StudentReview.imports";

export const StudentReview: React.FC = () => {
  return (
    <>
      <section className="student-review-container bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg pb-20">
        <Header
          topHeader="STUDENT REVIEW"
          bigHeader="What student say about help connect"
          paragraph="student review on help connect and its amazing that students are really enjoying our platform"
        />

        <section className="flex items-center justify-center flex-wrap gap-3 px-[1rem]">
         <Comment />
         <Comment />
         <Comment />
         <Comment />
         <Comment />
         <Comment />
        </section>
      </section>
    </>
  );
};
