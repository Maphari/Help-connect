import React, { useState } from "react";
import { toast } from "react-toastify";
import { Mail, StudentIcon, LockIcon,Profile, Link, SetUsername, SetEmail } from "./student.imports";

import { useDispatch } from "react-redux";

import axios, { AxiosError } from "axios";


interface IUserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const StudentRegister: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const dispatch = useDispatch()

  const successNotification: (message: string) => void = function (
    message: string
  ) {
    toast.success(message, {
      toastId: "success-notification",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const infoNotification: (message: string) => void = function (
    message: string
  ) {
    toast.info(message, {
      toastId: "success-notification",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const failedNotification: (message: string) => void = function (
    message: string
  ) {
    toast.error(message, {
      toastId: "error-notification",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const usernameValidationHandler: () => void = function () {
    if (username.trim().length < 5) {
      setUsernameError("username must be more than 5 characters");
    } else if (!username.trim()) {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
  };

  const emailValidatorHandler: () => void = function () {
    const emailRegex: RegExp | boolean =
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.trim());

    if (emailRegex === false) {
      setEmailError("Please enter valid email");
    } else if (!email.trim()) {
      setEmailError("Please enter email");
    } else {
      setEmailError("");
    }
  };

  const passwordValidatorHandler: () => void = function () {
    if (password.trim().length < 8) {
      setPasswordError("Password must be more than 8 characters");
    } else if (!password.trim()) {
      setPasswordError("Please Enter password");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordValidatorHandler: () => void = function () {
    if (password.trim() != confirmPassword.trim()) {
      setConfirmPasswordError("Password does'nt match");
    } else if (!confirmPassword.trim()) {
      setConfirmPasswordError("Please enter password");
    } else {
      setConfirmPasswordError("");
    }
  };

  const submitDataHandler: (e: React.FormEvent<HTMLFormElement>) => void =
    async function (e: React.FormEvent<HTMLFormElement>) {
      try {
        e.preventDefault();

        usernameValidationHandler();
        emailValidatorHandler();
        passwordValidatorHandler();
        confirmPasswordValidatorHandler();

        const userData: IUserData = {
          username,
          email,
          password,
          confirmPassword,
        };

        if (
          usernameError.trim() ||
          emailError.trim() ||
          passwordError.trim() ||
          confirmPasswordError.trim()
        ) {
          // Handle validation errors
          failedNotification("Please fix the validation errors.");
        } else {
          const res = (await axios.post("/api/register-account", userData))
            .data;

          console.log(res);
          // if account exist we want to redirect the user to login form
          if (res.hasAccount) {
            infoNotification(res.message);
            window.location.href = "/account/login-account";
            // if account doesn't exist then we welcome the user to the dash board
          } else if (!res.hasAccount) {
            successNotification(res.message);
            // saving token to local storage
            localStorage.setItem("student-token", res.studentID)
            // dispatching data to redux store
            dispatch(SetUsername(res.username))
            dispatch(SetEmail(res.email))
            window.location.href = "#";
          } else {
            failedNotification(res.errorMessage);
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError: AxiosError<unknown, unknown> = error as AxiosError;
          const axios_response = axiosError.response;

          if (axios_response) {
            console.log(axios_response);
          }
        } else {
          console.error(error);
        }
      }
    };

  return (
    <>
      <section className="register-container rounded bg-opacity-80 bg-blur-lg bg-slate-300 backdrop-blur-lg">
        <form
          className="py-7 mx-2 px-7 rounded-xl drop-shadow-xl"
          onSubmit={(e) => submitDataHandler(e)}
        >
          <h1 className="text-2xl mb-1 font-bold text-blue-950">
            Register as student
          </h1>
          <p className="opacity-40 text-sm mb-3">
            Please enter your information to proceed
          </p>
          <div className="flex items-start flex-col w-full mb-2">
            <label className="text-sm opacity-50 mb-1" htmlFor="username">
              Username
            </label>
            <div
              className={`flex items-center w-full border ${
                usernameError && "border-red-500"
              } rounded`}
            >
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Profile />
              </span>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                  usernameValidationHandler();
                }}
                value={username}
                id="username"
                type="text"
                placeholder="John Doe"
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
            {usernameError && (
              <span className="text-sm text-red-500 mt-1">{usernameError}</span>
            )}
          </div>
          <div className="flex items-start flex-col w-full mb-2">
            <label className="text-sm opacity-50 mb-1" htmlFor="email">
              Email
            </label>
            <div
              className={`flex items-center w-full border ${
                emailError && "border-red-500"
              } rounded`}
            >
              <span className="px-2  py-[10px] bg-slate-100 rounded-l text-slate-500">
                <Mail />
              </span>
              <input
                id="email"
                type="email"
                placeholder="someone@example.com"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  emailValidatorHandler();
                }}
                value={email}
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
            {emailError && (
              <span className="text-sm text-red-500 mt-1">{emailError}</span>
            )}
          </div>
          <div className="flex items-start flex-col w-full mb-2">
            <label className="text-sm opacity-50 mb-1" htmlFor="password">
              Password
            </label>
            <div
              className={`flex items-center w-full border ${
                passwordError && "border-red-500"
              } rounded`}
            >
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                id="password"
                type="password"
                placeholder="Password must be more than 8 characters"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                  passwordValidatorHandler();
                }}
                value={password}
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
            {passwordError && (
              <span className="text-sm text-red-500 mt-1">{passwordError}</span>
            )}
          </div>
          <div className="flex items-start flex-col w-full mb-2">
            <label
              className="text-sm opacity-50 mb-1"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div
              className={`flex items-center w-full border ${
                confirmPasswordError && "border-red-500"
              } rounded`}
            >
              <span className="px-2 py-[11px] bg-slate-100 rounded-l text-slate-500 text-sm">
                <LockIcon />
              </span>
              <input
                id="confirm-password"
                type="password"
                placeholder="Password must be more than 8 characters"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                className="w-full flex-1 text-sm outline-none px-[3px] py-[8px] bg-slate-100 rounded-r"
              />
            </div>
            <span className="text-sm text-red-500 mt-1">
              {confirmPasswordError && confirmPasswordError}
            </span>
          </div>
          <p className="text-xs opacity-50">
            By registering an account you agree to our{" "}
            <span className="text-blue-600 opacity-100">terms</span> and{" "}
            <span className="text-blue-600 opacity-100">conditions</span>.
            Please read our terms and condition before you continue
          </p>
          <div className="flex mt-2 mb-2 flex-wrap items-center gap-2">
            <button
              type="submit"
              className="transition-all duration-700 ease-linear hover:bg-blue-900 w-full flex  items-center justify-center gap-2 bg-blue-950 text-sm text-white px-[0.4rem] py-[0.5rem] rounded"
            >
              <span>
                <StudentIcon />
              </span>{" "}
              <span> Continue as Student</span>
            </button>
          </div>
          <div className="flex items-center gap-1">
            <Link
              className="transition-all duration-700 ease-linear hover:bg-slate-100 px-[0.4rem] py-[0.5rem] google-login-button text-sm border flex items-center justify-center text-[#333]"
              to="#"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="google-logo"
              />
              Google
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap mt-5 opacity-60 text-sm">
            <p>Already have an account?</p>
            <Link
              className="font-bold text-blue-900"
              to="/student/login-account"
            >
              Log in
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
