"use client";

import { Stack } from "@mui/joy";
import React from "react";
import Cards from "./Cards";
import { CardDataType } from "@/types";

export default function CardContainer() {
  const [data, setData] = React.useState<CardDataType>();

  React.useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}books`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle data
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Stack
      display={"grid"}
      gridTemplateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
      gap={3}
      mt={3}
    >
      {Array.isArray(data) &&
        data?.map(
          (cardData: {
            body?: string | undefined;
            id?: string | undefined;
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
