import { useRef } from "react";
import searchFill from "@iconify/icons-eva/search-fill";
import trash2Fill from "@iconify/icons-eva/trash-2-fill";
import roundFilterList from "@iconify/icons-ic/round-filter-list";
import { Icon } from "@iconify/react";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
// material
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import brands from "src/_mock/brand";

import Filter from "./Filter";

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 256,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { width: 320, boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

// ----------------------------------------------------------------------

const TableToolbar = ({ numSelected, filterName, onFilterName }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  const brandOptions = brands && brands.map((item) => ({ id: item.id, label: item.name }));

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: isLight ? "primary.main" : "text.primary",
          bgcolor: isLight ? "primary.lighter" : "primary.dark",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Filter />
        </Stack>
      )}

      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <Icon icon={trash2Fill} />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default TableToolbar;
