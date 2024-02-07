import React from "react";
import { CssVarsProvider, CssBaseline } from "@mui/joy";

type ThemeBox = {
  children: React.ReactNode;
};

export default function ThemeBox({ children }: ThemeBox) {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
