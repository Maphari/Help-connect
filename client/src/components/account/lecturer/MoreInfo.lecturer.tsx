import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { RootState } from "../../../redux/store/student.store";
import {
  successNotification,
  failedNotification,
} from "../../../global/ToastNotification.function";
import { HiUser as UserIcon } from "react-icons/hi2";
import { BsFillCameraFill as CameraIcon } from "react-icons/bs";
import { AiFillFileAdd as FileIcon } from "react-icons/ai";
import axios from "axios";

interface IFileDataImage {
  filename: string;
  fileSize: number;
  fileType: string;
}
interface IFileDataQualification {
  filename: string;
  fileSize: number;
  fileType: string;
}
interface IData {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  phone: string;
  address: string;
  idNumber: string;
  bio: string;
  yearsOfWorkingExperience: string;
  imageProperties: File | object;
  fileProperties: File | object;
  whatYouTeach: string;
  levelOfEducation: string;
}

export const MoreInfoLecturer: React.FC = () => {
  const [selectedFileImage, setSelectedFileImage] = useState<File | null>(null);
  const [selectedFileQualification, setSelectedFileQualification] =
    useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [yearsOfWorkingExperience, setYearsOfWorkingExperience] =
    useState<string>("");
  const [whatYouTeach, setWhatYouTeach] = useState<string>("");
  const [levelOfEducation, setLevelOfEducation] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [genderError, setGenderError] = useState<string>("");
  const [dobError, setDobError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [bioError, setBioError] = useState<string>("");
  const [yearsOfWorkingExperienceError, setYearsOfWorkingExperienceError] =
    useState<string>("");
  const [levelOfEducationError, setLevelOfEducationError] =
    useState<string>("");
  const [whatYouTeachError, setWhatYouTeachError] = useState<string>("");
  const [idNumberError, setIdNumberError] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const lecturer = useSelector((state: RootState) => state.lecturer);
  const { lecturerEmail } = lecturer;

  const handleFirstNameValidation: () => void = function () {
    const firstNameTrim: string = firstName.trim();
    if (!firstNameTrim) {
      setFirstNameError("First name is required");
    } else if (firstNameTrim.length < 5) {
      setFirstNameError("First name must be more than 5 characters");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameValidation: () => void = function () {
    const lastNameTrim: string = lastName.trim();
    if (!lastNameTrim) {
      setLastNameError("Last name is required");
    } else if (lastNameTrim.length < 5) {
      setLastNameError("Last name must be more than 5 characters");
    } else {
      setLastNameError("");
    }
  };

  const handleGenderValidation: () => void = function () {
    const genderTrim: string = gender.trim();
    if (!genderTrim) {
      setGenderError("Gender is required");
    } else {
      setGenderError("");
    }
  };

  const handleDobValidation: () => void = function () {
    if (!dob) {
      setDobError("Date of birth is required");
    } else {
      setDobError("");
    }
  };

  const handlePhoneValidation: () => void = function () {
    const phoneTrim: string = phone.trim();
    if (!phoneTrim) {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }
  };

  const handleAddressValidation: () => void = function () {
    const addressTrim: string = address.trim();
    if (!addressTrim) {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  };

  const handleBioValidation: () => void = function () {
    const bioTrim: string = bio.trim();
    if (!bioTrim) {
      setBioError("Bio is required");
    } else if (bioTrim.length < 10) {
      setBioError("Bio must be more than 10 characters");
    } else {
      setBioError("");
    }
  };

  const handleWhatYouTeachValidation: () => void = function () {
    const whatYouTeachTrim: string = whatYouTeach.trim();
    if (!whatYouTeachTrim) {
      setWhatYouTeachError("Name of school is required");
    } else {
      setWhatYouTeachError("");
    }
  };

  const handleYearsOfWorkingExperienceValidation: () => void = function () {
    const yearsOfWorkingExperienceTrim: string =
      yearsOfWorkingExperience.trim();
    if (!yearsOfWorkingExperienceTrim) {
      setYearsOfWorkingExperienceError("Field of study is required");
    } else {
      setYearsOfWorkingExperienceError("");
    }
  };

  const handleIdNumberValidation: () => void = function () {
    const idNumberTrim: string = idNumber.trim();
    if (!idNumberTrim) {
      setIdNumberError("Id number is required");
    } else {
      setIdNumberError("");
    }
  };
  const handleLevelOfEducationValidation: () => void = function () {
    const levelOfEducationTrim: string = levelOfEducation.trim();
    if (!levelOfEducationTrim) {
      setLevelOfEducationError("Id number is required");
    } else {
      setLevelOfEducationError("");
    }
  };

  const handleFileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Checking if file type is valid
      if (file.type.startsWith("image/")) {
        // Showing a preview of the image
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const imageURL = e.target?.result as string;
          const maxSizeImage: number = 2 * 1024 * 1024;
          if (file && imageURL) {
            if (file.size > maxSizeImage) {
              failedNotification("Image cannot be more than 2MB");
            } else {
              setSelectedFileImage(file);
              setPreviewUrl(imageURL);
            }
          }
        };

        reader.readAsDataURL(file);
      }
    } else {
      failedNotification("Please choose a valid image");
    }
  };

  const handleFileQualificationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setSelectedFileQualification(file);
    } else {
      failedNotification("Please choose a valid image");
    }
  };

  function handleFirstNameOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
    handleFirstNameValidation();
  }

  function handleLastNameOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
    handleLastNameValidation();
  }

  function handleGenderOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGender(e.target.value);
    handleGenderValidation();
  }
  function handlePhoneNumberOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
    handlePhoneValidation();
  }

  function handleAddressOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
    handleAddressValidation();
  }

  function handleDBOOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDob(e.target.value);
    handleDobValidation();
  }

  function handleBioOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBio(e.target.value);
    handleBioValidation();
  }

  function handleYearsOfWorkingExperienceOnChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setYearsOfWorkingExperience(e.target.value);
    handleYearsOfWorkingExperienceValidation();
  }

  function handleWhatYouTeachOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWhatYouTeach(e.target.value);
    handleWhatYouTeachValidation();
  }

  function handleIdNumberOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIdNumber(e.target.value);
    handleIdNumberValidation();
  }

  function handleLevelOfEducationOnChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setLevelOfEducation(e.target.value);
    handleLevelOfEducationValidation();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      handleFirstNameValidation();
      handleLastNameValidation();
      handleGenderValidation();
      handleDobValidation();
      handlePhoneValidation();
      handleAddressValidation();
      handleBioValidation();
      handleYearsOfWorkingExperienceValidation();
      handleWhatYouTeachValidation();
      handleIdNumberValidation();

      if (
        !firstName ||
        !lastName ||
        !gender ||
        !dob ||
        !phone ||
        !address ||
        !bio ||
        !yearsOfWorkingExperience ||
        !selectedFileImage ||
        !selectedFileQualification ||
        !whatYouTeach ||
        !idNumber ||
        !levelOfEducation
      ) {
        return failedNotification("You cannot submit a form with empty fields");
      }

      const imageData: IFileDataImage = {
        filename: selectedFileImage?.name,
        fileSize: selectedFileImage?.size,
        fileType: selectedFileImage?.type,
      };

      const qualificationData: IFileDataQualification = {
        filename: selectedFileQualification?.name,
        fileSize: selectedFileQualification?.size,
        fileType: selectedFileQualification?.type,
      };

      const sendData: IData = {
        email: lecturerEmail,
        firstName,
        lastName,
        gender,
        dob,
        phone,
        address,
        idNumber,
        bio,
        yearsOfWorkingExperience,
        imageProperties: imageData,
        fileProperties: qualificationData,
        whatYouTeach,
        levelOfEducation,
      };

      const res = (
        await axios.post("/api/lecturer/register-account/more-info", sendData)
      ).data;

      const { lecturer } = res;

      if (lecturer.lecturerID) {
        localStorage.setItem("lecturer-token", lecturer.lecturerID);
        successNotification(res.message);
        navigate("/lecturer/dashboard", { replace: true });
      } else {
        failedNotification(res.errorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="more-info-container">
        <section className="bg-white rounded-xl drop-shadow-sm py-5 px-5 md:mt-10">
          <header className="more-info-container__header">
            <h2 className="more-info-container__header__head">
              Lecturer more information
            </h2>
            <p className="more-info-container__header__para">
              Please provide us with more information.
            </p>
          </header>

          <section>
            <form
              onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
                handleSubmit(e)
              }
            >
              <div className="flex justify-center items-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="profile picture"
                    className="rounded-full border-2 h-20 w-20"
                  />
                ) : (
                  <div className="flex relative items-center justify-center rounded-full h-20 w-20 text-white bg-blue-950 text-xl font-bold">
                    <span className="text-5xl">
                      <UserIcon />
                    </span>
                  </div>
                )}
                <div className="relative">
                  <label
                    htmlFor="profile-picture-input"
                    className="flex items-center justify-center drop-shadow-md absolute -left-5 gap-2 custom-file-input-label bg-slate-300 font-medium text-slate-600 py-2 px-3 rounded-full h-10 w-10 hover:cursor-pointer"
                  >
                    <span>
                      <CameraIcon />
                    </span>
                    <span className="text-sm hidden">Upload picture</span>
                  </label>
                  <input
                    type="file"
                    id="profile-picture-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleFileImageChange(e)
                    }
                    className="hidden"
                  />
                </div>
              </div>

              <section className="mt-4">
                <h3 className="text-sm opacity-80">Basic information</h3>
                <div className="flex items-center flex-wrap gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="First name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleFirstNameOnChange(e)
                    }
                    value={firstName}
                    className={`p-[0.4rem] flex-1 outline-none ${
                      firstNameError && "border border-red-500"
                    } bg-slate-200 rounded text-sm`}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleLastNameOnChange(e)
                    }
                    value={lastName}
                    className={`p-[0.4rem] flex-1 outline-none ${
                      lastNameError && "border border-red-500"
                    } bg-slate-200 rounded text-sm`}
                  />
                  <input
                    type="text"
                    placeholder="Identification number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleIdNumberOnChange(e)
                    }
                    value={idNumber}
                    className={`p-[0.4rem] flex-1 ${
                      idNumberError && "border border-red-500"
                    } outline-none bg-slate-200 rounded text-sm`}
                  />
                </div>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <input
                    type="date"
                    placeholder="MM-DD-YYYY"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleDBOOnChange(e)
                    }
                    value={dob}
                    className={`p-[0.4rem] flex-1 text-slate-500  outline-none ${
                      dobError && "border border-red-500"
                    } bg-slate-200 rounded text-sm`}
                  />
                  <input
                    type="text"
                    placeholder="Gander"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleGenderOnChange(e)
                    }
                    value={gender}
                    className={`p-[0.4rem] flex-1 text-slate-500 ${
                      genderError && "border border-red-500"
                    } outline-none bg-slate-200 rounded text-sm`}
                  />
                </div>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handlePhoneNumberOnChange(e)
                    }
                    value={phone}
                    className={`p-[0.4rem] flex-1 text-slate-500 ${
                      phoneError && "border border-red-500"
                    } outline-none bg-slate-200 rounded text-sm`}
                  />
                  <input
                    type="address"
                    placeholder="Address"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleAddressOnChange(e)
                    }
                    value={address}
                    className={`p-[0.4rem] flex-1 text-slate-500 ${
                      addressError && "border border-red-500"
                    } outline-none bg-slate-200 rounded text-sm`}
                  />
                </div>
              </section>

              <section className="mt-4">
                <h3 className="text-sm opacity-80">Education information</h3>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <input
                    type="text"
                    placeholder="Years of work experience"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleYearsOfWorkingExperienceOnChange(e)
                    }
                    value={yearsOfWorkingExperience}
                    className={`p-[0.4rem] flex-1  outline-none ${
                      yearsOfWorkingExperienceError && "border border-red-500"
                    } bg-slate-200 rounded text-sm`}
                  />
                </div>
              </section>

              <section className="mt-4">
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <input
                    type="text"
                    placeholder="Level of teaching"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleLevelOfEducationOnChange(e)
                    }
                    value={levelOfEducation}
                    className={`p-[0.4rem] flex-1  outline-none ${
                      levelOfEducationError && "border border-red-500"
                    } bg-slate-200 rounded text-sm`}
                  />
                  <input
                    type="text"
                    placeholder="What do you teach?"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleWhatYouTeachOnChange(e)
                    }
                    value={whatYouTeach}
                    className={`p-[0.4rem] flex-1  outline-none ${
                      whatYouTeachError && "border border-red-500"
                    } bg-slate-200 rounded text-sm`}
                  />
                </div>
              </section>

              <section className="mt-4">
                <h3 className="text-sm opacity-80 mb-1">Upload certificate</h3>
                <div className="bg-slate-200 w-full h-10 rounded flex items-center justify-center">
                  <label htmlFor="qualification w-full h-full">
                    <span className="text-2xl text-slate-500">
                      <FileIcon />
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="qualification"
                    id="qualification"
                    accept=".pdf"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleFileQualificationChange(e)
                    }
                    className="hidden"
                  />
                </div>
              </section>
              <section className="mt-4">
                <h3 className="text-sm opacity-80">Profile information</h3>
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <textarea
                    cols={5}
                    rows={3}
                    placeholder="Enter your bio"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleBioOnChange(e)
                    }
                    value={bio}
                    className={`p-[0.4rem] flex-1 ${
                      bioError && "border border-red-500"
                    } outline-none bg-slate-200 rounded text-sm`}
                  ></textarea>
                </div>
              </section>
              <section className="my-2">
                <p className="text-xs opacity-60 max-w-[34rem]">
                  By continuing you agree to our{" "}
                  <span className="text-blue-500">terms</span> and{" "}
                  <span className="text-blue-500">conditions</span> please read
                  our <span className="text-blue-500">terms</span> and{" "}
                  <span className="text-blue-500">conditions</span>
                </p>
              </section>
              <button
                type="submit"
                className="bg-blue-950 flex-1 text-center text-white rounded px-[0.4rem] py-[0.5rem] text-sm w-full"
              >
                Create an account
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};
