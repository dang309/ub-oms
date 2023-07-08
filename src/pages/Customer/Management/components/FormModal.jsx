import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
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

const FormModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tạo nhà cung cấp</DialogTitle>
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
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>Hủy</Button>
        <LoadingButton type="submit" variant="contained">
          Lưu
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default FormModal;
