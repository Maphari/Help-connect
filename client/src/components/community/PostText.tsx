import React, { useState } from "react";
import { BiSolidLike as LikeIcon, BiLike as UnlikeIcon } from "react-icons/bi";
import { FaGraduationCap as AssistIcon } from "react-icons/fa6";
import {
  FaHandshake as UsefulIcon,
  FaHandshakeSlash as UnUsefulIcon,
} from "react-icons/fa6";

interface IPostText {
  username: string;
  postHeader: string;
  postTime: string;
}

export const PostText: React.FC<IPostText> = ({
  username,
  postTime,
  postHeader,
}) => {
  const [likeCounter, setLikeCounter] = useState<number>(0);
  const [usefulCounter, setUsefulCounter] = useState<number>(0);
  function likesHandler() {
    setLikeCounter(likeCounter + 1);
  }

  function unlikeHandler() {
    if (likeCounter === 0) return;

    setLikeCounter(likeCounter - 1);
  }

  function usefulHandler() {
    setUsefulCounter(usefulCounter + 1);
  }

  function unUsefulHandler() {
    if (usefulCounter === 0) return;

    setUsefulCounter(usefulCounter - 1);
  }

  return (
    <>
      <section className="w-full flex items-center flex-col gap-4">
        <section className="bg-white w-1/2 rounded-xl py-6 px-7 drop-shadow-sm">
          <header className="flex items-center gap-3">
            <div className="h-12 w-12 bg-red-500 rounded-full"></div>
            <div>
              <p className="text-base mb-1 text-gray-500">{username}</p>
              <p className="text-xs opacity-50">{postTime}</p>
            </div>
          </header>
          <section className="mt-4">
            <p className="text-sm text-gray-700">{postHeader}</p>
          </section>

          <section className="mt-5 flex items-center gap-3">
            {likeCounter >= 1 ? (
              <button
                onClick={unlikeHandler}
                type="submit"
                className="flex px-3 items-center gap-2 bg-red-200 p-2 text-slate-600"
              >
                <span>
                  <LikeIcon />
                </span>
                <span className="text-sm">Like {likeCounter}</span>
              </button>
            ) : (
              <button
                onClick={likesHandler}
                type="submit"
                className="flex px-3 items-center gap-2 bg-red-200 p-2 text-slate-600"
              >
                <span>
                  <UnlikeIcon />
                </span>
                <span className="text-sm">Like {likeCounter}</span>
              </button>
            )}
            <button
              type="submit"
              className="flex px-3 items-center gap-2 bg-slate-200 p-2 text-slate-600"
            >
              <span>
                <AssistIcon />
              </span>
              <span className="text-sm">Assist {0}</span>
            </button>

            {usefulCounter >= 1 ? (
              <button
                type="submit"
                onClick={unUsefulHandler}
                className="flex px-3 items-center gap-2 bg-sky-200 p-2 text-slate-600"
              >
                <span>
                  <UsefulIcon />
                </span>
                <span className="text-sm">Useful {usefulCounter}</span>
              </button>
            ) : (
              <button
                type="submit"
                onClick={usefulHandler}
                className="flex px-3 items-center gap-2 bg-sky-200 p-2 text-slate-600"
              >
                <span>
                  <UnUsefulIcon />
                </span>
                <span className="text-sm">Useful {usefulCounter}</span>
              </button>
            )}
          </section>
        </section>
      </section>
    </>
  );
};
