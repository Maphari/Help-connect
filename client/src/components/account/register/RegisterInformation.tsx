import React from "react";

import { Link } from "react-router-dom";

import LearningStudent from "../../../assets/images/learner.jpg";
import LecturerTeaching from "../../../assets/images/teaching.jpg";
import WorkersImage from "../../../assets/images/workers.png";
import StudentLearningImage from "../../../assets/images/learning.jpg";
import LecturerTeachingImage from "../../../assets/images/teaching-two.jpg";

export const RegisterInformation: React.FC = () => {
  return (
    <>
      <section className="register-info-container">
        <header className="register-info-container__header">
          <h2>Message to users</h2>
        </header>
        <section className="register-info-container__body">
          <div className="register-info-container__body__information w-[40rem]">
            <h3 className="register-info-container__body__header">
              Dear valued users
            </h3>
            <div className="register-info-container__body__information-info opacity-70">
              <p className="mb-2">
                We hope this message finds you well. We're thrilled to share
                some exciting news about the future of our platform!
              </p>
              <p>
                Currently, our website is dedicated to connecting students with
                dedicated educators who are passionate about helping them
                achieve their academic goals. We've received incredible feedback
                from our community, and we're truly grateful for your trust in
                us.
              </p>
            </div>
          </div>
          <div className="register-info-container__body__information-image relative">
            <img
              src={LearningStudent}
              alt="customer values"
              className="border-8"
            />
            <img
              src={LecturerTeaching}
              alt="lecturer teaching"
              className="absolute -bottom-7 border-8 left-[17rem]"
            />
          </div>
        </section>

        <section className="register-info-container__body section-modified">
          <div className="register-info-container__body__information w-[40rem] mt-4">
            <h3 className="register-info-container__body__header">
              What's Coming Next
            </h3>
            <div className="register-info-container__body__information-info">
              <p className="mb-2 opacity-70">
                In the near future, we're expanding our services to cater to a
                wider range of needs. While we're currently focused on academic
                support, soon you'll be able to find and offer a variety of
                services beyond teaching. Whether it's professional mentorship,
                creative skills, or specialized expertise, our platform will
                become your go-to destination for all your service needs.
              </p>
            </div>
          </div>
          <div className="register-info-container__body__information-image relative mt-4">
            <img
              src={WorkersImage}
              alt="customer values"
              className="border-8"
            />
          </div>
        </section>

        <section className="register-info-container__body">
          <div className="register-info-container__body__information w-[40rem]">
            <h3 className="register-info-container__body__header">
              Why Should You Try Our Services?
            </h3>
            <h5 className="mb-2 font-medium text-blue-950">For Students: </h5>
            <div className="register-info-container__body__information-info opacity-70">
              <ul className="ml-10">
                <li className="list-disc">
                  Personalized Learning: Our platform ensures you get tailored
                  support that suits your learning style and objectives.
                </li>
                <li className="list-disc">
                  Qualified Educators: We carefully select educators based on
                  their expertise and commitment to your success.
                </li>
                <li className="list-disc">
                  Convenience: Access top-notch instruction from the comfort of
                  your own space, and choose flexible scheduling options.
                </li>
              </ul>
            </div>
            <h5 className="mb-2 font-medium mt-8 text-blue-950">
              For Teachers:
            </h5>
            <div className="register-info-container__body__information-info opacity-70">
              <ul className="ml-10">
                <li className="list-disc">
                  Empowered Teaching: Share your knowledge and make a meaningful
                  impact on students' lives.
                </li>
                <li className="list-disc">
                  Flexible Opportunities: Set your own schedule and rates,
                  allowing you to teach in a way that suits your lifestyle.
                </li>
                <li className="list-disc">
                  Community and Growth: Join a community of passionate educators
                  and access resources for professional development.
                </li>
              </ul>
            </div>
          </div>
          <div className="register-info-container__body__information-image relative">
            <img
              src={StudentLearningImage}
              alt="customer values"
              className="border-8 mb-7"
            />
            <img
              src={LecturerTeachingImage}
              alt="customer values"
              className="border-8"
            />
          </div>
        </section>

        <p className="mt-7 ml-5">
          Ready to unlock a world of learning opportunities? Whether you are
          here to teach or learn, join us today!
        </p>
        <div className="ml-5 mt-7">
          <Link
            to="/register-account"
            className="inline-block p-[0.5rem] text-center bg-blue-950 text-white font-medium"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
};
