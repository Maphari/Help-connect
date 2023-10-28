import { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import { ParticipantView } from "./ParticipantView";
import { Controls } from "./Controls";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiUserGroup as CommunityIcon } from "react-icons/hi2";

// MeetingView and Controls components to manage features such as join, leave, mute and unmute.
export function MeetingView({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void;
  meetingId: string;
}) {
  const [joined, setJoined] = useState<string | null>(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };
// 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
  return (
    <div className="container flex w-screen h-screen justify-center items-center flex-col">
      {joined && joined == "JOINED" ? (
        <div>
          <Controls />
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <>
          <header className="mb-7">
            <span className="text-[7rem]">
              <CommunityIcon />
            </span>
          </header>
          <h3>Meeting Id: {meetingId}</h3>
          <section className="flex items-center gap-3 flex-wrap">
            <button
              type="submit"
              className="text-sm p-2 text-white bg-blue-950 mt-8 w-[10rem] rounded"
              onClick={joinMeeting}
            >
              Join
            </button>
            <CopyToClipboard text={meetingId}>
              <button
                type="submit"
                className="text-sm p-2 text-white bg-sky-950 mt-8 w-[10rem] rounded"
              >
                Copy Id
              </button>
            </CopyToClipboard>
          </section>
        </>
      )}
    </div>
  );
}
