import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../models/models.types';
import dbConnect from '../../../lib/dbConnect';
import productSchema from '../../../models/product';


export default function handler (req: NextApiRequest, res: NextApiResponse<Product[] | string>) {
  const connection  = dbConnect(process.env.MONGODB_URI as string);
  const ProductModel = connection.model('Product', productSchema);
  
  ProductModel.find((err, products) => {
    if (err) {
      res.status(404)
      .send('Error getting products');
      return;
    }
    res.status(200)
    .json(products);
  });
}