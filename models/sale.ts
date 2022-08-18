import { Schema } from "mongoose";
import { Sale } from "./models.types";

const saleSchema = new Schema<Sale>({
  date: {
    type: Date,
  },
  price: {
    type: Number,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

export default saleSchema;