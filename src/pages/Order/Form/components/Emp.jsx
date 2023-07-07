import { Card, Stack, Autocomplete, TextField } from "@mui/material";

const Emp = () => {
  return (
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
      </Stack>
    </Card>
  );
};

export default Emp;
