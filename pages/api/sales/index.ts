import type { NextApiRequest, NextApiResponse } from 'next';
import { sales, type Sale } from '../../../lib/data';

export default function handler (req: NextApiRequest, res: NextApiResponse<Sale[]>) {
  
  res.status(200)
    .json(sales);
}