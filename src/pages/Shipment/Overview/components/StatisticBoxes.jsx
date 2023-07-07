import facebookFill from "@iconify/icons-eva/facebook-fill";
import googleFill from "@iconify/icons-eva/google-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import twitterFill from "@iconify/icons-eva/twitter-fill";
// material
import { Box, Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";
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
    name: "Chua tạp vận chuyển",
    value: random(9999, 99999),
  },
  {
    name: "Giao không gặp khách",
    value: random(9999, 99999),
  },
  {
    name: "Chờ chuyển khoản",
    value: random(9999, 99999),
  },
];

// ----------------------------------------------------------------------

const SiteItem = ({ site }) => {
  const { icon, value, name } = site;

  return (
    <Grid item xs={4}>
      <Paper
        variant="outlined"
        sx={{
          py: 2.5,
          textAlign: "center",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "#f4f4f4",
          },
        }}
      >
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {name}
        </Typography>
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
      <CardHeader title="Vận chuyển" />
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
