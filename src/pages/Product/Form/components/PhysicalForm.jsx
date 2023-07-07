import { Controller } from "react-hook-form";
import { Box, Card, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const PhysicalForm = ({ control }) => {
  return (
    <Grid container>
      <Grid item lg={4}>
        <Typography variant="h6">Vật lý</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Trọng lượng & vận chuyển
        </Typography>
      </Grid>
      <Grid item lg={8}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <Grid container spacing={3} justifyContent="flex-start">
            {/* Kích thước */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Stack direction="column" spacing={1}>
                <Typography variant="body1">Kich thước</Typography>

                <Box>
                  <Grid container spacing={1}>
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                      <Controller
                        name={""}
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField
                              {...field}
                              required
                              type="text"
                              label={"Chiều rộng"}
                              placeholder={"Chiều rộng..."}
                              fullWidth
                              autoComplete="disabled"
                              InputProps={{
                                endAdornment: (
                                  <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>
                                    cm
                                  </Typography>
                                ),
                                type: "number",
                              }}
                            />
                          );
                        }}
                      />
                    </Grid>

                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                      <Controller
                        name={""}
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField
                              {...field}
                              required
                              type="text"
                              label={"Chiều dài"}
                              placeholder={"Chiều dài..."}
                              fullWidth
                              autoComplete="disabled"
                              InputProps={{
                                endAdornment: (
                                  <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>
                                    cm
                                  </Typography>
                                ),
                                type: "number",
                              }}
                            />
                          );
                        }}
                      />
                    </Grid>

                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                      <Controller
                        name={""}
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField
                              {...field}
                              required
                              type="text"
                              label={"Chiều cao"}
                              placeholder={"Chiều cao..."}
                              fullWidth
                              autoComplete="disabled"
                              InputProps={{
                                endAdornment: (
                                  <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>
                                    cm
                                  </Typography>
                                ),
                                type: "number",
                              }}
                            />
                          );
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Grid>

            {/* Trọng lượng  */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Stack direction="column" spacing={1}>
                <Typography variant="body1">Trọng lượng</Typography>

                <Box>
                  <Controller
                    name={""}
                    control={control}
                    render={({ field }) => {
                      return (
                        <TextField
                          {...field}
                          required
                          type="text"
                          label={"Trọng lượng "}
                          placeholder={"Trọng lượng ..."}
                          fullWidth
                          autoComplete="disabled"
                          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                          InputProps={{
                            endAdornment: (
                              <Typography position="end" sx={{ p: 0.25, color: "#A9A9A9", ml: -0.5, mr: 1 }}>
                                gram
                              </Typography>
                            ),
                          }}
                        />
                      );
                    }}
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PhysicalForm;
