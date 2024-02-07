

import * as React from "react";
import Box from "@mui/joy/Box";
import CardLoader from "./CardContainer/CardLoader";
import ThemeBox from "../ThemeBox";
import NoteForm from "./NoteForm/NoteForm";
import { Stack } from "@mui/joy";
import { Toaster } from "react-hot-toast";
import { CardDataType } from "@/types";

const ModeSwitcher = React.lazy(() => import("../ModeToggle"));
const CardContainer = React.lazy(
  () => import("../Dashboard/CardContainer/CardContainer")
);

export default async function Dashboard() {
  

 

  return (
    <ThemeBox>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Box
        sx={{
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          p: 2,
        }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <React.Suspense fallback={<>Loading...</>}>
            <ModeSwitcher />
          </React.Suspense>
          <NoteForm />
        </Stack>
        <React.Suspense fallback={<CardLoader />}>
          <CardContainer />
        </React.Suspense>
      </Box>
    </ThemeBox>
  );
}
