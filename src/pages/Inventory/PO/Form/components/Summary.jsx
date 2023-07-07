import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { fCurrency } from "src/utils/formatNumber";

const Summary = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Tóm tắt chi phí" />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Sô lượng đặt
            </Typography>
            <Typography variant="subtitle2">{3}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Tổng
            </Typography>
            <Typography variant="subtitle2">{fCurrency(10000)}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Chiết khấu
            </Typography>
            <Typography variant="subtitle2">{"-"}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Vận chuyển
            </Typography>
            <Typography variant="subtitle2">{fCurrency(100000)}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Chi phí khác
            </Typography>
            <Typography variant="subtitle2">{'-'}</Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Thành tiền</Typography>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="subtitle1" sx={{ color: "error.main" }}>
                {fCurrency(1000)}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                (Đã bao gồm VAT)
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Summary;
