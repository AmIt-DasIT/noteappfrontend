"use client";

import { Box, Stack } from "@mui/joy";
import React from "react";
import Cards from "./Cards";
import { CardDataType } from "@/types";
import NoteForm from "../NoteForm/NoteForm";

export default function CardContainer() {
  const [data, setData] = React.useState<CardDataType>();
  const [apiCall, setApiCall] = React.useState(false);

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
  }, [apiCall]);

  return (
    <Box mt={2}>
      <NoteForm setApiCall={setApiCall} />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={1}
        flexWrap="wrap"
        useFlexGap
        mt={2}
      >
        {Array.isArray(data) &&
          data?.map(
            (
              cardData: {
                description: string;
                id?: string | undefined;
                title?: string | undefined;
                userId?: number | undefined;
              }
            ) => (
              <Cards
                data={cardData}
                props={{ variant: "soft" }}
                defaultComponent={"div"}
                key={cardData.id}
                setApiCall={setApiCall}
              />
            )
          )}
      </Stack>
    </Box>
  );
}
