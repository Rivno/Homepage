export type CARD = {
  title: string;
  image: string;
  rating: number;
  price: number;
};

export type CARD_LONG = {
  description: string;
} & CARD;
