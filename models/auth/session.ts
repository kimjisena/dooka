import { Schema } from "mongoose";
import { Session } from "../models.types";

const sessionSchema = new Schema<Session>({
  expires: { type: Date },
  sessionToken: { type: String, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export default sessionSchema;