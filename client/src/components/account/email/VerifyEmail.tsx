import React from "react";
import { RootState } from "../../../redux/store/student.store"; 
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export const VerifyEmail: React.FC = () => {
  const userData = useSelector((state: RootState) => state.student)
  const navigate = useNavigate()

  const goToVerify: ()=> void = () => {
    navigate("./verify")
  }

  return (
    <section className="bg-opacity-80 h-screen w-full flex items-center justify-center">
      <section className="bg-white py-5 px-6 rounded drop-shadow-lg">
        <header className="mb-6">
          <h1 className="text-xl font-semibold text-blue-950">
            Please verify this email address
          </h1>
          <p className="text-sm opacity-50">
            Please know that we are doing this for security reasons
          </p>
        </header>
        <section className="flex flex-col gap-1">
          <p className="opacity-70 mb-2">Hi {userData.username}</p>
          <p className="opacity-70 mb-2">Welcome to help connect 😎!</p>
          <p className="opacity-90 mb-3">Please check you <span className="text-blue-950 opacity-100">email inbox</span> to verify your email address</p>
          <p className="opacity-90">From the team</p>
          <p className="opacity-90">Help connect support team</p>
        </section>
        <section className="mt-5">
          <button type="submit" className="bg-blue-950 text-white p-2 rounded text-sm" onClick={goToVerify}>Verify email</button>
        </section>
      </section>
    </section>
  );
};
