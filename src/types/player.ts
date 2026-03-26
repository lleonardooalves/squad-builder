export type PlayerPosition = "GK" | "DEF" | "MID" | "ATT";

export type Player = {
  id: string;
  name: string;
  team: string;
  position: PlayerPosition;
  price: number;
  rating: number;
  image: string;
};
