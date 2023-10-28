import { useState } from "react";
import { BsCameraVideoFill as LearningIcon } from "react-icons/bs";

// JOIN MEETING COMPONENT
export function JoinScreen({
  getMeetingAndToken,
}: {
  getMeetingAndToken: (meeting?: string) => void;
}) {
  const [meetingId, setMeetingId] = useState<string | undefined>();
  const onClick = async () => {
    getMeetingAndToken(meetingId);
  };
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen gap-2">
      <header className="mb-10 flex items-center gap-3">
        <span className="text-2xl">
          <LearningIcon />
        </span>
        <h1 className="text-xl font-bold">Help Connect Meetings</h1>
      </header>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
        className="outline-none text-sm p-2 w-1/2 border border-yellow-500 bg-slate-200 rounded"
      />
      <button
        type="submit"
        className="text-sm p-2 bg-cyan-950 rounded w-1/2 text-white"
        onClick={onClick}
      >
        Join
      </button>
      <button
        type="submit"
        className="text-sm p-2 bg-blue-950 rounded w-1/2 text-white"
        onClick={onClick}
      >
        Create Meeting
      </button>
    </div>
  );
}
