import { Stack } from "@mui/joy";
import React from "react";
import Cards from "./Cards";
import { CardDataType } from "@/types";

export default async function CardContainer({ data }: CardDataType) {
  return (
    <Stack
      display={"grid"}
      gridTemplateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
      gap={3}
      mt={3}
    >
      {data?.map(
        (cardData: {
          body?: string | undefined;
          id?: number | undefined;
          title?: string | undefined;
          userId?: number | undefined;
        }) => (
          <Cards
            data={cardData}
            props={{ variant: "soft" }}
            defaultComponent={"div"}
            key={cardData.id}
          />
        )
      )}
    </Stack>
  );
}
