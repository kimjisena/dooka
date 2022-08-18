import type { NextApiRequest, NextApiResponse } from 'next';
import { products, type Product } from '../../../lib/data';


export default function handler (req: NextApiRequest, res: NextApiResponse<Product[]>) {

  res.status(200)
    .json(products);
}