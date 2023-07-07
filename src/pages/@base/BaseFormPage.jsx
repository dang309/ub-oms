import { useMemo } from "react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
// material
import { Autocomplete, Box, Card, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Iconify from "src/components/Iconify";
// components
import Page from "src/components/Page";
// routes
import { getDirtyValues } from "src/utils/common";

// ----------------------------------------------------------------------

const BaseFormPage = ({ id, breadcrumbs, heading, pageTitle, formInputs, handleSaveData }) => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { isDirty, dirtyFields },
  } = useForm({
    defaultValues: useMemo(() => {
      let result = {};
      formInputs.forEach((item) => {
        if (item.type === "text") {
          result[item.name] = "";
        } else if (item.type === "number") {
          result[item.name] = 0;
        } else if (item.type === "select") {
          result[item.name] = item.options[0].value;
        } else if (item.type === "autocomplete") {
          result[item.name] = "";
        }
      });
      return result;
    }, [formInputs]),
  });

  const onSubmit = handleSubmit(async (data) => {
    let dataToSave = data;
    if (id) {
      if (isDirty) {
        dataToSave = getDirtyValues(dirtyFields, data);
      }
    }
    handleSaveData(dataToSave);
  });

  useEffect(() => {
    let defaultValues = {};
    formInputs.forEach((item) => {
      defaultValues[item.name] = item.default;
    });
    reset({ ...defaultValues });
  }, [reset, formInputs]);

  return (
    <Page title={pageTitle}>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs heading={heading} links={breadcrumbs || [{ name: "", href: "" }]} />

        <Card sx={{ p: 2 }} component="form" onSubmit={onSubmit} autoComplete="off">
          <Grid container spacing={2} justifyContent="flex-start">
            {formInputs &&
              formInputs.map((input) => {
                if (input.type === "text" || input.type === "number")
                  return (
                    <Grid key={input.name} item lg={4} md={4} sm={6} xs={12}>
                      <Controller
                        name={input.name}
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField
                              {...field}
                              required={input.required}
                              type={input.type}
                              label={input.label}
                              placeholder={input.placeholder}
                              fullWidth
                              autoComplete="disabled"
                              disabled={input.disabled}
                              InputProps={{
                                readOnly: input.readOnly,
                              }}
                              inputProps={
                                input.type === "number"
                                  ? {
                                      inputMode: "numeric",
                                      pattern: "[0-9]*",
                                    }
                                  : {}
                              }
                            />
                          );
                        }}
                      />
                    </Grid>
                  );
                if (input.type === "select")
                  return (
                    <Grid key={input.name} item xl={4} lg={4} md={4} sm={12} xs={12}>
                      <Controller
                        control={control}
                        name={input.name}
                        render={({ field }) => {
                          return (
                            <FormControl fullWidth>
                              <InputLabel>{input.label}</InputLabel>
                              <Select
                                label={input.label}
                                defaultValue={2}
                                fullWidth
                                {...field}
                                MenuProps={{ disableScrollLock: true }}
                              >
                                {input.options &&
                                  input.options.map((option) => {
                                    return (
                                      <MenuItem key={option.name} value={option.value}>
                                        {option.name}
                                      </MenuItem>
                                    );
                                  })}
                              </Select>
                            </FormControl>
                          );
                        }}
                      />
                    </Grid>
                  );
                if (input.type === "autocomplete") {
                  return (
                    <Grid key={input.name} item xl={4} lg={4} md={4} sm={12} xs={12}>
                      {input.options && (
                        <Autocomplete
                          freeSolo
                          options={input.options}
                          value={input.options.find((option) => option.id === getValues(input.name))}
                          onChange={(_, newValue) => {
                            if (newValue && newValue.id) {
                              setValue(input.name, newValue.id);
                            }
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder={input.placeholder}
                              label={input.label}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "disabled", // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      )}
                    </Grid>
                  );
                }
              })}
          </Grid>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <LoadingButton type="submit" variant="contained" startIcon={<Iconify icon="eva:save-outline" />}>
              Save
            </LoadingButton>
          </Box>
        </Card>
      </Container>
    </Page>
  );
};

export default BaseFormPage;
