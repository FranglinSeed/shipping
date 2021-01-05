export interface Product {
  id: number;
  title: string;
  price: number;
  weight: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Computer",
    price: 1000,
    weight: 500,
    description: "This computer is made by Japan",
  },
  {
    id: 2,
    title: "Chair",
    price: 800,
    weight: 300,
    description: "This chair is made by Africa",
  },
  {
    id: 3,
    title: "House",
    price: 12000,
    weight: 10000,
    description: "This house is in France",
  },
  {
    id: 4,
    title: "Milk",
    price: 200,
    weight: 50,
    description: "This milk is for children",
  },
];
