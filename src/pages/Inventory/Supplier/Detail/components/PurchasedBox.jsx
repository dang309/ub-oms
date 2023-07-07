import ReactApexChart from 'react-apexcharts';
import trendingDownFill from '@iconify/icons-eva/trending-down-fill';
import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
import { Box, Card, Stack,Typography } from '@mui/material';
// material
import { alpha, styled,useTheme } from '@mui/material/styles';
import { merge } from 'lodash';

//
import { BaseOptionChart } from 'src/components/charts';
import Iconify from 'src/components/Iconify';
// utils
import { fCurrency, fNumber, fPercent } from 'src/utils/formatNumber';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16)
}));

// ----------------------------------------------------------------------

const PERCENT = -0.06;
const TOTAL_BALANCE = 18765.093383;
const CHART_DATA = [{ data: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68] }];

const PurchasedBox = () => {
  const theme = useTheme();
  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.chart.green[0]],
    chart: { animations: { enabled: true }, sparkline: { enabled: true } },
    stroke: { width: 2 },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => ''
        }
      },
      marker: { show: false }
    }
  });

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" paragraph>
          Tổng mua
        </Typography>
        <Typography variant="h6" gutterBottom>
          {fCurrency(TOTAL_BALANCE)}
        </Typography>

        <Stack direction="row" alignItems="center" flexWrap="wrap">
          <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: 'error.main',
                bgcolor: alpha(theme.palette.error.main, 0.16)
              })
            }}
          >
            <Iconify width={16} height={16} icon={PERCENT >= 0 ? trendingUpFill : trendingDownFill} />
          </IconWrapperStyle>

          <Typography variant="subtitle2" component="span">
            {PERCENT > 0 && '+'}
            {fPercent(PERCENT)}
          </Typography>
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
            &nbsp;so với tuần trước
          </Typography>
        </Stack>
      </Box>

      <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} width={120} height={80} />
    </Card>
  );
}

export default PurchasedBox
