import mongoose, { Document, Schema } from "mongoose";

interface IVideo extends Document {
  meetingId: string;
  meetingCreatedBy: typeof Schema.ObjectId;
  meetingTeacherFirstName: string;
  meetingTeacherLastName: string;
  meetingTeacherEmail: string;
  meetingTeacherPhone: string;
}

const videoSchema: mongoose.Schema<IVideo> = new Schema({
  meetingId: {
    type: String,
    required: true,
  },
  meetingCreatedBy: {
    type: Schema.ObjectId,
    ref: "Lecturer",
  },
  meetingTeacherFirstName: {
    type: String,
    required: true,
  },
  meetingTeacherLastName: {
    type: String,
    required: true,
  },
  meetingTeacherEmail: {
    type: String,
    required: true,
  },
  meetingTeacherPhone: {
    type: String,
    required: true,
  },
});

mongoose.model<IVideo>("Video", videoSchema);
