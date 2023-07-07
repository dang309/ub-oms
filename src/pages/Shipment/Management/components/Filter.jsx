import { useState } from "react";
import { useRef } from "react";
import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  List,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import ArrowPopover from "src/components/ArrowPopover";
import Iconify from "src/components/Iconify";

import CategoricalFilter from "./CategoricalFilter";
import QuantitativeFilter from "./QuantitativeFilter";

const filterOptions = [
  {
    id: 1,
    label: "Cty vận chuyển",
    type: "categorization",
  },
  {
    id: 2,
    label: "Trang thai",
    type: "categorization",
  },
  {
    id: 3,
    label: "Ngày tạo",
    type: "categorization",
  },
  {
    id: 4,
    label: "Trạng thái nhận hàng",
    type: "categorization",
  },
  {
    id: 5,
    label: "Trạng thái nhập kho",
    type: "categorization",
  },
  {
    id: 6,
    label: "Trạng thái phiếu giao hàng",
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
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          ref={anchorRef}
          variant="outlined"
          startIcon={<Iconify icon="material-symbols:filter-alt-outline" />}
          onClick={handleOpen}
        >
          Thêm bộ lọc
        </Button>
        <DatePicker label="Ngày bắt đầu" />
        <DatePicker label="Ngày kết thúc" />
      </Stack>
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
