import React, { FC } from "react";
import { PiPaperPlaneRightFill as SendCommentIcon } from "react-icons/pi";

export const LiveContainer: FC = () => {
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <section className="w-full flex flex-col gap-8">
      <section className="w-full flex flex-wrap gap-3">
        <section className="bg-white border w-full h-[30rem]"></section>
        <section className="flex items-center gap-2">
          <button type="submit" className="bg-green-700 p-2 text-white rounded">
            Create call
          </button>
          <button type="submit" className="bg-red-700 p-2 text-white rounded">
            End call
          </button>
        </section>
      </section>

      <section className="flex-1 flex flex-col gap-5 justify-between p-3 bg-white border">
        <section className="flex-1 overflow-auto">
          <div className="flex items-center gap-1 bg-slate-200 p-2 rounded-xl">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <h6 className="text-sm text-gray-800">username</h6>
                <h5 className="text-gray-600 text-sm">13:00</h5>
              </div>
              <p className="text-xs text-gray-600">
                this is a comment that i provided.
              </p>
            </div>
          </div>
        </section>
        <section>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              onSubmitHandler(e)
            }
            className="flex items-center"
          >
            <input
              type="text"
              placeholder="Add comment"
              className="bg-slate-100 flex-1 p-2 outline-none text-sm"
            />
            <button type="submit" className="bg-slate-100 p-2.5">
              <SendCommentIcon />
              <span className="hidden">Send comment</span>
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};
