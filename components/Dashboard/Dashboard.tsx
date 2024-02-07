import * as React from "react";
import Box from "@mui/joy/Box";
import CardLoader from "./CardContainer/CardLoader";
import ThemeBox from "../ThemeBox";
import { getAllPosts } from "@/lib/posts";
import NoteForm from "./NoteForm/NoteForm";
import { Stack } from "@mui/joy";

const ModeSwitcher = React.lazy(() => import("../ModeToggle"));
const CardContainer = React.lazy(
  () => import("../Dashboard/CardContainer/CardContainer")
);

export default async function Dashboard() {
  const data = await getAllPosts();

  return (
    <ThemeBox>
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
          <CardContainer data={data} />
        </React.Suspense>
      </Box>
    </ThemeBox>
  );
}
