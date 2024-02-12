"use client";

import {
  Button,
  Modal,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  ModalDialog,
  Stack,
  Textarea,
} from "@mui/joy";
import React from "react";
import Add from "@mui/icons-material/Add";
import toast from "react-hot-toast";
import CreateNoteModal from "./CreateNoteModal";

type NoteForm = {
  setApiCall: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NoteForm({ setApiCall }: NoteForm) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<{}>({});

  const formDataHandler = function (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    if (!formData) {
      throw "Please enter some formData";
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formData),
      redirect: "follow",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}books`,
      // @ts-ignore
      requestOptions
    );

    if (!response.ok) {
      toast.error("Somthing Went Wrong.");
      throw "Error occured";
    }

    toast.success("New Note Created Successfully.");
    setApiCall((data) => !data);
    setOpen(!open);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        Create Note
      </Button>
      <CreateNoteModal open={open} setOpen={setOpen} formDataHandler={formDataHandler} submitHandler={submitHandler}  />
    </>
  );
}

    
  