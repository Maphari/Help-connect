import React, { useState } from "react";

import { Navigation } from "./Hero.imports";

import Hero_Image from "../../../assets/images/hero-image.png";
// import Hero_Image2 from "../../../assets/images/hero-img.png";

import { motion } from "framer-motion";

interface IFramerTransition {
  ease: string;
  duration: number;
  type: string;
}

const transition: IFramerTransition = {
  ease: "backInOut",
  duration: 1,
  type: "spring",
};

export const Hero: React.FC = () => {
  const [email, setEmail] = useState<string>();

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  function onEmailChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }

  return (
    <>
      <section className="hero-container bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg">
        <Navigation />

        <section className="relative flex items-center justify-between flex-wrap hero-container__main">
          <img
            src={Hero_Image}
            alt="alt"
            className="absolute -left-0 top-[51%] w-[35rem] object-cover -z-20"
          />
          <section className="hero-container__inner">
            <motion.h1
              initial={{ opacity: 0, y: -23}}
              whileInView={{ opacity: 1, y: 0}}
              transition={transition}
              className="main-header"
            >
              Help connect Your Gateway to Education and Essential Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -23 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={transition}
            >
              Empowering individuals and businesses to bridge the gap between
              education, IT excellence, and cleanliness, helping connect
              communities, advance careers, and maintain spotless spaces.
            </motion.p>

            <form className="form mb-5 " onSubmit={(e) => onSubmitHandler(e)}>
              <motion.h3
                initial={{ opacity: 0, y: -23 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transition}
              >
                Subscribe to our news letter
              </motion.h3>
              <motion.div
                className="flex items-center justify-center w-[70%] mx-auto border border-[#042767] border-opacity-40 rounded-lg"
                initial={{ opacity: 0, y: -23 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={transition}
              >
                <input
                  type="email"
                  placeholder="Enter your email to subscribe"
                  onChange={(e) => onEmailChangeHandler(e)}
                  value={email}
                  className="flex-1 bg-slate-200 rounded-l-lg outline-none py-2 px-4"
                />
                <motion.button
                  type="submit"
                  className="p-2 bg-[#042767] border border-[#042767] rounded-r-lg text-white"
                  initial={{ opacity: 0, y: -23 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={transition}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </form>
          </section>
        </section>
      </section>
      <div className="h-40 w-40 rounded-full bg-purple-900 absolute  left-28 top-28 -z-50"></div>
      <div className="h-[15rem] w-[15rem] rounded-full bg-purple-900 absolute  right-0 top-0 -z-50"></div>
    </>
  );
};
