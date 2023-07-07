import { useCallback } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { UserAPI } from "src/api";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Iconify from "src/components/Iconify";
import Page from "src/components/Page";
import { useData } from "src/hooks";
import { PATH_DASHBOARD } from "src/routes/paths";

import BasicInfoForm from "./components/BasicInfoForm";
import DescForm from "./components/DescForm";
import MetaForm from "./components/MetaForm";
import PhysicalForm from "./components/PhysicalForm";
import PriceForm from "./components/PriceForm";
import QuantityForm from "./components/QuantityForm";
import ThumbnailForm from "./components/ThumbnailForm";

const Form = () => {
  const { id } = useParams();

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
      maxLength: 30,
    },
  });

  const { data: user } = useData(id ? `/users/${id}` : null);

  const handleAddMeta = () => {
    append({ key: "", value: "" });
  };

  const handleDeleteMeta = (index) => {
    remove(index);
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setValue(
        'thumbnails',
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
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
    <Page title={id ? "Sửa sản phẩm" : "Tạo sản phẩm"}>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading={id ? "Sửa sản phẩm" : "Tạo sản phẩm"}
          links={[
            {
              name: "Trang chủ",
              href: PATH_DASHBOARD.overview,
            },
            {
              name: "Sản phẩm",
              href: PATH_DASHBOARD.management.product.all,
            },
            {
              name: id ? "Sửa" : "Tạo",
            },
          ]}
        />

        <Stack direction="column" spacing={4}>
          <BasicInfoForm control={control} />
          <DescForm control={control} />
          <ThumbnailForm handleDrop={handleDrop} />
          <PriceForm control={control} />
          <QuantityForm control={control} />
          <PhysicalForm control={control} />
          <MetaForm fields={fields} control={control} handleAddMeta={handleAddMeta} handleDeleteMeta={handleDeleteMeta} />
        </Stack>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <LoadingButton type="submit" variant="contained">
            {isEditPage ? 'Lưu' : 'Tạo'}
          </LoadingButton>
        </Box>
      </Container>
    </Page>
  );
};

export default Form;
