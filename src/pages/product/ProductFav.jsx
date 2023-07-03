import React , {useState , useEffect}from "react";
import Layout from "../../components/layout/main/Layout";
import Table from "../../components/common/table/Table";
import TableHeader from "../../components/common/table/TableHeader";
import TableBody from "../../components/common/table/TableBody";
import ToolBar from "../../components/common/toolbar/ToolBar";
import ProductCard from "../../components/common/ProductCard";

const ProductFav = () => {
  
  const [fav,setFav] = useState(true)
  useEffect(() => {
    setFav(true)
  });
  return (
    <Layout title={'FAVOURITE PRODUCTS'}>
      <ToolBar></ToolBar>
      <Table>
        <TableHeader/>
        <TableBody>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </TableBody>
      </Table>
    </Layout>
  );
};

export default ProductFav;