import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IStudent extends Document {
  studentID: string;
  username: string;
  email: string;
  password: string;
}

const studentSchema: Schema<IStudent> = new Schema(
  {
    studentID: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      minlength: [5, "Username must be more than 5 characters"],
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
      validate: {
        validator: (email: string) => {
          return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be more than 8 characters"],
      validate: {
        validator: (password: string) => {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
            password
          );
        },
        message: "Please enter a valid password",
      },
    },
  },
  { timestamps: true }
);

studentSchema.pre("save", function (next) {
  const student = this;

  // only hash the password if it has been modified or is new
  if (!student.isModified("password")) return next();

  // generate salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash password
    bcrypt.hash(student.password, salt, function (err, hash) {
      if (err) return next(err);
        
    //   return hash password
      student.password = hash
      next()
    });
  });
});

mongoose.model<Schema<IStudent>>("Student", studentSchema);
