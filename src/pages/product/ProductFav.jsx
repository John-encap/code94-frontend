import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/main/Layout";
import Table from "../../components/common/table/Table";
import TableHeader from "../../components/common/table/TableHeader";
import TableBody from "../../components/common/table/TableBody";
import ToolBar from "../../components/common/toolbar/ToolBar";
import ProductCard from "../../components/common/ProductCard";
import { getFavourites } from "../../requests";

const ProductFav = () => {
  let favourites = "";

  try {
    favourites = localStorage.getItem("favList");
  } catch (err) {}

  const [products, setProducts] = useState([]);

  const fetchFavourites = async () => {
    try {
      const res = await getFavourites(favourites);

      if (res.data.success) {
        setProducts(res.data.relatedProducts);
        console.log(favourites);
        console.log(res.data.relatedProducts);
      }
    } catch (err) {}
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <Layout title={"FAVOURITE PRODUCTS"} gap={"gap-6"}>
      <ToolBar></ToolBar>
      <Table marginT={"mt-8"}>
        <TableHeader />
        <TableBody>
          {products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                sku={product.sku}
                name={product.name}
                image={product.images[0]}
                quantity={product.quantity}
                id={product._id}
              />
            );
          })}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default ProductFav;
