"use client";

import { CardType } from "@/types";
import {
  Card,
  CardContent,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Typography,
  styled,
} from "@mui/joy";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Cards = ({ data, props, setApiCall }: CardType) => {
  const { id, description, title } = data;

  const deleteHandler = (id: string | undefined) => {
    if (!id) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}books?bookID=${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("Something Went Wrong.");
          throw new Error("Network response was not ok");
        }
        toast.success("Notes Deleted Successfully.");
        return response.json();
      })
      .then((data) => {
        // Handle data
        setApiCall((data) => !data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography["body-sm"],
    // textAlign: "center",
    fontWeight: theme.fontWeight.md,
    // color: theme.vars.palette.text.secondary,
    // border: "1px solid",
    // borderColor: theme.palette.divider,
    // padding: theme.spacing(0.2),
    // borderRadius: theme.radius.lg,
    flexGrow: 1,
    minWidth: 240,
  }));

  return (
    <Item>
      <Card {...props}>
        <CardContent>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link href={`card/${id}`} style={{ textDecoration: "none" }}>
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
    </Item>
  );
};
export default Cards;
