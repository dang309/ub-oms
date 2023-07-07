import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Icon } from "@iconify/react";
// material
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
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { filter } from "lodash";

import { UserAPI } from "src/api";
import ConfirmationDialog from "src/components/dialogs/ConfirmationDialog";
import EmptyContent from "src/components/EmptyContent";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
// components
import Page from "src/components/Page";
import Scrollbar from "src/components/Scrollbar";
import { useEventBus } from "src/hooks";

import { TableAction, TableHeader, TableToolbar } from "./components";

// ----------------------------------------------------------------------

const BaseManagementPage = (props) => {
  const {
    breadcrumbs,
    heading,
    pageTitle,
    rows,
    columns,
    isLoading,
    handleDeleteRow,
  } = props;

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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
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

  const isEmptyContent = Boolean(!isLoading && rows && rows.length === 0);

  return (
    <Page title={pageTitle}>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading={heading}
          links={
            breadcrumbs || [
              {
                name: "",
                href: "",
              },
            ]
          }
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={window.location.href + "/create"}
              startIcon={<Icon icon={plusFill} />}
            >
              Tạo mới
            </Button>
          }
        />

        {isEmptyContent ? (
          <EmptyContent
            title={
              <Button
                variant="contained"
                component={RouterLink}
                to={window.location.href + "/create"}
                startIcon={<Icon icon={plusFill} />}
              >
                Add
              </Button>
            }
          />
        ) : (
          <Card>
            <TableToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
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
                      .rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        const { id } = row.original;
                        const isItemSelected = selected.indexOf(id) !== -1;
                        return (
                          <TableRow
                            key={row.id}
                            role="checkbox"
                            selected={isItemSelected}
                            hover
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={isItemSelected}
                                onChange={(event) => handleClick(event, id)}
                              />
                            </TableCell>
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                            <TableCell align="right">
                              <TableAction
                                id={id}
                                onDelete={() => handleDeleteRow(id)}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

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
    </Page>
  );
};

BaseManagementPage.defaultProps = {
  rows: [],
  columns: [],
};

export default BaseManagementPage;
