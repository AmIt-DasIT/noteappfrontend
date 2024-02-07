"use client";

import { createNote } from "@/lib/posts";
import {
  Button,
  Modal,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  ModalDialog,
  Stack,
} from "@mui/joy";
import React from "react";

export default function NoteForm() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<{}>({});

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log(formData);

  const submitHandler = async () => {
    await createNote(formData);
  };

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Create Note
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create Note</DialogTitle>
          <form
            onSubmit={async (event: any) => {
              event.preventDefault();
              await submitHandler();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  autoFocus
                  required
                  name="title"
                  onChange={formDataHandler}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required name="description" onChange={formDataHandler} />
              </FormControl>
              <FormControl>
                <FormLabel>Author</FormLabel>
                <Input
                  autoFocus
                  required
                  name="author"
                  onChange={formDataHandler}
                />
              </FormControl>
              <Button type="submit" variant="outlined" color="neutral">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
