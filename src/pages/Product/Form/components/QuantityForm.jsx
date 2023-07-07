import { Controller } from "react-hook-form";
import { Card, Grid, TextField,Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const QuantityForm = ({ control }) => {
  return (
    <Grid container>
      <Grid item lg={4} md={12} sm={12}>
        <Typography variant="h6">Số lượng</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Số lượng cảnh báo hết hàng, thời gian nhập hàng, ...
        </Typography>
      </Grid>
      <Grid item lg={8} md={12} sm={12}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <Grid container spacing={3} justifyContent="flex-start">
            {/* Số lượng cảnh báo */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Controller
                name={""}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      required
                      type="text"
                      label={"Số lượng cảnh báo"}
                      placeholder={"Số lượng cảnh báo..."}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Khi số tồn giảm xuống dưới mức này, sản phẩm sẽ được cảnh báo hết hàng"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
                  );
                }}
              />
            </Grid>

            {/* Thời gian nhập hàng */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Controller
                name={""}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      required
                      type="text"
                      label={"Thời gian nhập hàng"}
                      placeholder={"Thời gian nhập hàng..."}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Thời gian kể từ khi đặt mua từ nhà cung cấp đến khi hàng sẵn sàng bán"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      InputProps={{
                        endAdornment: <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>Ngày</Typography>,
                      }}
                    />
                  );
                }}
              />
            </Grid>

          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default QuantityForm;
