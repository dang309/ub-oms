import { Autocomplete, Card, Stack, TextField } from "@mui/material";

const Customer = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <Autocomplete
          options={["A", "B", "C"]}
          // value={categoryOptions.find((option) => option.id === getValues(input.name))}
          // onChange={(_, newValue) => {
          //   if (newValue && newValue.id) {
          //     setValue(input.name, newValue.id);
          //   }
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Khách hàng"
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

export default Customer;
