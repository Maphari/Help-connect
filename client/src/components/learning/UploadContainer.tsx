import React, { useState } from "react";
import { LecturerTracker } from "../UI/LecturerTracker";
import {
  BsCameraVideoFill as LearningIcon,
  BsFillCalendarEventFill as EventIcon,
} from "react-icons/bs";
import { RiFilePaper2Fill as WriteIcon } from "react-icons/ri";
import { BiSolidReport as ReportIcon } from "react-icons/bi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { DashboardHeader } from "../UI/DashboardHeader";
import { DashboardActionHeader } from "../UI/DashboardActionHeader";
// import { IDataObject } from "../../context/Context.config";
// import { FetchUserDataContext } from "../../context/FetchUserData.context";
import { failedNotification } from "../../global/ToastNotification.function";

type HTMLEventInput =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface IFileData {
  fileProperties: File | null;
  fileData: string | null;
}

export const UploadContainer: React.FC = () => {
  // const { lecturer } = useContext<IDataObject>(FetchUserDataContext);
  // const { whatYouTeach } = lecturer;
  const [isUploadVideoModal, setIsUploadVideoModal] = useState<boolean>(false);
  const [isUploadFileModal, setIsUploadFileModal] = useState<boolean>(false);
  const [isUploadAnnouncementModal, setIsUploadAnnouncementModal] =
    useState<boolean>(false);
  const [isUploadEventModal, setIsUploadEventModal] = useState<boolean>(false);
  const [textAreaCounter, setTextAreaCounter] = useState<number>(0);
  const [videoUpload, setVideoUpload] = useState<File | null>(null);
  const [previewVideoUpload, setPreviewVideoUpload] = useState<string | null>(
    null
  );

  const [videoTopic, setVideoTopic] = useState<string>("");
  const [videoDescription, setVideoDescription] = useState<string>("");
  const [videoTeachingLevel, setVideoTeachingLevel] = useState<string>("");
  const [videoUploadError, setVideoUploadError] = useState<string>("");
  const [videoTopicError, setVideoTopicError] = useState<string>("");
  const [videoDescriptionError, setVideoDescriptionError] =
    useState<string>("");
  const [videoTeachingLevelError, setVideoTeachingLevelError] =
    useState<string>("");

  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [previewFileUpload, setPreviewFileUpload] = useState<string | null>(
    null
  );
  const [fileTopic, setFileTopic] = useState<string>("");
  const [fileDescription, setFileDescription] = useState<string>("");
  const [fileTeachingLevel, setFileTeachingLevel] = useState<string>("");
  const [fileUploadError, setFileUploadError] = useState<string>("");
  const [fileTopicError, setFileTopicError] = useState<string>("");
  const [fileDescriptionError, setFileDescriptionError] = useState<string>("");
  const [fileTeachingLevelError, setFileTeachingLevelError] =
    useState<string>("");

  const [announcementTopic, setAnnouncementTopic] = useState<string>("");
  const [announcementDescription, setAnnouncementDescription] =
    useState<string>("");
  const [announcementTeachingLevel, setAnnouncementTeachingLevel] =
    useState<string>("");
  const [announcementTopicError, setAnnouncementTopicError] =
    useState<string>("");
  const [announcementDescriptionError, setAnnouncementDescriptionError] =
    useState<string>("");
  const [announcementTeachingLevelError, setAnnouncementTeachingLevelError] =
    useState<string>("");

  const [eventTopic, setEventTopic] = useState<string>("");
  const [eventStartDate, setEventStartDate] = useState<string>("");
  const [eventEndDate, setEventEndDate] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventTeachingLevel, setEventTeachingLevel] = useState<string>("");
  const [eventTopicError, setEventTopicError] = useState<string>("");
  const [eventDescriptionError, setEventDescriptionError] =
    useState<string>("");
  const [eventTeachingLevelError, setEventTeachingLevelError] =
    useState<string>("");
  const [eventStartDateError, setEventStartDateError] = useState<string>("");
  const [eventEndDateError, setEventEndDateError] = useState<string>("");

  const textAreaMaxLength: number = 2000;

  function OpenUploadVideoModalHandler(): void {
    setIsUploadVideoModal(true);
  }

  function CloseUploadVideoModalHandler(): void {
    setIsUploadVideoModal(false);
  }

  function OpenUploadFileModalHandler(): void {
    setIsUploadFileModal(true);
  }

  function CloseUploadFileModalHandler(): void {
    setIsUploadFileModal(false);
  }

  function OpenUploadAnnouncementModalHandler(): void {
    setIsUploadAnnouncementModal(true);
  }

  function CloseUploadAnnouncementModalHandler(): void {
    setIsUploadAnnouncementModal(false);
  }

  function OpenUploadEventModalHandler(): void {
    setIsUploadEventModal(true);
  }

  function CloseUploadEventModalHandler(): void {
    setIsUploadEventModal(false);
  }

  function displayErrorMessage(errorMessage: string): JSX.Element | "" {
    return (
      errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )
    );
  }

  // DATES
  function startDateEventHandler(e: HTMLEventInput) {
    setEventStartDate(e.target.value);
  }
  function endDateEventHandler(e: HTMLEventInput) {
    setEventEndDate(e.target.value);
  }

  function startDateEventError() {
    if (!eventStartDate) {
      setEventStartDateError("Please select a start date");
    } else {
      setEventStartDateError("");
    }
  }
  function endDateEventError() {
    if (!eventEndDate) {
      setEventEndDateError("Please select an end date");
    } else {
      setEventEndDateError("");
    }
  }

  // VIDEO UPLOAD
  function topicHandler(e: HTMLEventInput) {
    setVideoTopic(e.target.value);

    if (videoTopic.length < 3) {
      setVideoTopicError("Topic must be at least 3 characters");
    } else {
      setVideoTopicError("");
    }
  }

  function videoDescriptionHandler(e: HTMLEventInput) {
    setTextAreaCounter(e.target.value.length);
    setVideoDescription(e.target.value);
    if (videoDescription.length > textAreaMaxLength) {
      setVideoDescriptionError("Description must be less than 2000 characters");
    } else {
      setVideoDescriptionError("");
    }
  }

  function teachingLevelHandler(e: HTMLEventInput) {
    setVideoTeachingLevel(e.target.value);

    if (videoTeachingLevel.length < 3) {
      setVideoTeachingLevelError(
        "Teaching level must be at least 3 characters"
      );
    } else {
      setVideoTeachingLevelError("");
    }
  }

  const videoUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Checking if file type is valid
      if (file.type.startsWith("video/")) {
        // Ensure the MIME type starts with "video/"
        // Showing a preview of the video (if needed)
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const videoURL = e.target?.result as string;
          const maxSizeVideo: number = 200 * 1024 * 1024;

          if (file && videoURL) {
            if (file.size > maxSizeVideo) {
              setVideoUploadError("Video cannot be more than 200MB");
            } else {
              setVideoUpload(file);
              setPreviewVideoUpload(videoURL);
              setVideoUploadError("");
            }
          }
        };

        reader.readAsDataURL(file);
      } else {
        failedNotification("Please choose a valid video");
      }
    } else {
      failedNotification("Please choose a valid video");
    }
  };

  // FILE UPLOAD HANDLER
  function fileTopicHandler(e: HTMLEventInput) {
    setFileTopic(e.target.value);

    if (videoTopic.length < 3) {
      setFileTopicError("Topic must be at least 3 characters");
    } else {
      setFileTopicError("");
    }
  }

  function fileDescriptionHandler(e: HTMLEventInput) {
    setTextAreaCounter(e.target.value.length);
    setFileDescription(e.target.value);
    if (fileDescription.length > textAreaMaxLength) {
      setFileDescriptionError("Description must be less than 2000 characters");
    } else {
      setFileDescriptionError("");
    }
  }

  function fileTeachingLevelHandler(e: HTMLEventInput) {
    setFileTeachingLevel(e.target.value);

    if (videoTeachingLevel.length < 3) {
      setFileTeachingLevelError("Teaching level must be at least 3 characters");
    } else {
      setFileTeachingLevelError("");
    }
  }

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      if (file.type === "application/pdf") {
        const maxFileSize = 5 * 1024 * 1024; // 5 MB
        if (file.size > maxFileSize) {
          setFileUploadError("File size cannot exceed 5MB");
        } else {
          const reader = new FileReader();

          reader.onload = (e: ProgressEvent<FileReader>) => {
            const fileURL = e.target?.result as string;
            const maxSizeVideo: number = 200 * 1024 * 1024;

            if (file && fileURL) {
              if (file.size > maxSizeVideo) {
                setVideoUploadError("Video cannot be more than 200MB");
              } else {
                setFileUpload(file);
                setPreviewFileUpload(fileURL);
                setFileUploadError("");
              }
            }
          };
          reader.readAsDataURL(file);
        }
      } else {
        failedNotification(
          "Please choose a valid PDF file for the prescription"
        );
      }
    } else {
      failedNotification("Please choose a valid PDF file for the prescription");
    }
  };

  // ANNOUNCEMENT UPLOAD
  function announcementTopicHandler(e: HTMLEventInput) {
    setAnnouncementTopic(e.target.value);

    if (announcementTopic.length < 3) {
      setVideoTopicError("Topic must be at least 3 characters");
    } else {
      setAnnouncementTopicError("");
    }
  }

  function announcementDescriptionHandler(e: HTMLEventInput) {
    setTextAreaCounter(e.target.value.length);
    setAnnouncementDescription(e.target.value);
    if (videoDescription.length > textAreaMaxLength) {
      setAnnouncementDescriptionError(
        "Description must be less than 2000 characters"
      );
    } else {
      setAnnouncementDescriptionError("");
    }
  }

  function announcementTeachingLevelHandler(e: HTMLEventInput) {
    setAnnouncementTeachingLevel(e.target.value);

    if (videoTeachingLevel.length < 3) {
      setAnnouncementTeachingLevelError(
        "Teaching level must be at least 3 characters"
      );
    } else {
      setAnnouncementTeachingLevelError("");
    }
  }

  // EVENT UPLOAD
  function eventTopicHandler(e: HTMLEventInput) {
    setEventTopic(e.target.value);

    if (announcementTopic.length < 3) {
      setEventTopicError("Topic must be at least 3 characters");
    } else {
      setEventTopicError("");
    }
  }

  function eventDescriptionHandler(e: HTMLEventInput) {
    setTextAreaCounter(e.target.value.length);
    setEventDescription(e.target.value);

    if (videoDescription.length > textAreaMaxLength) {
      setEventDescriptionError("Description must be less than 2000 characters");
    } else {
      setEventDescriptionError("");
    }
  }

  function eventTeachingLevelHandler(e: HTMLEventInput) {
    setEventTeachingLevel(e.target.value);

    if (videoTeachingLevel.length < 3) {
      setEventTeachingLevelError(
        "Teaching level must be at least 3 characters"
      );
    } else {
      setEventTeachingLevelError("");
    }
  }

  function onSubmitVideoHandler(e: React.FormEvent<HTMLFormElement>): void {
    try {
      e.preventDefault();

      const videoData: IFileData = {
        fileProperties: videoUpload,
        fileData: previewVideoUpload,
      };

      const formData: FormData = new FormData();
      formData.append("video-topic", videoTopic);
      formData.append("video-teaching-level", videoTeachingLevel);

      if (videoData.fileData && videoData.fileProperties) {
        const videoBlob = new Blob([videoData.fileProperties], {
          type: "video/mp4",
        });
        formData.append("video", videoBlob, videoData.fileData);
      }
      formData.append("video-description", videoDescription);

      for (const [key, vale] of formData.entries()) {
        console.log(key, vale);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmitFileHandler(e: React.FormEvent<HTMLFormElement>): void {
    try {
      e.preventDefault();

      const fileData: IFileData = {
        fileProperties: fileUpload,
        fileData: previewFileUpload,
      };

      const formData: FormData = new FormData();

      formData.append("file-topic", fileTopic);
      formData.append("file-teaching-level", fileTeachingLevel);
      if (fileData.fileData !== null) {
        formData.append("file", fileData.fileData);
      }

      for (const [key, vale] of formData.entries()) {
        console.log(key, vale);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmitAnnouncementHandler(
    e: React.FormEvent<HTMLFormElement>
  ): void {
    try {
      e.preventDefault();

      const formData: FormData = new FormData();
      formData.append("announcement-topic", announcementTopic);
      formData.append("announcement-teaching-level", announcementTeachingLevel);
      formData.append("announcement-description", announcementDescription);
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmitEventHandler(e: React.FormEvent<HTMLFormElement>): void {
    try {
      e.preventDefault();

      startDateEventError()
      endDateEventError()

      const formData: FormData = new FormData()
      formData.append("event-topic", eventTopic)
      formData.append("event-teaching-level", eventTeachingLevel)
      formData.append("event-description", eventDescription)
      formData.append("startDate", eventStartDate)
      formData.append("endDate", eventEndDate)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="flex flex-col flex-wrap gap-3 mb-7 relative">
        <section className="mt-7 flex items-center gap-3 flex-wrap">
          <button
            onClick={OpenUploadVideoModalHandler}
            type="submit"
            className="flex text-sm items-center gap-2 bg-blue-950 text-white p-2 rounded transition-all duration-700 ease-linear hover:bg-blue-900"
          >
            <span>
              <LearningIcon />
            </span>
            <span>Upload video</span>
          </button>
          <button
            type="submit"
            onClick={OpenUploadFileModalHandler}
            className="flex text-sm items-center gap-2 bg-cyan-950 text-white p-2 rounded transition-all duration-700 ease-linear hover:bg-cyan-900"
          >
            <span>
              <ReportIcon />
            </span>
            <span>Upload Document</span>
          </button>
          <button
            type="submit"
            onClick={OpenUploadAnnouncementModalHandler}
            className="flex text-sm items-center gap-2 bg-green-950 text-white p-2 rounded transition-all duration-700 ease-linear hover:bg-green-900"
          >
            <span>
              <WriteIcon />
            </span>
            <span>Write announcement</span>
          </button>
          <button
            type="submit"
            onClick={OpenUploadEventModalHandler}
            className="flex text-sm items-center gap-2 bg-sky-950 text-white p-2 rounded transition-all duration-700 ease-linear hover:bg-sky-900"
          >
            <span>
              <EventIcon />
            </span>
            <span>Create Event</span>
          </button>
        </section>
      </section>

      <section className="flex flex-col bg-white p-5 w-full border">
        <header className="mb-7">
          <DashboardHeader
            header={"Content tracker"}
            subHeader={
              "Here you keep track of all the actions happening on the video you posted."
            }
          />
        </header>

        <section className="flex flex-wrap gap-3">
          <LecturerTracker
            header="0 Uploaded docs"
            bgStyle="bg-violet-50 hover:cursor-pointer"
            iconStyle="text-violet-500"
            explanation="Track how many students are enrolled in your course. You'll get some motivation"
            children={<ReportIcon />}
          />

          <LecturerTracker
            header="0 Uploaded videos"
            bgStyle="bg-blue-50 hover:cursor-pointer"
            iconStyle="text-blue-500"
            explanation="Track how many videos you have already posted so far. You'll get some motivation"
            styles="text-3xl"
            children={<LearningIcon />}
          />
          <LecturerTracker
            header="0 Announcements"
            bgStyle="bg-violet-50 hover:cursor-pointer"
            iconStyle="text-violet-500"
            styles="text-3xl"
            explanation="Track how many students have comments in your course. You'll get some motivation"
            children={<WriteIcon />}
          />
          <LecturerTracker
            header="0 Events"
            bgStyle="bg-yellow-50 hover:cursor-pointer"
            iconStyle="text-yellow-500"
            explanation="Track how many ratings you already have so far. You'll get some motivation"
            styles="text-3xl"
            children={<EventIcon />}
          />
          <LecturerTracker
            header="0 Reports"
            bgStyle="bg-red-50 hover:cursor-pointer"
            iconStyle="text-red-500"
            explanation="Track how many reports you already have so far. So that you can improve based on that report"
            styles="text-3xl"
            children={<ReportIcon />}
          />
        </section>

        {isUploadVideoModal && (
          <section className="absolute top-0 left-0 transition-all duration-700 ease-linear flex justify-center items-center bg-black w-full h-full bg-opacity-80">
            <section className="bg-white w-2/5 p-7 border rounded">
              <header className="flex items-center justify-between mb-8">
                <DashboardActionHeader
                  header={"Upload Video"}
                  children={
                    <span className="text-blue-950">
                      <LearningIcon />
                    </span>
                  }
                  subHeader={
                    "Here is where you upload videos for students to watch"
                  }
                />
                <button
                  type="submit"
                  onClick={CloseUploadVideoModalHandler}
                  className="flex items-center justify-center px-2 gap-1 p-1 bg-red-100 rounded text-sm"
                >
                  <span>
                    <CloseIcon />
                  </span>
                  <span>CLOSE</span>
                </button>
              </header>

              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  onSubmitVideoHandler(e)
                }
              >
                <div>
                  <label
                    className="bg-slate-100 text-blue-950 p-2 rounded flex items-center gap-2 transition-all duration-700 ease-linear hover:cursor-pointer hover:bg-slate-200 text-sm justify-center"
                    htmlFor="lecturer-video"
                  >
                    <span>
                      <LearningIcon />
                    </span>
                    <span>
                      {!videoUpload ? "Upload Video" : videoUpload.name}
                    </span>
                  </label>
                  <input
                    id="lecturer-video"
                    type="file"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      videoUploadHandler(e)
                    }
                    className="hidden"
                    placeholder="Upload video"
                  />
                  {displayErrorMessage(videoUploadError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="video-topic"
                    className="text-sm text-gray-500"
                  >
                    Video Topic
                  </label>
                  <input
                    id="video-topic"
                    type="text"
                    onChange={(e: HTMLEventInput) => topicHandler(e)}
                    value={videoTopic}
                    placeholder="Video topic"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(videoTopicError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="teach-level"
                    className="text-sm text-gray-500"
                  >
                    What do you teach
                  </label>
                  <input
                    id="teach-level"
                    type="text"
                    onChange={(e: HTMLEventInput) => teachingLevelHandler(e)}
                    value={videoTeachingLevel}
                    placeholder="What do you teach"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(videoTeachingLevelError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="video-description"
                    className="text-sm text-gray-500"
                  >
                    Video Description
                  </label>
                  <textarea
                    id="video-description"
                    rows={4}
                    onChange={(e: HTMLEventInput) => videoDescriptionHandler(e)}
                    value={videoDescription}
                    maxLength={textAreaMaxLength}
                    placeholder="Video description"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  <div className="flex items-center justify-between text-sm">
                    {displayErrorMessage(videoDescriptionError)}
                    <div className="flex justify-end w-full">
                      <span>{textAreaCounter}</span>
                      {"/"}
                      <span>{textAreaMaxLength}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="p-2 text-sm bg-blue-950 text-white w-full rounded"
                >
                  Upload Video
                </button>
              </form>
            </section>
          </section>
        )}

        {isUploadFileModal && (
          <section className="absolute top-0 left-0 transition-all duration-700 ease-linear flex justify-center items-center bg-black w-full h-full bg-opacity-80">
            <section className="bg-white w-2/5 p-7 border rounded">
              <header className="flex items-center justify-between mb-8">
                <DashboardActionHeader
                  header={"Upload File"}
                  children={
                    <span className="text-blue-950">
                      <ReportIcon />
                    </span>
                  }
                  subHeader={
                    "Here is where you upload files for students to watch"
                  }
                />
                <button
                  type="submit"
                  onClick={CloseUploadFileModalHandler}
                  className="flex items-center justify-center px-2 gap-1 p-1 bg-red-100 rounded text-sm"
                >
                  <span>
                    <CloseIcon />
                  </span>
                  <span>CLOSE</span>
                </button>
              </header>

              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  onSubmitFileHandler(e)
                }
              >
                <div>
                  <label
                    className="bg-slate-100 text-blue-950 p-2 rounded flex items-center gap-2 transition-all duration-700 ease-linear hover:cursor-pointer hover:bg-slate-200 text-sm justify-center"
                    htmlFor="lecturer-file"
                  >
                    <span>
                      <LearningIcon />
                    </span>
                    <span>{!fileUpload ? "Upload File" : fileUpload.name}</span>
                  </label>
                  <input
                    id="lecturer-file"
                    type="file"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      fileUploadHandler(e)
                    }
                    className="hidden"
                    placeholder="Upload File"
                  />
                  {displayErrorMessage(fileUploadError)}
                </div>

                <div className="my-3">
                  <label htmlFor="file-topic" className="text-sm text-gray-500">
                    File Topic
                  </label>
                  <input
                    id="file-topic"
                    type="text"
                    onChange={(e: HTMLEventInput) => fileTopicHandler(e)}
                    value={fileTopic}
                    placeholder="File topic"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(fileTopicError)}
                </div>

                <div className="my-3">
                  <label htmlFor="" className="text-sm text-gray-500">
                    What do you teach
                  </label>
                  <input
                    id="file-teach-level"
                    type="text"
                    onChange={(e: HTMLEventInput) =>
                      fileTeachingLevelHandler(e)
                    }
                    value={fileTeachingLevel}
                    placeholder="What do you teach"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(fileTeachingLevelError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="file-description"
                    className="text-sm text-gray-500"
                  >
                    File Description
                  </label>
                  <textarea
                    id="file-description"
                    rows={4}
                    onChange={(e: HTMLEventInput) => fileDescriptionHandler(e)}
                    value={fileDescription}
                    maxLength={textAreaMaxLength}
                    placeholder="File description"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  <div className="flex items-center justify-between text-sm">
                    {displayErrorMessage(fileDescriptionError)}
                    <div className="flex justify-end w-full">
                      <span>{textAreaCounter}</span>
                      {"/"}
                      <span>{textAreaMaxLength}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="p-2 text-sm bg-blue-950 text-white w-full rounded"
                >
                  Upload File
                </button>
              </form>
            </section>
          </section>
        )}

        {isUploadEventModal && (
          <section className="absolute top-0 left-0 transition-all duration-700 ease-linear flex justify-center items-center bg-black w-full h-full bg-opacity-80">
            <section className="bg-white w-2/5 p-7 border rounded">
              <header className="flex items-center justify-between mb-8">
                <DashboardActionHeader
                  header={"Create Event"}
                  children={
                    <span className="text-blue-950">
                      <WriteIcon />
                    </span>
                  }
                  subHeader={
                    "Here is where you write event for students to watch"
                  }
                />
                <button
                  type="submit"
                  onClick={CloseUploadEventModalHandler}
                  className="flex items-center justify-center px-2 gap-1 p-1 bg-red-100 rounded text-sm"
                >
                  <span>
                    <CloseIcon />
                  </span>
                  <span>CLOSE</span>
                </button>
              </header>

              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  onSubmitEventHandler(e)
                }
              >
                <div className="my-3">
                  <label
                    htmlFor="event-topic"
                    className="text-sm text-gray-500"
                  >
                    Announcement Topic
                  </label>
                  <input
                    id="event-topic"
                    type="text"
                    onChange={(e: HTMLEventInput) => eventTopicHandler(e)}
                    value={eventTopic}
                    placeholder="event topic"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(eventTopicError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="event-teach"
                    className="text-sm text-gray-500"
                  >
                    What do you teach
                  </label>
                  <input
                    id="event-teach-level"
                    type="text"
                    onChange={(e: HTMLEventInput) =>
                      eventTeachingLevelHandler(e)
                    }
                    value={eventTeachingLevel}
                    placeholder="What do you teach"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(eventTeachingLevelError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="event-start"
                    className="text-sm text-gray-500"
                  >
                    Event start date
                  </label>
                  <input
                    id="event-start"
                    type="date"
                    onChange={(e: HTMLEventInput) => startDateEventHandler(e)}
                    value={eventStartDate}
                    placeholder="What do you teach"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(eventStartDateError)}
                </div>

                <div className="my-3">
                  <label htmlFor="event-end" className="text-sm text-gray-500">
                    Event end date
                  </label>
                  <input
                    id="event-end"
                    type="date"
                    onChange={(e: HTMLEventInput) => endDateEventHandler(e)}
                    value={eventEndDate}
                    placeholder="What do you teach"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(eventEndDateError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="event-description"
                    className="text-sm text-gray-500"
                  >
                    Event Description
                  </label>
                  <textarea
                    id="event-description"
                    rows={4}
                    onChange={(e: HTMLEventInput) => eventDescriptionHandler(e)}
                    value={eventDescription}
                    maxLength={textAreaMaxLength}
                    placeholder="Write event description"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  <div className="flex items-center justify-between text-sm">
                    {displayErrorMessage(eventDescriptionError)}
                    <div className="flex justify-end w-full">
                      <span>{textAreaCounter}</span>
                      {"/"}
                      <span>{textAreaMaxLength}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="p-2 text-sm bg-blue-950 text-white w-full rounded"
                >
                  Create Event
                </button>
              </form>
            </section>
          </section>
        )}

        {isUploadAnnouncementModal && (
          <section className="absolute top-0 left-0 transition-all duration-700 ease-linear flex justify-center items-center bg-black w-full h-full bg-opacity-80">
            <section className="bg-white w-2/5 p-7 border rounded">
              <header className="flex items-center justify-between mb-8">
                <DashboardActionHeader
                  header={"Give announcement"}
                  children={
                    <span className="text-blue-950">
                      <WriteIcon />
                    </span>
                  }
                  subHeader={
                    "Here is where you write announcement for students to watch"
                  }
                />
                <button
                  type="submit"
                  onClick={CloseUploadAnnouncementModalHandler}
                  className="flex items-center justify-center px-2 gap-1 p-1 bg-red-100 rounded text-sm"
                >
                  <span>
                    <CloseIcon />
                  </span>
                  <span>CLOSE</span>
                </button>
              </header>

              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  onSubmitAnnouncementHandler(e)
                }
              >
                <div className="my-3">
                  <label
                    htmlFor="announcement-topic"
                    className="text-sm text-gray-500"
                  >
                    Announcement Topic
                  </label>
                  <input
                    id="announcement-topic"
                    type="text"
                    onChange={(e: HTMLEventInput) =>
                      announcementTopicHandler(e)
                    }
                    value={announcementTopic}
                    placeholder="announcement topic"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(announcementTopicError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="announcement-teach"
                    className="text-sm text-gray-500"
                  >
                    What do you teach
                  </label>
                  <input
                    id="announcement-teach-level"
                    type="text"
                    onChange={(e: HTMLEventInput) =>
                      announcementTeachingLevelHandler(e)
                    }
                    value={announcementTeachingLevel}
                    placeholder="What do you teach"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  {displayErrorMessage(announcementTeachingLevelError)}
                </div>

                <div className="my-3">
                  <label
                    htmlFor="announcement-description"
                    className="text-sm text-gray-500"
                  >
                    Write announcement
                  </label>
                  <textarea
                    id="announcement-description"
                    rows={4}
                    onChange={(e: HTMLEventInput) =>
                      announcementDescriptionHandler(e)
                    }
                    value={announcementDescription}
                    maxLength={textAreaMaxLength}
                    placeholder="Write announcement"
                    className="outline-none py-2 rounded px-2 text-sm w-full bg-slate-100 mt-1"
                  />
                  <div className="flex items-center justify-between text-sm">
                    {displayErrorMessage(announcementDescriptionError)}
                    <div className="flex justify-end w-full">
                      <span>{textAreaCounter}</span>
                      {"/"}
                      <span>{textAreaMaxLength}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="p-2 text-sm bg-blue-950 text-white w-full rounded"
                >
                  Write Announcement
                </button>
              </form>
            </section>
          </section>
        )}
      </section>
    </>
  );
};