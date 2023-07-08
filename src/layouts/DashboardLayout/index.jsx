import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
// material
import { styled, useTheme } from "@mui/material/styles";

// hooks
import useCollapseDrawer from "src/hooks/useCollapseDrawer";

//
import Header from "./Header";
import Sidebar from "./Sidebar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 48;
const APP_BAR_DESKTOP = 64;

const RootStyle = styled("main")({
  display: "flex",
  overflow: "hidden",
  height: "100%",
});

const MainStyle = styled("section")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  paddingBottom: "64px",
}));

// ----------------------------------------------------------------------

const DashboardLayout = () => {
  const theme = useTheme();
  const { collapseClick } = useCollapseDrawer();
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

      <Stack
        direction="column"
        spacing={4}
        sx={{
          maxWidth: '100%',
          flexGrow: 1,
          ...(collapseClick && {
            ml: "102px",
          }),
        }}
      >
        <Header onOpenSidebar={() => setOpen(true)} />

        <MainStyle
          sx={{
            transition: theme.transitions.create("margin", {
              duration: theme.transitions.duration.complex,
            }),
          }}
        >
          <Outlet />
        </MainStyle>
      </Stack>
    </RootStyle>
  );
};

export default DashboardLayout;
