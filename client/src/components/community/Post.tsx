import React, { useState } from "react";
import { BsFillSendFill as SendIcon } from "react-icons/bs";
import { BsFillFileEarmarkImageFill as ImageIcon } from "react-icons/bs";
import { FaVideo as VideoIcon } from "react-icons/fa6";
import { PostImage } from "./PostImage";
import { PostText } from "./PostText";
import { UploadImageModal } from "./UploadImageModal";
import { UploadVideoModal } from "./UploadVideoModal";

export const PostComponent: React.FC = () => {
  const [isUploadImageModal, setIsUploadImageModal] = useState<boolean>(false);
  const [isUploadVideoModal, setIsUploadVideoModal] = useState<boolean>(false);

  return (
    <section>
      <form className="bg-white rounded-xl drop-shadow-lg p-2 flex items-center">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Whats on mind ?"
            className="text-sm p-2 w-full flex-1 outline-none px-2"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-950 text-white p-2"
          >
            <span>
              <SendIcon />
            </span>
            <span>Post</span>
          </button>
        </div>
      </form>

      <section className="mt-5 flex items-center gap-2">
        <button
          type="submit"
          onClick={() => setIsUploadImageModal(true)}
          className="flex items-center gap-2 bg-slate-200 p-2 text-slate-600"
        >
          <span>
            <ImageIcon />
          </span>
          <span className="text-sm">Upload image</span>
        </button>
        <button
          type="submit"
          onClick={() => setIsUploadVideoModal(true)}
          className="flex items-center gap-2 bg-slate-200 p-2 text-slate-600"
        >
          <span>
            <VideoIcon />
          </span>
          <span className="text-sm">Upload Video</span>
        </button>
      </section>

      <section className="flex items-center flex-col mt-8 gap-6">
        <PostImage
          username="Username 1"
          postTime="13:00"
          postHeader="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus aspernatur aliquid quae sunt, dolor, ut tenetur impedit deserunt repellendus fugit omnis enim. Magnam eveniet cumque nostrum quia nulla, ratione dolores!"
          children={
            <img
              src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
              alt="post-1"
            />
          }
        />
        <PostText
          username="username 2"
          postTime="12:00"
          postHeader="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus aspernatur aliquid quae sunt, dolor, ut tenetur impedit deserunt repellendus fugit omnis enim. Magnam eveniet cumque nostrum quia nulla, ratione dolores!"
        />
      </section>

      {isUploadImageModal && (
        <section className="absolute h-screen top-0 left-0 w-full flex items-center justify-center bg-opacity-70 bg-black">
          <UploadImageModal setIsUploadImageModal={setIsUploadImageModal} />
        </section>
      )}

      {isUploadVideoModal && (
        <section className="absolute h-screen top-0 left-0 w-full flex items-center justify-center bg-opacity-70 bg-black">
          <UploadVideoModal setIsUploadVideoModal={setIsUploadVideoModal} />
        </section>
      )}
    </section>
  );
};
