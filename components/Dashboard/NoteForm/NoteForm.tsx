"use client";

import {
  Button,
  Modal,
  Sheet,
  ModalClose,
  Typography,
  Textarea,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  ModalDialog,
  Stack,
  FormHelperText,
} from "@mui/joy";
import React from "react";

export default function NoteForm() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<{}>({});
  console.log(formData);
  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        // startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        Create Note
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create Note</DialogTitle>
          {/* <DialogContent>Fill in the information of the project.</DialogContent> */}
          <form
            onSubmit={(event: any) => {
              event.preventDefault();
              //   setFormData({
              //     ...formData,
              //     [event.target.name]: event.target.value,
              //   });
              //   console.log(event);
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl error>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required name="note_name" error />
                <FormHelperText>Opps! something is wrong.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required name="description" />
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
