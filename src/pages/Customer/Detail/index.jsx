import { useState } from "react";
import { Box, Card, Typography, Grid, Stack, Tab, Tabs, CardHeader, Container, IconButton, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

import { capitalCase } from "change-case";

import EmptyContent from "src/components/EmptyContent";
import Iconify from "src/components/Iconify";
import Page from "src/components/Page";
import LiabilityBox from "./components/LiabilityBox";
import PurchasedBox from "./components/PurchasedBox";
import MyAvatar from "src/components/MyAvatar";
import { Link } from "react-router-dom";
import { fDate } from "src/utils/formatTime";
import Info from "./components/Info";
import History from "./components/History";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import { PATH_DASHBOARD } from "src/routes/paths";

const SupplierDetail = () => {
  const [currentTab, setCurrentTab] = useState("po-history");

  const ACCOUNT_TABS = [
    {
      value: "po-history",
      label: "Lịch sử đơn hàng",
      icon: <Iconify icon="" />,
      component: <EmptyContent />,
    },
    {
      value: "returns-history",
      label: "Lịch sử trả/nhập hàng",
      icon: <Iconify icon="" />,
      component: <EmptyContent />,
    },
    {
      value: "liability",
      label: "Nợ phải trả",
      icon: <Iconify icon="" />,
      component: <EmptyContent />,
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Page>
      <Container maxWidth="lg">
        <HeaderBreadcrumbs
          heading="Thông tin nhà cung cấp"
          links={[
            {
              name: "Trang chủ",
              href: PATH_DASHBOARD.overview,
            },
            {
              name: "Nhà cung cấp",
              href: PATH_DASHBOARD.management.inventory.supplier.all,
            },
            {
              name: "Thông tin",
              href: PATH_DASHBOARD.management.inventory.supplier.detail,
            },
          ]}
        />
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={8}>
              <Stack direction="column" spacing={2}>
                <Card sx={{ p: 2 }}>
                  <CardHeader
                    disableTypography
                    avatar={<MyAvatar />}
                    title={
                      <Typography variant="h6" color="text.primary">
                        Tên nhà cung cấp
                      </Typography>
                    }
                    subheader={
                      <Typography variant="caption" sx={{ display: "block", color: "text.secondary" }}>
                        Tên doanh nghiệp
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <LiabilityBox />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <PurchasedBox />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <Card sx={{ p: 2 }}>
                  <Stack spacing={5}>
                    <Tabs
                      value={currentTab}
                      scrollButtons="auto"
                      variant="scrollable"
                      allowScrollButtonsMobile
                      onChange={handleChangeTab}
                    >
                      {ACCOUNT_TABS.map((tab) => (
                        <Tab disableRipple key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
                      ))}
                    </Tabs>

                    {ACCOUNT_TABS.map((tab) => {
                      const isMatched = tab.value === currentTab;
                      return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                    })}
                  </Stack>
                </Card>
              </Stack>
            </Grid>

            <Grid item lg={4}>
              <Stack direction="column" spacing={2}>
                <Info />
                <History />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default SupplierDetail;
