import React from "react";
import {
  FillStarIcon,
  OutlineStarIcon,
} from "../Landing/review/StudentReview.imports";
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

export const Comment: React.FC = () => {
  return (
    <motion.div
      className="bg-white p-7 w-[400px] rounded drop-shadow-xl"
      initial={{ opacity: 0, y: -23 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-violet-800"></div>
        <div>
          <h3 className="text-[15px]">username</h3>
          <p className="text-[11px] text-violet-950 opacity-90">course name</p>
        </div>
      </div>
      <p className="my-3 text-[12px] text-violet-950 opacity-90">
        this accounting course from help connect is the best course that i have
        ever took and i can say that help connect is the best online course site
        i decently recommend you to check it out!!
      </p>
      <div className="flex items-center justify-start gap-2">
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <FillStarIcon />
        </span>
        <span className="text-yellow-500">
          <OutlineStarIcon />
        </span>
      </div>
    </motion.div>
  );
};
