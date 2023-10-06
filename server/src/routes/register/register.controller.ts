import { Request, Response, NextFunction } from "express";
import mongoose, { Document } from "mongoose";
import jwt from "jsonwebtoken";

import { keys } from "../../key/key";
import { handleSessionMiddleware } from "../../middleware/handleSessionMiddleware.middleware";

const Student = mongoose.model("Student");

interface IStudent extends Document {
  studentID: string;
  username: string;
  email: string;
  password: string;
}

async function HttpRegisterUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const student = await Student.findOne({ email });

    if (password !== confirmPassword) {
      return res.status(401).json({
        errorMessage: "password does'nt match",
      });
    }

    if (!student) {
      // create new student
      const newStudent: IStudent = new Student({
        studentID: null,
        username: username,
        email: email,
        password: password,
      });

      // creating jsonwebtoken token
      const studentToken = jwt.sign(
        { userId: newStudent._id },
        keys.JWT_STRING,
        { expiresIn: "24" }
      );

      // assigning token from jwt
      newStudent.studentID = studentToken;

      // setting students session
      if (req.session) {
        req.session.user = {...newStudent};
      }

      // saving student to database
      await newStudent.save();
      // sending back data to client
      return res.status(201).json({
        message: "Student successfully  created account",
        hasAccount: false,
        studentID: newStudent.studentID,
        username: newStudent.username,
        email: newStudent.email,
      });
    } else {
      // if student already exists
      const studentToken = jwt.sign({ userId: student._id }, keys.JWT_STRING, {
        expiresIn: "24",
      });

      student.studentID = studentToken;

      if (req.session) {
        req.session.user = {...student};
      }

      
      return res.json({
        message: "Student already exists",
        hasAccount: true,
      });
    }
  } catch (error: any) {
    return res.status(500).json({ errorMessage: error.message });
  }
}

export { HttpRegisterUserController };
