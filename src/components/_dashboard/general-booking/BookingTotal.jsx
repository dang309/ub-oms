// material
import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//
import { BookingIllustration } from "src/assets";

// utils
import { fShortenNumber } from "src/utils/formatNumber";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 2, 2, 3),
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

const BookingTotal = () => {
  return (
    <RootStyle>
      <div>
        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
          Tổng hàng tồn
        </Typography>
      </div>
      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: "50%",
          bgcolor: "background.neutral",

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      </Box>
    </RootStyle>
  );
};

export default BookingTotal;
