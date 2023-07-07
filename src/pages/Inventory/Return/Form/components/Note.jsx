import { Card, TextField } from "@mui/material";

import { Controller, useForm } from "react-hook-form";

const Note = () => {
  const { control } = useForm();
  return (
    <Card sx={{ p: 2 }} component="form" autoComplete="off">
      <Controller
        name={"desc"}
        control={control}
        render={({ field }) => {
          return <TextField fullWidth label="Ghi chú" multiline rows={4} />;
        }}
      />
    </Card>
  );
};

export default Note;
