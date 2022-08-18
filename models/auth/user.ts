import { Schema } from "mongoose";
import { User } from "../models.types";

const userSchema = new Schema<User>({
  name: { type: String },
  email: { type: String, unique: true },
  emailVerified: { type: Date },
  image: { type: String },
});

export default userSchema;