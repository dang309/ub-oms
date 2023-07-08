// material
import { Container, Grid } from '@mui/material';

// components
import Page from 'src/components/Page';
// hooks
import useSettings from 'src/hooks/useSettings';

import {
  EcommerceBestSalesman,
  EcommerceCurrentBalance,
  EcommerceLatestProducts,
  EcommerceNewProducts,
  EcommerceProductSold,
  EcommerceSaleByGender,
  EcommerceSalesOverview,
  EcommerceSalesProfit,
  EcommerceTotalBalance,
  EcommerceWelcome,
  EcommerceYearlySales} from './components';

// ----------------------------------------------------------------------

const Overview = () => {
  const { themeStretch } = useSettings();

  return (
    <Page title="General: E-commerce | Minimal-UI">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <EcommerceProductSold />
          </Grid>
          <Grid item xs={12} md={4}>
            <EcommerceTotalBalance />
          </Grid>
          <Grid item xs={12} md={4}>
            <EcommerceSalesProfit />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceCurrentBalance />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceBestSalesman />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default Overview
