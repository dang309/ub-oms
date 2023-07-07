import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";

const QuantitativeFilter = () => {
  return (
    <>
      <Select defaultValue="eq" size="small">
        <MenuItem value="eq">{"="}</MenuItem>
        <MenuItem value="gt">{">"}</MenuItem>
        <MenuItem value="lt">{"<"}</MenuItem>
      </Select>
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
    </>
  );
};

export default QuantitativeFilter;
