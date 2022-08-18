import { Schema } from "mongoose";
import { Inventory } from "./models.types";

const inventorySchema = new Schema<Inventory>({
  price: {
    type: Number,
  },
  status: {
    type: String,
  },
  expDate: {
    type: Date,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

export default inventorySchema;