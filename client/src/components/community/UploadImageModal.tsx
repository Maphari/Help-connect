import React, { Dispatch } from "react";
import { BsFillFileEarmarkImageFill as ImageIcon } from "react-icons/bs";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";

interface IUploadImageModal {
  setIsUploadImageModal: Dispatch<React.SetStateAction<boolean>>;
}

export const UploadImageModal: React.FC<IUploadImageModal> = ({
  setIsUploadImageModal,
}) => {
  return (
    <>
      <section className="h-auto w-1/2 bg-white p-6 rounded-xl">
        <header className="flex items-center justify-between">
          <h1 className="flex items-center gap-3">
            <span className="text-xl">
              <ImageIcon />
            </span>
            <span className="text-lg">Image post</span>
          </h1>
          <button
            className="flex items-center text-sm bg-red-300 p-2"
            onClick={() => setIsUploadImageModal(false)}
            type="submit"
          >
            <span>
              <CloseIcon />
            </span>
            <span>Close</span>
          </button>
        </header>

        <section className="mt-6">
          <form>
            <label
              className="flex items-center justify-center bg-slate-200 text-sm p-2 hover:cursor-pointer gap-2 bg-slate-300p-2 rounded mb-3"
              htmlFor="video-post"
            >
              <span>
                <ImageIcon />
              </span>
              <span>Upload Image</span>
              <input
                type="file"
                className="hidden"
                id="video-post"
                placeholder="video post"
              />
            </label>
            <input
              type="text"
              placeholder="Which level are you in ?"
              className="w-full bg-slate-100 text-gray-800 text-sm p-2 mb-3"
            />
            <textarea
              placeholder="Whats on your mind"
              rows={5}
              className="w-full bg-slate-100 text-gray-800"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-950 text-white text-sm p-2 rounded"
            >
              Create post
            </button>
          </form>
        </section>
      </section>
    </>
  );
};
