import { Controller } from "react-hook-form";
import { Autocomplete, Card, Grid, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import brands from "src/_mock/brand";
import categories from "src/_mock/category";

const BasicInfoForm = ({ formInputs, control }) => {
  const categoryOptions = categories && categories.map((item) => ({ id: item.id, label: item.name }));
  const brandOptions = brands && brands.map((item) => ({ id: item.id, label: item.name }));
  return (
    <Grid container>
      <Grid item lg={4}>
        <Typography variant="h6">Thông tin cơ bản</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Tên sản phẩm, danh mục, ...
        </Typography>
      </Grid>
      <Grid item lg={8}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <Grid container spacing={3} justifyContent="flex-start">
          {/* Ten san pham */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Controller
                name={"name"}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      required
                      type="text"
                      label={"Ten san pham"}
                      placeholder={"Nhap ten san pham"}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Tên sản phẩm tối thiểu 5 từ và nên chưa kiểu dáng, thương hiệu, mô tả, chất liệu, kích thước..."
                    />
                  );
                }}
              />
            </Grid>
            {/* Danh muc san pham */}
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {categoryOptions && (
                <Autocomplete
                  freeSolo
                  options={categoryOptions}
                  // value={categoryOptions.find((option) => option.id === getValues(input.name))}
                  // onChange={(_, newValue) => {
                  //   if (newValue && newValue.id) {
                  //     setValue(input.name, newValue.id);
                  //   }
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Danh muc san pham"
                      label="Danh muc san pham"
                      helperText="Danh mục sản phẩm như thời trang, đồ chơi, phụ kiện..."
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "disabled", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              )}
            </Grid>
            {/* Thuong hieu */}
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {brandOptions && (
                <Autocomplete
                  freeSolo
                  options={brandOptions}
                  // value={categoryOptions.find((option) => option.id === getValues(input.name))}
                  // onChange={(_, newValue) => {
                  //   if (newValue && newValue.id) {
                  //     setValue(input.name, newValue.id);
                  //   }
                  // }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Thuong hieu"
                      label="Thuong hieu"
                      helperText="Thương hiệu như Apple, Nike, Adidas"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "disabled", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              )}
            </Grid>

            {/*SKU  */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Controller
                name={"sku"}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      required
                      type="text"
                      label={"Ma SKU"}
                      placeholder={"e.g. SKU11002"}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Nếu bạn bỏ trống, chúng tôi sẽ tự động sinh mã SKU cho sản phẩm này"
                    />
                  );
                }}
              />
            </Grid>
            {/* BARCODE */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Controller
                name={"barcode"}
                control={control}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      required
                      type="text"
                      label={"EAN/UPC/BARCODE"}
                      placeholder={""}
                      fullWidth
                      autoComplete="disabled"
                      helperText="Mã EAN, UPC, ISBN, BARCODE trên sản phẩm"
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

export default BasicInfoForm;
