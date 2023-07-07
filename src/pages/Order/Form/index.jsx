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

import Note from "./components/Note";
import ProductPickingModal from "./components/ProductPickingModal";
import Summary from "./components/Summary";
import Emp from "./components/Emp";
import Channel from "./components/Channel";
import Customer from "./components/Customer";
import Products from "./components/Products";

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
    <Page title={id ? "Sửa đơn hàng" : "Tạo đơn hàng"}>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading={id ? "Sửa đơn hàng" : "Tạo đơn hàng"}
          links={[
            {
              name: "Trang chủ",
              href: PATH_DASHBOARD.overview,
            },
            {
              name: "Đơn hàng",
              href: PATH_DASHBOARD.management.order.all,
            },
            {
              name: id ? "Sửa" : "Tạo",
            },
          ]}
        />

        <Box>
          <Grid container spacing={2}>
            <Grid item lg={8}>
              <Stack direction="column" spacing={2}>
                <Products handleOpenProductPickingModal={handleOpenProductPickingModal} />

                <Summary />
              </Stack>
            </Grid>
            <Grid item lg={4}>
              <Stack direction="column" spacing={2}>
                <Emp />
                <Channel />
                <Customer />
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
