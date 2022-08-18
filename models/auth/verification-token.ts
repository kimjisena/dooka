import { Schema } from "mongoose";
import { VerificationToken } from "../models.types";

const verificationTokenSchema = new Schema<VerificationToken>({
  token: { type: String },
  expires: { type: Date },
  identifier: { type: String },
});

export default verificationTokenSchema;