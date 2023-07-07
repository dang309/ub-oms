import { Card, CardHeader, CardContent, Button } from "@mui/material";

const Products = ({ handleOpenProductPickingModal }) => {
  return (
    <Card>
      <CardHeader title="Sản phẩm" />
      <CardContent>
        <Button variant="contained" onClick={handleOpenProductPickingModal}>
          Chọn sản phẩm
        </Button>
      </CardContent>
    </Card>
  );
};

export default Products;
