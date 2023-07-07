import { Controller } from "react-hook-form";
import { Autocomplete, Card, Grid, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import brands from "src/_mock/brand";
import categories from "src/_mock/category";
import provinces from 'src/_mock/province'
import { useData } from "src/hooks";

const BasicInfoForm = ({ formInputs, control }) => {
  const categoryOptions = categories && categories.map((item) => ({ id: item.id, label: item.name }));
  const brandOptions = brands && brands.map((item) => ({ id: item.id, label: item.name }));
  const provinceOptions = provinces && provinces.map((item) => ({ id: item.id, label: item.name }));


  return (
    <Card sx={{ p: 2 }} component="form" autoComplete="off">
      <Grid container spacing={3} justifyContent="flex-start">
        {/* Họ */}
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Controller
            name={"name"}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  type="text"
                  label={"Họ"}
                  placeholder={"Nhập họ"}
                  fullWidth
                  autoComplete="disabled"
                />
              );
            }}
          />
        </Grid>
        {/* Tên */}
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Controller
            name={"name"}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  type="text"
                  label={"Tên"}
                  placeholder={"Nhập tên"}
                  fullWidth
                  autoComplete="disabled"
                />
              );
            }}
          />
        </Grid>
        {/* số điện thoại */}
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Controller
            name={"name"}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  type="text"
                  label={"Số điện thoại"}
                  placeholder={"Nhập số điện thoại"}
                  fullWidth
                  autoComplete="disabled"
                />
              );
            }}
          />
        </Grid>
        {/* Tỉnh/thành phố */}
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          {provinceOptions && (
            <Autocomplete
              options={provinceOptions}
              // value={categoryOptions.find((option) => option.id === getValues(input.name))}
              // onChange={(_, newValue) => {
              //   if (newValue && newValue.id) {
              //     setValue(input.name, newValue.id);
              //   }
              // }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tỉnh/Thành phố"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "disabled", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          )}
        </Grid>
        {/* Quận/Huyện */}
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          {provinceOptions && (
            <Autocomplete
              options={provinceOptions}
              // value={categoryOptions.find((option) => option.id === getValues(input.name))}
              // onChange={(_, newValue) => {
              //   if (newValue && newValue.id) {
              //     setValue(input.name, newValue.id);
              //   }
              // }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Quận/Huyện"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "disabled", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          )}
        </Grid>
        {/* Phường/Xã */}
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          {provinceOptions && (
            <Autocomplete
              options={provinceOptions}
              // value={categoryOptions.find((option) => option.id === getValues(input.name))}
              // onChange={(_, newValue) => {
              //   if (newValue && newValue.id) {
              //     setValue(input.name, newValue.id);
              //   }
              // }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Phường/Xã"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "disabled", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          )}
        </Grid>
        {/* Zip Code*/}
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Controller
            name={"name"}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  required
                  type="text"
                  label={"Zip code"}
                  placeholder={"Nhập zip code"}
                  fullWidth
                  autoComplete="disabled"
                />
              );
            }}
          />
        </Grid>

        {/* Địa chỉ  */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Controller
            name={"sku"}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="text"
                  label={"Địa chỉ"}
                  placeholder={""}
                  fullWidth
                  autoComplete="disabled"
                />
              );
            }}
          />
        </Grid>
        {/* Ghi chú */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Controller
            name={"barcode"}
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="text"
                  multiline
                  rows={4}
                  label={"Ghi chú"}
                  placeholder={""}
                  fullWidth
                  autoComplete="disabled"
                />
              );
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default BasicInfoForm;
