import { CardTypeMap } from "@mui/joy";
export type CardDataType = {
  data: {
    description?: string;
    id?: number;
    title?: string;
    author?: number;
  }[]
};

export interface CardType extends CardTypeMap {
  data: {
    description?: string;
    id?: number;
    title?: string;
    author?: number;
  };
}
