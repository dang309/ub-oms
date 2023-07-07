import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import Iconify from "src/components/Iconify";
import { bgBlur } from "src/utils/cssStyles";

const ProductPickingModal = ({ open, handleClose }) => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("name", {
      header: "Tên",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("price", {
      header: "Giá",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("available", {
      header: "Tồn kho",
      cell: (info) => info.getValue(),
    }),
  ];

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: [],
    columns: columns || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Chọn sản phẩm</DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={2}>
          <OutlinedInput
            fullWidth
            autoFocus
            placeholder="Tìm kiếm sản phẩm ..."
            startAdornment={
              <InputAdornment position="start">
                <Box component={Iconify} icon="material-symbols:search-rounded" sx={{ color: "text.disabled" }} />
              </InputAdornment>
            }
          />

          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                {getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    {headerGroup.headers.map((header) => (
                      <TableCell key={header.id} align={header.alignRight ? "right" : "left"}>
                        <TableSortLabel hideSortIcon>
                          {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>

              {/* <TableBody>
                {getRowModel().rows.map((row) => {
                  const { id } = row.original;
                  return (
                    <TableRow key={row.id} role="checkbox" hover>
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody> */}
            </Table>
          </TableContainer>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">Hủy</Button>
        <Button onClick={handleClose} variant="contained">Chọn</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductPickingModal;
