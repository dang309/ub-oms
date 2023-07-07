import { useCallback } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import countries from "src/_mock/countries";
import { UserAPI } from "src/api";
import { DialogAnimate } from "src/components/animate";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Iconify from "src/components/Iconify";
import Page from "src/components/Page";
import { UploadAvatar } from "src/components/upload";
import { useData } from "src/hooks";
import { PATH_DASHBOARD } from "src/routes/paths";

const FormModal = ({ open, handleClose }) => {
  return (
    <DialogAnimate open={open} onClose={handleClose}>
      <DialogTitle>Title</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField fullWidth label="Full Name" />
            <TextField fullWidth label="Email Address" />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField fullWidth label="Phone Number" />
            <TextField select fullWidth label="Country" placeholder="Country" SelectProps={{ native: true }}>
              <option value="" />
              {countries.map((option) => (
                <option key={option.code} value={option.label}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField fullWidth label="State/Region" />
            <TextField fullWidth label="City" />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField fullWidth label="Address" />
            <TextField fullWidth label="Zip/Code" />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
            <TextField fullWidth label="Company" />
            <TextField fullWidth label="Role" />
          </Stack>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <LoadingButton type="submit" variant="contained">
              Luu
            </LoadingButton>
          </Box>
        </Stack>
      </DialogContent>
    </DialogAnimate>
  );
};

export default FormModal;
