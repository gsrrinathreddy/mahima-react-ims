import { fetchProducts } from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log("product", product.products);

  return (
    <>
      <h5>List of Products with their title</h5>
      {product.loading && <CircularProgress />}
      {!product.loading && product.error ? (
        <Typography>Error: {product.error}</Typography>
      ) : null}
      {!product.loading && product.products.length
        ? product.products.map((product) => {
            return <Typography>{product.description}</Typography>;
          })
        : null}
      <Button color="inherit" onClick={() => dispatch(fetchProducts())}>
        Fetch Products
      </Button>
    </>
  );
}
