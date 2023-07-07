import { Card, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { UploadMultiFile } from "src/components/upload";

const ThumbnailForm = ({ handleDrop, thumbnails }) => {
  return (
    <Grid container>
      <Grid item lg={4} md={12} sm={12}>
        <Typography variant="h6">Ảnh sản phầm</Typography>
        <Typography
          variant="body2"
          sx={{
            color: grey[500],
          }}
        >
          Ảnh cần rõ các góc của sản phẩm trong định dạng .jpg, .jpeg, .png và kích thước tối đa là 2mb
        </Typography>
      </Grid>
      <Grid item lg={8} md={12} sm={12}>
        <Card sx={{ p: 2 }} component="form" autoComplete="off">
          <UploadMultiFile
            showPreview
            maxSize={3145728}
            accept="image/*"
            files={[]}
            onDrop={handleDrop}
            // onRemove={handleRemove}
            // onRemoveAll={handleRemoveAll}
            // error={Boolean(touched.images && errors.images)}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default ThumbnailForm;
