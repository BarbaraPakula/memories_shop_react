import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import ProductCard from "../../common/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

import { getProducts as listProducts } from "../../../redux/productReducer";
const Homepage = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilterProducts(
      products.filter((product) =>
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [products, search]);

  return (
    <div className={styles.homepage}>
      <div className={styles.search}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end"
          onChange={(e) => setSearch(e.target.value)}
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
