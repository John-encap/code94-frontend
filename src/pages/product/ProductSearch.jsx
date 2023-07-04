import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/main/Layout";
import Table from "../../components/common/table/Table";
import TableBody from "../../components/common/table/TableBody";
import ToolBar from "../../components/common/toolbar/ToolBar";
import SearchResultCard from "../../components/common/SearchResultCard";
import { useParams } from "react-router-dom";
import { searchProduct } from "../../requests";

const ProductSearch = () => {
  const { search } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await searchProduct(search);

      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts(); 
  }, [search]);
  return (
    <Layout title={"PRODUCTS"} gap={"gap-6"}>
      <ToolBar></ToolBar>
      <h5 className="font-semibold text-darkGray ml-10">
        {products.length} results found !
      </h5>
      <Table>
        <TableBody>
          {products.map((product) => {
            return (
              <SearchResultCard
                key={product._id}
                name={product.name}
                sku={product.sku}
                description={product.description}
                id={product._id}
              />
            );
          })}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default ProductSearch;
