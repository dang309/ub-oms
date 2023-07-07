import { Controller } from "react-hook-form";
import { Card, Grid, InputAdornment, TextField, Typography, OutlinedInput } from "@mui/material";
import { grey } from "@mui/material/colors";

const PriceForm = ({ control }) => {
  return (
    <Grid container>
      <Grid item lg={4}>
        <Typography variant="h6">Giá</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Giá nhập, giá niêm yết, giá bán, ...
        </Typography>
      </Grid>
      <Grid item lg={8}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <Grid container spacing={3} justifyContent="flex-start">
            {/* Giá nhập */}
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
                      label={"Giá nhập"}
                      placeholder={"Giá nhập..."}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Giá nhập sản phẩm khi bạn mua từ nhà cung cấp..."
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      InputProps={{
                        endAdornment: <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>VND</Typography>,
                      }}
                    />
                  );
                }}
              />
            </Grid>

            {/* Giá niêm yết */}
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
                      label={"Giá niêm yết"}
                      placeholder={"Giá niêm yết..."}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Giá niêm yết là giá trị đã nêu mà một thứ gì đó được chào bán thông qua một kênh cụ thể như phòng trưng bày, cửa hàng bán lẻ, danh mục hoặc trang web bán lẻ, bán buôn hoặc nhà phân phối."
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      InputProps={{
                        endAdornment: <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>VND</Typography>,
                      }}
                    />
                  );
                }}
              />
            </Grid>

            {/* Giá bán lẻ */}
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
                      label={"Giá bán lẻ"}
                      placeholder={"Giá bán lẻ..."}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Giá bán lẻ sẽ được tự động điền vào giá bán khi sản phẩm được đăng bán."
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      InputProps={{
                        endAdornment: <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>VND</Typography>,
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

export default PriceForm;
