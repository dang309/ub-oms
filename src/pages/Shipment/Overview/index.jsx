import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { sentenceCase } from "change-case";
import { filter } from "lodash";

import rows from "src/_mock/products";
import { UserAPI } from "src/api";
import { BookingCheckIn, BookingCheckOut, BookingTotal } from "src/components/_dashboard/general-booking";
import ConfirmationDialog from "src/components/dialogs/ConfirmationDialog";
import EmptyContent from "src/components/EmptyContent";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Iconify from "src/components/Iconify";
import Label from "src/components/Label";
import Page from "src/components/Page";
import { useEventBus } from "src/hooks";

import StatisticBoxes from "./components/StatisticBoxes";
import COD from "./components/COD";
import { PATH_DASHBOARD } from "src/routes/paths";

const Overview = () => {
  const { $emit } = useEventBus();

  const theme = useTheme();

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("name", {
      header: "San pham",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("sku", {
      header: "SKU",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("barcode", {
      header: "Barcode",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("available", {
      header: "Tồn kho",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("price", {
      header: "Giá",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("inventoryType", {
      header: "Tình trạng",
      cell: (info) => {
        const inventoryType = info.getValue();
        return (
          <Label
            variant={theme.palette.mode === "light" ? "ghost" : "filled"}
            color={(inventoryType === "out_of_stock" && "error") || (inventoryType === "low_stock" && "warning") || "success"}
          >
            {sentenceCase(inventoryType)}
          </Label>
        );
      },
    }),
  ];

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: rows || [],
    columns: columns || [],
    getCoreRowModel: getCoreRowModel(),
  });

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("id");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const isEmptyContent = Boolean(rows && rows.length === 0);

  const handleDeleteRow = (id) => {
    $emit("dialog/confirmation/open", {
      title: "Xóa sản phẩm",
      content: "Bạn có muốn xóa sản phẩm này",
      actionText: "Xóa",
      actionHandler: () => {
        UserAPI.delete(id)
          .then(() => {
            // mutate();
          })
          .finally(() => {
            $emit("dialog/confirmation/close");
          });
      },
    });
  };

  return (
    <Page title="Tổng quan vận chuyển">
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2}>
          <HeaderBreadcrumbs
            heading="Tổng quan vận chuyển"
            links={[
              {
                name: "Trang chủ",
                href: PATH_DASHBOARD.overview,
              },
              {
                name: "Vận chuyển",
              },
            ]}
          />

          <StatisticBoxes />
          <COD />
        </Stack>
      </Container>

      <ConfirmationDialog />
    </Page>
  );
};

export default Overview;
