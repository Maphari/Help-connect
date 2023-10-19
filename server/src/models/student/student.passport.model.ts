import mongoose, { Document, Schema } from "mongoose";

interface IStudentAuth extends Document {
  studentID: string;
  profilePicture: string;
  fullNames: string;
  username: string;
  email: string;
}

const StudentAuthSchema: mongoose.Schema<IStudentAuth> = new Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    fullNames: {
      type: String,
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email: string) => {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
        },
        message: "Please enter a valid email address",
      },
    },
  },
  { timestamps: true }
);


mongoose.model("StudentGoogle", StudentAuthSchema)
