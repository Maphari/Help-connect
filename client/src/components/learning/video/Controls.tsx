import { useMeeting } from "@videosdk.live/react-sdk";

export function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
      <div>
        <button type="submit" onClick={() => leave()}>
          Leave
        </button>
        <button type="submit" onClick={() => toggleMic()}>
          toggleMic
        </button>
        <button type="submit" onClick={() => toggleWebcam()}>
          toggleWebcam
        </button>
      </div>
    );
  }
  