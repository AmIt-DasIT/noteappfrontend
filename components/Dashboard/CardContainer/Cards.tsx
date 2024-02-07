import { CardType } from "@/types";
import { Card, CardContent, Typography } from "@mui/joy";
import Link from "next/link";
import React from "react";

const Cards = ({ data, props }: CardType) => {
  const { id, description, title } = data;
  return (
    <Link href={`card/${id}`}>
      <Card {...props} key={id}>
        <CardContent>
          <Typography level="title-lg">{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
export default Cards;
