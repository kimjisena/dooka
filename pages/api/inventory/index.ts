import type { NextApiRequest, NextApiResponse } from 'next';
import { Inventory } from '../../../models/models.types';
import dbConnect from '../../../lib/dbConnect';
import inventorySchema from '../../../models/inventory';

export default function handler (req: NextApiRequest, res: NextApiResponse<Inventory[] | string>) {
  const connection  = dbConnect(process.env.MONGODB_URI as string);
  const InventoryModel = connection.model('Inventory', inventorySchema);
  
  InventoryModel.find((err, inventory) => {
    if (err) {
      res.status(404)
      .send('Error getting inventory');
      return;
    }
    res.status(200)
    .json(inventory);

  });
}