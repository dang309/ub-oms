import { Controller } from "react-hook-form";
import { Card, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { QuillEditor } from "src/components/editor";

const DescForm = ({ control }) => {
  return (
    <Grid container>
      <Grid item lg={4} md={12} sm={12}>
        <Typography variant="h6">Mô tả sản phẩm</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Mô tả sản phẩm bao gồm điểm khác biệt, thông số kỹ thuật, chất liệu, kích thước, thời gian sử dụng....
        </Typography>
      </Grid>
      <Grid item lg={8} md={12} sm={12}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <Controller
            name={"desc"}
            control={control}
            render={({ field }) => {
              return (
                <QuillEditor
                  simple
                  id="product-description"
                  value={field.value}
                  onChange={(val) => field.onChange(val)}
                  // error={Boolean(touched.description && errors.description)}
                />
              );
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default DescForm;
