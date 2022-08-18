import type { NextApiRequest, NextApiResponse } from 'next';
import { inventory, type Inventory } from '../../../lib/data';

export default function handler (req: NextApiRequest, res: NextApiResponse<Inventory[]>) {
  
  res.status(200)
    .json(inventory);
}