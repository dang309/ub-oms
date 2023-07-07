import facebookFill from "@iconify/icons-eva/facebook-fill";
import googleFill from "@iconify/icons-eva/google-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import twitterFill from "@iconify/icons-eva/twitter-fill";
// material
import { Stack, Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { random } from "lodash";
import PropTypes from "prop-types";

import Iconinfy from "src/components/Iconify";
// utils
import { fShortenNumber } from "src/utils/formatNumber";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 32,
  height: 32,
};

const MOCK_SOCIALS = [
  {
    name: "Đã giao, chưa nhận",
    value: random(9999, 99999),
    sub: 0,
  },
  {
    name: "Đã đối soát, chưa nhận",
    value: random(9999, 99999),
    sub: 0,
  },
];

// ----------------------------------------------------------------------

const SiteItem = ({ site }) => {
  const { value, name, sub } = site;

  return (
    <Grid item xs={6}>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          textAlign: "center",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "#f4f4f4",
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={4}>
          <Stack alignItems="flex-start">
            <Typography variant="h6">{fShortenNumber(value)}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {name}
            </Typography>
          </Stack>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {sub} đơn
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

SiteItem.propTypes = {
  site: PropTypes.shape({
    icon: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};

const StatisticBoxes = () => {
  return (
    <Card>
      <CardHeader title="Thu hộ" />
      <CardContent>
        <Grid container spacing={2}>
          {MOCK_SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticBoxes;
