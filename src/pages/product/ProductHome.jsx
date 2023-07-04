import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/main/Layout";
import Table from "../../components/common/table/Table";
import TableHeader from "../../components/common/table/TableHeader";
import TableBody from "../../components/common/table/TableBody";
import ToolBar from "../../components/common/toolbar/ToolBar";
import ProductCard from "../../components/common/ProductCard";
import { deleteProduct, getAllProducts } from "../../requests";
import ProductSkelitonCard from "../../components/common/ProductSkelitonCard";
import { PiWarningCircleFill } from "react-icons/pi";

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message,setMessage] = useState(null);
  const [ID,setId] = useState(null);
  const [alertbox,setAlert] = useState(false);
  const [deleted,setDeleted] = useState(false)

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();

      if (res.data.success) {
        console.log(res.data.products);
        setLoading(false);
        setProducts(res.data.products);
      }else {
        setLoading(false); 
        setMessage(<p  className="text-xs text-red-500">Something went wrong.</p>); 
      }
    } catch (err) {
      setLoading(false);
      setMessage(<p  className="text-xs text-red-500">Something went wrong.</p>); 
    }
  };

  const handleDelete = async () =>{
    setAlert(false)
    try{
      const res = await deleteProduct(ID)
      console.log(res)
      setDeleted(true)
    }catch(err){
      console.log(err)
    }
    
  }

  const handleCancel = () =>{
    setAlert(false)
  }

  useEffect(() => {
    fetchProducts(); 
  },[deleted]);

  return (
    <Layout title={"PRODUCTS"} gap={"gap-6"}>
     {message}
      <ToolBar></ToolBar>
      <Table marginT={"mt-8"}>
        <TableHeader />
        <TableBody>
          {loading ? <>
          <ProductSkelitonCard/>
          <ProductSkelitonCard/>
          <ProductSkelitonCard/>
          <ProductSkelitonCard/>
          <ProductSkelitonCard/>
          </> : <>
          {products.map((product,key)=>{
            return <ProductCard key={key} id = {product._id} sku={product.sku} name={product.name} image={product.images[0]} quantity={product.quantity} setId={setId} setAlert={setAlert}/> 
          })}
          </>}
          {alertbox&&
            <div className="w-[370px] gap-3 h-[200px] border border-darkGray rounded-xl fixed bg-lightGray flex flex-col items-center">
              <PiWarningCircleFill className="h-10 w-10 text-red-600 mt-5"/>
              <div className="text-xl">ARE YOU SURE?</div>
              <div className="text-sm">You will not be able to undo this action if you proceed!</div>
              <div className="flex flex-row-reverse gap-3">
                <button onClick={handleDelete} className="text-white hover:bg-white py-1 hover:text-black hover:border hover:border-primary transition duration-200 bg-primary px-4 rounded-lg">Delete</button>
                <button onClick={handleCancel} className="flex hover:scale-105 py-1 text-primary transition duration-200 items-center justify-center border px-4 rounded-lg border-primary">Cancel</button>
              </div>
            </div>
            }
        </TableBody>
      </Table>
    </Layout>
  );
};

export default ProductHome;
