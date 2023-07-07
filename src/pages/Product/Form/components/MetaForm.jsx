import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";

import Iconify from "src/components/Iconify";

const MetaForm = ({ fields, control, handleAddMeta, handleDeleteMeta }) => {
  return (
    <Grid container>
      <Grid item lg={4}>
        <Typography variant="h6">Metadata</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Cấu hình mẫu mã sản phẩm con giúp người mua hàng dễ dàng đặt hàng theo tồn kho chính xác. Thêm các mẫu mã như màu sắc,
          kích cỡ...
          <br />
          Chọn thuộc tính phù hợp với danh mục sản phẩm. Tối đa 10 lựa chọn cho mỗi thuộc tính
        </Typography>
      </Grid>
      <Grid item lg={8} md={12} sm={12}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <CardHeader title="Thêm metadata cho sản phẩm" />
          <CardContent>
            <Stack direction="column" spacing={2}>
              {fields &&
                fields.map((item, index) => {
                  return (
                    <Box key={item.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xl={5.5} lg={5.5} md={5.5} sm={5.5} xs={5.5}>
                          <Select fullWidth>
                            <MenuItem value="color">Màu sắc</MenuItem>
                            <MenuItem value="size">Kích cỡ</MenuItem>
                            <MenuItem value="weight">Trọng lượng</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xl={5.5} lg={5.5} md={5.5} sm={5.5} xs={5.5}>
                          <Controller
                            name={`metadata.${index}.value`}
                            control={control}
                            render={({ field }) => {
                              return (
                                <TextField
                                  {...field}
                                  required
                                  type="text"
                                  label={"Giá trị"}
                                  placeholder={"Nhập giá trị cho thuộc tính"}
                                  fullWidth
                                  autoComplete="disabled"
                                  helperText=""
                                />
                              );
                            }}
                          />
                        </Grid>

                        <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                          <Tooltip title="Xóa">
                            <IconButton onClick={() => handleDeleteMeta(index)}>
                              <Iconify icon="eva:trash-2-outline" color={red[500]} />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
              {fields.length < 30 && (
                <Button variant="contained" sx={{ alignSelf: "flex-start" }} onClick={handleAddMeta}>
                  Thêm
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MetaForm;
