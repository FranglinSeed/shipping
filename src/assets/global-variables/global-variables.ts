export interface Product {
  title: string;
  price: number;
  weight: number;
  description: string;
}

export const products: Product[] = [
  {
    title: "Computer",
    price: 1000,
    weight: 500,
    description: "This computer is made by Japan",
  },
  {
    title: "Chair",
    price: 800,
    weight: 300,
    description: "This chair is made by Africa",
  },
  {
    title: "House",
    price: 12000,
    weight: 10000,
    description: "This house is in France",
  },
  {
    title: "Milk",
    price: 200,
    weight: 50,
    description: "This milk is for children",
  },
];
