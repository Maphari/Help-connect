import { Request, Response } from "express";
import mongoose from "mongoose";

const Video: mongoose.Model<any, any> = mongoose.model("Video");
const Lecturer: mongoose.Model<any, any> = mongoose.model("Lecturer");

export async function HttpCreateVideoController(req: Request, res: Response) {
  try {
    const {
      meetingId,
      meetingTeacherFirstName,
      meetingTeacherLastName,
      meetingTeacherEmail,
      meetingTeacherPhone,
    } = req.body;
    const lecturer = await Lecturer.findOne({ email: meetingTeacherEmail });


    if (lecturer && meetingId) {
      const newVideoData = new Video({
        meetingId,
        meetingCreatedBy: lecturer._id,
        meetingTeacherFirstName,
        meetingTeacherLastName,
        meetingTeacherEmail,
        meetingTeacherPhone,
      });

      await newVideoData.save();

      return res.status(200).json({
        data: newVideoData,
      });
    } else {
      return res.json({ message: "Something went wrong😓" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
