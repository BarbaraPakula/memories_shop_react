import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div className={styles.children}>{children}</div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
