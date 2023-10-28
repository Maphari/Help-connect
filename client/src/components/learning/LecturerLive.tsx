import { useEffect, useState, useRef, FC, LegacyRef } from "react";
import Peer, { SignalData } from "simple-peer";
import SimplePeer from "simple-peer";
import { BsFillClipboard2PlusFill as ClipboardIcon } from "react-icons/bs";
import { BiSolidPhoneCall as CallIcon } from "react-icons/bi";
import { HiPhoneMissedCall as LeaveCallIcon } from "react-icons/hi";
import { MdAddCall as AnswerCallIcon } from "react-icons/md";
import CopyToClipboard from "react-copy-to-clipboard";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

export const LecturerLive: FC = () => {
  const [me, setMe] = useState<string>("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [receivingCall, setReceivingCall] = useState<boolean>(false);
  const [caller, setCaller] = useState<string>("");
  const [callerSignal, setCallerSignal] = useState<SignalData | string | null>(
    null
  );
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [idToCall, setIdToCall] = useState<string>("");
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const myVideo = useRef<HTMLVideoElement>();
  const userVideo = useRef<HTMLVideoElement>();
  const connectionRef = useRef<SimplePeer.Instance>();

  const callUser = (id: string) => {
    if (stream) {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
      });
      peer.on("signal", (data) => {
        socket.emit("callUser", {
          userToCall: id,
          signalData: data,
          from: me,
          name: name,
        });
      });
      peer.on("stream", (stream) => {
        if (userVideo.current) userVideo.current.srcObject = stream;
      });
      socket.on("callAccepted", (signal) => {
        setCallAccepted(true);
        peer.signal(signal);
      });

      connectionRef.current = peer;
    }
  };

  const answerCall = () => {
    if (stream) {
      setCallAccepted(true);
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });
      peer.on("signal", (data) => {
        socket.emit("answerCall", { signal: data, to: caller });
      });
      peer.on("stream", (stream) => {
        if (userVideo.current) userVideo.current.srcObject = stream;
      });

      if (callerSignal) {
        peer.signal(callerSignal as SignalData | string);
        connectionRef.current = peer;
      }
    }
  };

  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  return (
    <>
      <div className="container flex gap-4 flex-wrap mt-10">
        <div className="video-container">
          <div className="video">
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo as LegacyRef<HTMLVideoElement>}
                autoPlay
                className="w-[600px]"
              />
            )}
          </div>
          <div className="video">
            {callAccepted && !callEnded ? (
              <video
                playsInline
                ref={userVideo as LegacyRef<HTMLVideoElement>}
                autoPlay
                className="w-[300px]"
              />
            ) : null}
          </div>
        </div>
        <div className="myId">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <button
              type="submit"
              className="text-sm flex items-center gap-1 p-2 bg-blue-900 text-white"
            >
              <span>
                <ClipboardIcon />
              </span>
              <span>Copy ID</span>
            </button>
          </CopyToClipboard>

          <input
            type="text"
            placeholder="Caller Id"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <button
                type="submit"
                onClick={leaveCall}
                className="text-sm flex items-center gap-1 p-2 bg-blue-900 text-white"
              >
                <span>
                  <LeaveCallIcon />
                </span>
                <span>Leave call</span>
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => callUser(idToCall)}
                className="text-sm flex items-center gap-1 p-2 bg-blue-900 text-white"
              >
                <span>
                  <CallIcon />
                </span>
                <span>Call user</span>
              </button>
            )}
            {idToCall}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <button
                type="submit"
                onClick={answerCall}
                className="text-sm flex items-center gap-1 p-2 bg-blue-900 text-white"
              >
                <span>
                  <AnswerCallIcon />
                </span>
                <span>Answer call</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
