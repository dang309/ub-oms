import { useState } from "react";
import { useRef } from "react";
import {
  Select,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  List,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import ArrowPopover from "src/components/ArrowPopover";
import Iconify from "src/components/Iconify";

import CategoricalFilter from "./CategoricalFilter";
import QuantitativeFilter from "./QuantitativeFilter";

const filterOptions = [
  {
    id: 1,
    label: "Kho",
    type: "categorization",
  },
  {
    id: 2,
    label: "Ton",
    type: "quantitativeness",
  },
  {
    id: 3,
    label: "Loai san pham",
    type: "categorization",
  },
  {
    id: 4,
    label: "San pham",
    type: "categorization",
  },
  {
    id: 5,
    label: "Nha cung cap",
    type: "categorization",
  },
];

const Filter = () => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectFilter, setSelectedFilter] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        ref={anchorRef}
        variant="contained"
        size="small"
        startIcon={<Iconify icon="material-symbols:filter-alt-outline" />}
        onClick={handleOpen}
      >
        Thêm bộ lọc
      </Button>
      <ArrowPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 256, p: 2 }}>
        <Stack direction="column" spacing={1}>
          <Select size="small" value={selectFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            {filterOptions &&
              filterOptions.map((option, index) => {
                return (
                  <MenuItem key={option.id} value={index}>
                    {option.label}
                  </MenuItem>
                );
              })}
          </Select>

          {filterOptions[selectFilter].type === "categorization" && <CategoricalFilter />}

          {filterOptions[selectFilter].type === "quantitativeness" && <QuantitativeFilter />}
        </Stack>
      </ArrowPopover>
    </>
  );
};

export default Filter;
