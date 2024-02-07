import { Card, Skeleton, Stack, Typography } from "@mui/joy";
import React from "react";

export default async function CardLoader() {
  return (
    <Stack
      display={"grid"}
      gridTemplateColumns={"repeat(5, minmax(0, 1fr))"}
      gap={3}
      mt={3}
    >
      {[...Array(25)].map((x) => (
        <Card variant="outlined" key={x + 1}>
          <Typography
            sx={{ position: "relative", overflow: "hidden" }}
            level="h1"
            fontSize="xl"
          >
            <Skeleton loading={true}>A heading</Skeleton>
          </Typography>
          <Typography
            level="body-xs"
            sx={{ mt: 1, mb: 2, position: "relative", overflow: "hidden" }}
          >
            <Skeleton loading={true}>HISTORY, PURPOSE AND USAGE</Skeleton>
          </Typography>
        </Card>
      ))}
    </Stack>
  );
}
