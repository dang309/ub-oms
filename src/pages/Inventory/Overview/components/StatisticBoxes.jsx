import { Box, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { fShortenNumber } from "src/utils/formatNumber";

const RootStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 2, 2, 3),
}));

const TOTAL = 311000;

const StatisticBoxes = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <RootStyle>
            <div>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Tổng tồn kho
              </Typography>
            </div>
            <Box
              sx={{
                width: 64,
                height: 64,
                lineHeight: 0,
                borderRadius: "50%",
                bgcolor: "background.neutral",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{fShortenNumber(TOTAL)}</Typography>
            </Box>
          </RootStyle>
        </Grid>

        <Grid item xs={12} md={3}>
          <RootStyle>
            <div>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Tổng giá trị
              </Typography>
            </div>
            <Box
              sx={{
                width: 64,
                height: 64,
                lineHeight: 0,
                borderRadius: "50%",
                bgcolor: "background.neutral",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{fShortenNumber(TOTAL)}</Typography>
            </Box>
          </RootStyle>
        </Grid>

        <Grid item xs={12} md={3}>
          <RootStyle>
            <div>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Tổng đã bán
              </Typography>
            </div>
            <Box
              sx={{
                width: 64,
                height: 64,
                lineHeight: 0,
                borderRadius: "50%",
                bgcolor: "background.neutral",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{fShortenNumber(TOTAL)}</Typography>
            </Box>
          </RootStyle>
        </Grid>

        <Grid item xs={12} md={3}>
          <RootStyle>
            <div>
              <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                Tổng lợi nhuận
              </Typography>
            </div>
            <Box
              sx={{
                width: 64,
                height: 64,
                lineHeight: 0,
                borderRadius: "50%",
                bgcolor: "background.neutral",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{fShortenNumber(TOTAL)}</Typography>
            </Box>
          </RootStyle>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticBoxes;
