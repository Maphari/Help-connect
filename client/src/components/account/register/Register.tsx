import React, { useState } from "react";

import { RiUserFill as Profile } from "react-icons/ri";
import { IoMail as Mail } from "react-icons/io5";
import { BsFillTelephoneFill as TelIcon } from "react-icons/bs";
import { BiSolidLockAlt as LockIcon } from "react-icons/bi";

export const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [mobileNumberError, setMobileNumberError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const usernameValidationHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = function (e: React.ChangeEvent<HTMLInputElement>) {
    const usernameRegex: RegExp = /^[a-zA-Z0-9_]*$/;

    if (!usernameRegex.test(username.trim())) {
      setUsernameError("Please enter a valid username");
    } else {
      setUsernameError("");
      setUsername(e.target.value);
    }
  };

  const emailValidatorHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = function (e: React.ChangeEvent<HTMLInputElement>) {
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
      setEmail(e.target.value);
    }
  };

  const mobileNumberValidatorHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = function (e: React.ChangeEvent<HTMLInputElement>) {
    if (mobileNumber.length < 10 || Number(mobileNumber.trim())) {
      setMobileNumberError("Please enter valid mobile number");
    } else {
      setMobileNumberError("");
      setMobileNumber(e.target.value);
    }
  };

  const passwordValidatorHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = function (e: React.ChangeEvent<HTMLInputElement>) {
    const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password.trim())) {
      setPasswordError("Password must be more than 8 characters");
    } else {
      setPasswordError("");
      setPassword(e.target.value);
    }
  };

  const confirmPasswordValidatorHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void = function (e: React.ChangeEvent<HTMLInputElement>) {
    const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password.trim())) {
      setConfirmPasswordError("Password must be more than 8 characters");
    } else if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError("Password doesn't match");
    } else {
      setConfirmPasswordError("");
      setConfirmPassword(e.target.value);
    }
  };

  return (
    <>
      <section className="register-container rounded">
        <form className="py-7 px-7 rounded-xl drop-shadow-xl">
          <h1 className="text-2xl mb-1 font-bold text-blue-950">
            Register account
          </h1>
          <p className="opacity-40 text-sm mb-3">
            Please enter your information to proceed
          </p>
          <div className="flex items-start flex-col w-full mb-3">
            <label className="text-sm opacity-50 mb-1" htmlFor="username">
              Username
            </label>
            <div className="flex items-center w-full">
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Profile />
              </span>
              <input
                onChange={(e) => usernameValidationHandler(e)}
                value={username}
                id="username"
                type="text"
                placeholder="John Doe"
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
          </div>
          <div className="flex items-start flex-col w-full mb-3">
            <label className="text-sm opacity-50 mb-1" htmlFor="email">
              Email
            </label>
            <div className="flex items-center w-full">
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Mail />
              </span>
              <input
                onChange={(e) => emailValidatorHandler(e)}
                value={email}
                id="email"
                type="email"
                placeholder="someone@example.com"
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
          </div>
          <div className="flex items-start flex-col w-full mb-3">
            <label className="text-sm opacity-50 mb-1" htmlFor="mobile">
              Mobile Number
            </label>
            <div className="flex items-center w-full">
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <TelIcon />
              </span>
              <input
                onChange={(e) => mobileNumberValidatorHandler(e)}
                value={mobileNumber}
                id="mobile"
                type="tel"
                placeholder="+27 71 123 1234"
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
          </div>
          <div className="flex items-start flex-col w-full mb-3">
            <label className="text-sm opacity-50 mb-1" htmlFor="password">
              Password
            </label>
            <div className="flex items-center w-full">
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                onChange={(e) => passwordValidatorHandler(e)}
                value={password}
                id="password"
                type="password"
                placeholder="Password must be more than 8 characters"
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
          </div>
          <div className="flex items-start flex-col w-full mb-3">
            <label
              className="text-sm opacity-50 mb-1"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="flex items-center w-full">
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                onChange={(e) => confirmPasswordValidatorHandler(e)}
                value={confirmPassword}
                id="confirm-password"
                type="password"
                placeholder="Password must be more than 8 characters"
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
          </div>
          <p className="text-xs opacity-50">
            By registering an account you agree to our{" "}
            <span className="text-blue-600 opacity-100">terms</span> and{" "}
            <span className="text-blue-600 opacity-100">conditions</span>.
            Please read our terms and condition before you continue
          </p>
          <div className="flex items-center gap-1">
            <button
              type="submit"
              className="w-full bg-blue-950 text-white mt-3 p-[0.4rem] rounded"
            >
              Continue registering
            </button>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white mt-3 p-[0.4rem] rounded"
            >
              Continue as a lecturer
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
