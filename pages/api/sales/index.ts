import type { NextApiRequest, NextApiResponse } from 'next';
import { Sale } from "../../../models/models.types";
import dbConnect from '../../../lib/dbConnect';
import saleSchema from '../../../models/sale';

export default function handler (req: NextApiRequest, res: NextApiResponse<Sale[] | string>) {
  const connection  = dbConnect(process.env.MONGODB_URI as string);
  const SaleModel = connection.model('Sale', saleSchema);
  
  SaleModel.find((err, sales) => {
    if (err) {
      res.status(404)
      .send('Error getting sales');
      return;
    }
    res.status(200)
    .json(sales);
    
  });
}