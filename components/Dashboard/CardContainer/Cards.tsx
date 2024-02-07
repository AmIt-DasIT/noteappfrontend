"use client";

import { CardType } from "@/types";
import {
  Card,
  CardContent,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/joy";
import Link from "next/link";
import React from "react";

const Cards = ({ data, props }: CardType) => {
  const { id, description, title } = data;

  const deleteHandler = (id: string | undefined) => {
    if (!id) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}books?bookID=${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Card {...props} key={id}>
      <CardContent>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link href={`card/${id}`}>
            <Typography level="title-lg">{title}</Typography>
          </Link>
          <Dropdown>
            <MenuButton variant="plain" sx={{ width: "fit-content" }}>
              :
            </MenuButton>
            <Menu>
              <MenuItem color="danger" onClick={() => deleteHandler(id)}>
                Delete
              </MenuItem>
            </Menu>
          </Dropdown>
        </Stack>
      </CardContent>
      <Typography>{description}</Typography>
    </Card>
  );
};
export default Cards;
