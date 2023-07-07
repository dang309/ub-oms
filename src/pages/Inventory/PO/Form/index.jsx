import { useCallback, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import suppliers from "src/_mock/supplier";
import { UserAPI } from "src/api";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Iconify from "src/components/Iconify";
import Page from "src/components/Page";
import { useData } from "src/hooks";
import { PATH_DASHBOARD } from "src/routes/paths";

import ProductPickingModal from "./components/ProductPickingModal";
import Summary from "./components/Summary";
import Note from "./components/Note";


const Form = () => {
  const { id } = useParams();

  const [openProductPickingModal, setOpenProductPickingModal] = useState(false);

  const handleOpenProductPickingModal = () => {
    setOpenProductPickingModal(true);
  };

  const handleCloseProductPickingModal = () => {
    setOpenProductPickingModal(false);
  };

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      desc: "",
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "meta",
    rules: {
      maxLength: 10,
    },
  });

  const { data: user } = useData(id ? `/users/${id}` : null);

  const handleAddMeta = () => {
    append({ key: "", value: "" });
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setValue(
        "thumbnails",
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setValue]
  );

  const handleSaveData = (dataToSave) => {
    if (id) {
      UserAPI.update(id, dataToSave);
    } else {
      UserAPI.create(dataToSave);
    }
  };

  const isEditPage = Boolean(id);

  return (
    <Page title={id ? "Sửa phiếu mua hàng" : "Tạo phiếu mua hàng"}>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading={id ? "Sửa phiếu mua hàng" : "Tạo phiếu mua hàng"}
          links={[
            {
              name: "Trang chủ",
              href: PATH_DASHBOARD.dashboard,
            },
            {
              name: "Phiếu mua hàng",
              // href: PATH_DASHBOARD.product.management,
            },
            {
              name: id ? "Sửa" : "Tạo",
              // href: PATH_DASHBOARD.product.management,
            },
          ]}
        />

        <Box>
          <Grid container spacing={2}>
            <Grid item lg={8}>
              <Stack direction="column" spacing={2}>
                <Card sx={{ p: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item lg={6}>
                      <Autocomplete
                        options={suppliers.map((item) => ({ id: item.id, label: item.name }))}
                        // value={categoryOptions.find((option) => option.id === getValues(input.name))}
                        // onChange={(_, newValue) => {
                        //   if (newValue && newValue.id) {
                        //     setValue(input.name, newValue.id);
                        //   }
                        // }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Nhà cung cấp"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "disabled", // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item lg={6}>
                      <Autocomplete
                        options={["Kho Unibox fulfillment"]}
                        // value={categoryOptions.find((option) => option.id === getValues(input.name))}
                        // onChange={(_, newValue) => {
                        //   if (newValue && newValue.id) {
                        //     setValue(input.name, newValue.id);
                        //   }
                        // }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Kho"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "disabled", // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Card>

                <Card>
                  <CardHeader title="Sản phẩm" />
                  <CardContent>
                    <Button variant="contained" onClick={handleOpenProductPickingModal}>
                      Chọn sản phẩm
                    </Button>
                  </CardContent>
                </Card>

                <Note />
              </Stack>
            </Grid>
            <Grid item lg={4}>
              <Stack direction="column" spacing={2}>
                <Card sx={{ p: 2 }}>
                  <Stack direction="column" spacing={2}>
                    <Autocomplete
                      options={["Hải Đăng"]}
                      // value={categoryOptions.find((option) => option.id === getValues(input.name))}
                      // onChange={(_, newValue) => {
                      //   if (newValue && newValue.id) {
                      //     setValue(input.name, newValue.id);
                      //   }
                      // }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Nhân viên"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "disabled", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />

                    <DatePicker label="Ngày nhận hàng dự kiến" />
                  </Stack>
                </Card>

                <Summary />
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <LoadingButton type="submit" variant="contained">
            {isEditPage ? "Lưu" : "Tạo"}
          </LoadingButton>
        </Box>
      </Container>

      <ProductPickingModal open={openProductPickingModal} handleClose={handleCloseProductPickingModal} />
    </Page>
  );
};

export default Form;
