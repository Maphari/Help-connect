import React from "react";
import { RiFilePaper2Fill as WriteIcon } from "react-icons/ri";

interface IAnnouncement {
  data: string[];
}

export const Announcement: React.FC<IAnnouncement> = () => {
  return (
    <>
      <section className="bg-white p-2 rounded">
        <header>
          <div className="flex items-center gap-3 text-lg">
            <span>
              <WriteIcon />
            </span>
            <span>Your Announcements</span>
          </div>
          <p className="text-xs opacity-50 mt-1">
            Track all your announcements on this section
          </p>
        </header>

        <section className="mt-10 ">
          <div className="bg-green-100 p-3">
            <header>
              <WriteIcon />
            </header>
          </div>
        </section>
      </section>
    </>
  );
};
