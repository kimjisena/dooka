import { Schema } from "mongoose";
import { Product } from "./models.types";

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: [String],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default productSchema;