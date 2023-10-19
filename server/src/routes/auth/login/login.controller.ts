import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Student = mongoose.model("Student");

export async function HttpLoginUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });

    if (!student) {
      return res
        .status(401)
        .json({ message: "User is not found!😥", hasAccount: false });
    }

    const passwordMatch = bcrypt.compare(password, student.password);

    if (!passwordMatch) {
      return res.json({
        errorMessage: "Incorrect email or password😥",
      });
    }

    if (req.session) {
      req.session.user = { ...student };
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 3)); // wait for the session to be saved before sending response back
    }

    return res.status(200).json({
      message: "You have successfully logged in 😁",
      hasAccount: true,
      student,
    });
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal server error" });
  }
}
