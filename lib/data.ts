export type Product = {
  name: string,
  description: string,
  category: string[],
};

export type Inventory = {
  price: number,
  status: 'available' | 'sold' | 'expired',
  expDate: Date,
};

export type Sale = {
  date: Date,
  price: number,
};

export const products: Product[] = [
  {
    name: 'Cocoa Butter',
    description: 'Petroleum Jelly',
    category: ['jelly', 'cosmetics'],
  },
];

export const inventory: Inventory[] = [
  {
    price: 3500,
    status: 'available',
    expDate: new Date(),
  },
];

export const sales: Sale[] = [
  {
    date: new Date(),
    price: 3500,
  },
];