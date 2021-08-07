import React from "react";
import styles from "./Homepage.module.scss";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts as listProducts } from "../../../redux/productReducer";
const Homepage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className={styles.card}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <div className={styles.card__item}>
              <ProductCard
                key={product._id}
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
