import { CardTypeMap } from "@mui/joy";
export type CardDataType = {
  data: {
    description?: string;
    id?: string;
    title?: string;
    author?: number;
  }[]
};

export interface CardType extends CardTypeMap {
  data: {
    description: string;
    id?: string;
    title?: string;
    author?: number;
  };
  setApiCall: React.Dispatch<React.SetStateAction<boolean>>
}
