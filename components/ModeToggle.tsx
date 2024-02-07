"use client"

import { useColorScheme, Button } from "@mui/joy";
import React from "react";

export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
    >
      {mode === "dark" ? "Turn light" : "Turn dark"}
    </Button>
  );
}
