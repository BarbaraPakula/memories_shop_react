import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import ProductCard from "../../common/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Alert from "@material-ui/lab/Alert";

import { getProducts as listProducts } from "../../../redux/productReducer";
const Homepage = () => {
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

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "setSearch":
        setSearch(e.target.value);
        break;
      case "SetMin":
        setMin(e.target.value);
        break;
      case "SetMax":
        setMax(e.target.value);
        break;
      default:
        break;
    }
  };


  return (
    <div className={styles.homepage}>
      <div className={styles.search}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          onChange={(e) => handleFilterChange(e, "setSearch")}
          value={search}
        >
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search Products" />
          </Grid>
        </Grid>
      </div>
      <div>
        <input
          type="number"
          min={0}
          step={100}
          name="minPrice"
          onChange={(e) => handleFilterChange(e, "SetMin")}
          placeholder={`Filter by min price (current min price in shop: ${minPrice})`}
        ></input>

        <input
          min={0}
          max={100000}
          step={100}
          type="number"
          name="maxPrice"
          onChange={(e) => handleFilterChange(e, "SetMax")}
          placeholder={`Filter by max price (current max price in shop ${maxPrice})`}
        ></input>

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
