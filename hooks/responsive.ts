import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function useMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"));
}
