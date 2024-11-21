export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  product: {
    name: string;
    image: string;
  };
}
