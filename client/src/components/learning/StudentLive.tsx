// import React, { useContext } from "react";
// import { DashboardUI } from "../UI/DashboardUI";
// import { DashboardHeader } from "../UI/DashboardHeader";
// import { greetUserBasedOnTime } from "../../global/Functions.global";
// import { IDataObject } from "../../context/Context.config";
// import { FetchUserDataContext } from "../../context/FetchUserData.context";

// export const StudentLive: React.FC = () => {
//   const { student } = useContext<IDataObject>(FetchUserDataContext);

//   return (
//     <DashboardUI>
//       <header className="flex items-center justify-between">
//         <div>
//           <DashboardHeader
//             header="Learning"
//             stylesHeader="text-2xl mb-1 font-bold"
//             stylesSubHeader="text-xs opacity-50"
//             subHeader={greetUserBasedOnTime(student.firstName)}
//           />
//         </div>
//       </header>
//       <h1>hello</h1>
//     </DashboardUI>
//   );
// };

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";



function ParticipantView(props: { participantId: string; }) {
  const micRef = useRef<any>(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error: unknown) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);


  return (
    <div>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

function MeetingView() {
  const [joined, setJoined] = useState<string | null>(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className="container">
      {joined && joined == "JOINED" ? (
        <div>
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
        <button type="submit" onClick={joinMeeting}>Join the meeting</button>
      )}
    </div>
  );
}

export const StudentLive: React.FC = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: "itig-f73z-z2os",
        micEnabled: true,
        webcamEnabled: true,
        name: "Phumudzo's Org",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2YWUzOGY0ZS04ZGVmLTQ0NDQtOGY4Yy1kMjgwOTU2NGZlYTQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5ODUwODI3MiwiZXhwIjoxNjk4NTk0NjcyfQ.z9tVQ5znIs5MMCJKI7Jx2mMlyakifXtWq22bYweRwLw"
    >
      <MeetingView />
    </MeetingProvider>
  );
};
