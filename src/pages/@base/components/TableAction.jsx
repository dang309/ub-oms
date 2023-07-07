import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import editFill from "@iconify/icons-eva/edit-fill";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import { Icon } from "@iconify/react";
// material
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const TableAction = ({ id, onDelete }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton component={RouterLink} to={`${window.location.href}/edit/${id}`}>
        <Icon icon={editFill} />
      </IconButton>

      <IconButton onClick={onDelete}>
        <Icon icon={trash2Outline} color={red[500]} />
      </IconButton>
    </Stack>
  );
};

TableAction.propTypes = {
  onDelete: PropTypes.func,
  userName: PropTypes.string,
};

export default TableAction;
