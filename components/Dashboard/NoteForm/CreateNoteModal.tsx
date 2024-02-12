import {
  Modal,
  ModalDialog,
  DialogTitle,
  Stack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Input,
} from "@mui/joy";

export default function CreateNoteModal({
  open,
  setOpen,
  formDataHandler,
  submitHandler,
}: any) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <DialogTitle>Create Note</DialogTitle>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input autoFocus required name="title" onChange={formDataHandler} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              minRows={4}
              required
              name="description"
              onChange={formDataHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input required name="author" onChange={formDataHandler} />
          </FormControl>
          <Button type="submit" onClick={submitHandler} variant="soft">
            Submit
          </Button>
        </Stack>
      </ModalDialog>
    </Modal>
  );
}
