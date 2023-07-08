import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { sentenceCase } from "change-case";

import rows from "src/_mock/supplier";
import { UserAPI } from "src/api";
import ConfirmationDialog from "src/components/dialogs/ConfirmationDialog";
import EmptyContent from "src/components/EmptyContent";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Label from "src/components/Label";
import Page from "src/components/Page";
import { useEventBus } from "src/hooks";

import FormModal from "./components/FormModal";
import TableAction from "./components/TableAction";
import TableHeader from "./components/TableHeader";
import TableToolbar from "./components/TableToolbar";
import { PATH_DASHBOARD } from "src/routes/paths";

const Management = () => {
  const { $emit } = useEventBus();

  const theme = useTheme();

  const [openFormModal, setOpenFormModal] = useState(false);

  const handleOpenFormModal = () => {
    setOpenFormModal(true);
  };

  const handleCloseFormModal = () => {
    setOpenFormModal(false);
  };

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("name", {
      header: "Họ và tên",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("phone", {
      header: "Số điện thoại",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("status", {
      header: "Trạng thái",
      cell: (info) => {
        const status = info.getValue();
        return (
          <Label
            variant={theme.palette.mode === "light" ? "ghost" : "filled"}
            color={(status === "active" && "success") || (status === "inactive" && "error")}
          >
            {sentenceCase(status)}
          </Label>
        );
      },
    }),

    columnHelper.accessor("liability", {
      header: "Nợ phải trả",
      cell: (info) =>
        info
          .getValue()
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " vnd",
    }),

    columnHelper.accessor("total", {
      header: "Tổng mua",
      cell: (info) =>
        info
          .getValue()
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " vnd",
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
      title: "Xóa nhà cung cấp",
      content: "Bạn có muốn xóa nhà cung cấp này",
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
    <Page title="Quản lý nhà cung cấp">
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Quản lý nhà cung cấp"
          links={[
            {
              name: "Trang chủ",
              href: PATH_DASHBOARD.overview,
            },
            {
              name: "Nhà cung cấp",
              href: PATH_DASHBOARD.management.inventory.supplier.all,
            },
          ]}
          action={
            <Button variant="contained" startIcon={<Icon icon={plusFill} />} onClick={handleOpenFormModal}>
              Tạo mới
            </Button>
          }
        />

        {isEmptyContent ? (
          <EmptyContent
            title={
              <Button variant="contained" startIcon={<Icon icon={plusFill} />} onClick={handleOpenFormModal}>
                Add
              </Button>
            }
          />
        ) : (
          <Card>
            <TableToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

            <TableContainer sx={{ minWidth: 800 }}>
              <Table size="small">
                <TableHeader
                  order={order}
                  orderBy={orderBy}
                  getHeaderGroups={getHeaderGroups}
                  rowCount={rows?.length || 0}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                  flexRender={flexRender}
                />

                <TableBody>
                  {getRowModel()
                    .rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id } = row.original;
                      const isItemSelected = selected.indexOf(id) !== -1;
                      return (
                        <TableRow key={row.id} role="checkbox" selected={isItemSelected} hover>
                          <TableCell padding="checkbox">
                            <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                          </TableCell>
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                          ))}
                          <TableCell align="right">
                            <TableAction id={id} onDelete={() => handleDeleteRow(id)} />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        )}
      </Container>

      <ConfirmationDialog />
      <FormModal open={openFormModal} handleClose={handleCloseFormModal} />
    </Page>
  );
};

export default Management;
