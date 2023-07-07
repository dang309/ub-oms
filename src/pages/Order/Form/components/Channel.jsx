import { Card, Stack, Autocomplete, TextField } from "@mui/material";

const Channel = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <Autocomplete
          options={["Shoppe", "Lazada", "Tiki", "Tiktok Shop"]}
          // value={categoryOptions.find((option) => option.id === getValues(input.name))}
          // onChange={(_, newValue) => {
          //   if (newValue && newValue.id) {
          //     setValue(input.name, newValue.id);
          //   }
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Kênh bán hàng"
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

export default Channel;
