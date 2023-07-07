import { Autocomplete, TextField } from "@mui/material";

const CategoricalFilter = () => {
  return (
    <Autocomplete
      options={["Unibox fulfillment"]}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: "disabled", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default CategoricalFilter;
