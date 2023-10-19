import { ReactNode } from "react";

export interface IContext {
  children: ReactNode;
}

export interface IGetUserData {
  token: string | null;
}

export const ContextDataStructure = {
  student: {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    idNumber: "",
    bio: "",
    fieldOfStudy: "",
    levelOfEducation: "",
    nameOfSchool: "",
    imageProperties: null,
  },
  lecturer: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    idNumber: "",
    bio: "",
    yearsOfWorkingExperience: "",
    imageProperties: null,
    whatYouTeach: "",
    levelOfEducation: "",
  },
  isLoading: false,
};

export interface IDataObject {
  student: {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    idNumber?: string;
    bio?: string;
    fieldOfStudy?: string;
    levelOfEducation?: string;
    nameOfSchool?: string;
    imageProperties?: File | null;
  };
  lecturer: {
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    address?: string;
    idNumber?: string;
    bio?: string;
    yearsOfWorkingExperience?: string;
    imageProperties?: File | null;
    whatYouTeach?: string;
    levelOfEducation?: string;
  };
  isLoading: boolean;
}
