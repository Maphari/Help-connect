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
    imageProperties: {
      filename: "",
      fileSize: "",
      fileType: "",
      fileData: "",
    },
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
    imageProperties: {
      filename: "",
      fileSize: "",
      fileType: "",
      fileData: "",
    },
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
    imageProperties?: {
      filename: string;
      fileSize: string;
      fileType: string;
      fileData: string;
    };
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
    imageProperties?: {
      filename: string;
      fileSize: string;
      fileType: string;
      fileData: string;
    };
    whatYouTeach?: string;
    levelOfEducation?: string;
  };
  isLoading: boolean;
}
