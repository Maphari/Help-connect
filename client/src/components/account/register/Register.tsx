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
  ) => void = function () {
  
    if (username.trim().length < 5) {
      setUsernameError("Please enter a valid username");
    } else {
      setUsernameError("");
    }
  };

  const emailValidatorHandler: (
    
  ) => void = function () {
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email.trim()) || !email) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const mobileNumberValidatorHandler: (
  ) => void = function () {
    if (mobileNumber.length < 10 || Number(mobileNumber.trim()) || !mobileNumber) {
      setMobileNumberError("Please enter valid mobile number");
    } else {
      setMobileNumberError("");
    }
  };

  const passwordValidatorHandler: (
  ) => void = function () {
    const passwordRegex: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password) || !password) {
      setPasswordError("Password must be more than 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordValidatorHandler: (
  ) => void = function () {

    if (password === confirmPassword || !confirmPassword) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Password must be more than 8 characters");
    }
  };


  const submitDataHandler: (e: React.FormEvent<HTMLFormElement>) => void = function(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      if(!usernameError || !emailError || !mobileNumberError || !passwordError || !confirmPasswordError)
        console.log(`everything went well ${username}, ${email}, ${mobileNumber}, ${password}, ${confirmPassword}`);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="register-container rounded">
        <form className="py-7 px-7 rounded-xl drop-shadow-xl" onSubmit={(e) => submitDataHandler(e)}>
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
            <div className={`flex items-center w-full border ${usernameError && 'border-red-500'} rounded`}>
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Profile />
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value)
                  usernameValidationHandler()
                }}
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
            <div className={`flex items-center ${emailError && 'border-red-500'} w-full`}>
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Mail />
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value)
                  emailValidatorHandler()
                }}
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
            <div className={`flex items-center w-full ${mobileNumberError && 'border-red-500'}`}>
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <TelIcon />
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setMobileNumber(e.target.value)
                  mobileNumberValidatorHandler()
                }}
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
            <div className={`flex items-center w-full ${passwordError && 'border-red-500'}`}>
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value)
                  passwordValidatorHandler()
                }}
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
            <div className={`flex items-center w-full ${confirmPasswordError && 'border-red-500'}`}>
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setConfirmPassword(e.target.value)
                  confirmPasswordValidatorHandler()
                }}
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
