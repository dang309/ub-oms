import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { Icon } from "@iconify/react";
import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
// material
import { alpha, styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import Iconify from "src/components/Iconify";
import { useCollapseDrawer } from "src/hooks";

import AccountPopover from "./AccountPopover";
import LanguagePopover from "./LanguagePopover";
import NotificationsPopover from "./NotificationsPopover";
import Searchbar from "./Searchbar";
import ToggleTheme from "./ToggleTheme";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 256;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  width: '100%',
  alignSelf: 'flex-end'
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

const Header = ({ onOpenSidebar }) => {
  return (
    <RootStyle position="static">
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <ToggleTheme />
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};

Header.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default Header;
