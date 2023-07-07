import { Box, Card, CardContent,CardHeader, Container, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Iconify from "src/components/Iconify";

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

const Info = () => {
  return (
    <Card>
      <CardHeader title="Thông tin liên hệ" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <IconStyle icon="material-symbols:person-book" />
          <Typography variant="body2">Nguyễn Hải Đăng</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon="material-symbols:stacked-email" />
          <Typography variant="body2">hada.nguyen309@gmail.com</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon="material-symbols:contact-phone-rounded" />
          <Typography variant="body2">0836 404 231</Typography>
        </Stack>

        <Stack direction="row">
          <IconStyle icon="material-symbols:home-pin-rounded" />
          <Typography variant="body2">139E Trần Văn Mười, xã Xuân Thới Thượng, Huyện Hóc Môn, Hồ Chí Minh, Việt Nam</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Info;
