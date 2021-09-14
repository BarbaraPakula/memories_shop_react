import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import { useDispatch, useSelector } from "react-redux";
// material ui
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Alert from "@material-ui/lab/Alert";
//components
import PriceRange from "../../common/PriceRange/PriceRange";
import ProductCard from "../../common/productCard/ProductCard";

//actions
import { getProducts as listProducts } from "../../../redux/productReducer";

const Homepage = (maxi) => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000000000);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  let prices = products.map((product) => product.price);
  let maxPrice = prices.reduce((a, b) => (a > b ? a : b), 0);
  let minPrice = prices.reduce((a, b) => (a < b ? a : b), prices[0]);

  useEffect(() => {
    setFilterProducts(
      products.filter((product) => {
        return (
          product.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) &&
          product.price >= min &&
          product.price <= max
        );
      })
    );
  }, [products, search, min, max]);

  const handleFilterChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.search}>
        <Grid
          justifyContent="center"
          container
          spacing={1}
          alignItems="flex-end"
          onChange={handleFilterChange}
          value={search}
        >
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search by name" />
          </Grid>
        </Grid>
        <Grid justifyContent="center" container spacing={0} m={5}>
          <PriceRange
            maxPrice={maxPrice}
            minPrice={minPrice}
            setMax={setMax}
            setMin={setMin}
          />
        </Grid>
      </div>
      <div>
        {filterProducts.length !== products.length ? (
          <Alert severity={filterProducts.length === 0 ? "warning" : "info"}>
            We have currently {filterProducts.length} products in this criteria
            in stock.
          </Alert>
        ) : (
          ""
        )}
      </div>

      <div className={styles.card}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          filterProducts.map((product) => (
            <div key={product._id} className={styles.card__item}>
              <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;
