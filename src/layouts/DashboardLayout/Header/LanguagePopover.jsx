import { useMemo, useState } from "react";
import { Box, IconButton, MenuItem, Popover, Stack } from "@mui/material";
// @mui
import { alpha } from "@mui/material/styles";

import { MIconButton } from "src/components/@material-extend";
import { useLocales } from "src/hooks";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "ko",
    label: "Korean",
    icon: "/assets/icons/korean-flag.svg",
  },
  {
    value: "en",
    label: "English",
    icon: "/assets/icons/usa-flag.svg",
  },
];

// ----------------------------------------------------------------------

const LanguagePopover = () => {
  const { currentLang, onChangeLang } = useLocales();

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleselectlocale = (locale) => {
    onChangeLang(locale);
    handleClose();
  };

  return (
    <>
      <MIconButton
        size="large"
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img
          src={currentLang.icon}
          alt={currentLang.label}
          width={24}
          height={24}
        />
      </MIconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        disableScrollLock
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleselectlocale(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export default LanguagePopover;
