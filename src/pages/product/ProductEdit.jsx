import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/main/Layout";
import InputField from "../../components/common/input/InputField";
import TextField from "../../components/common/input/TextField";
import { useParams } from "react-router-dom";
import { getProductById, updateProductById } from "../../requests";

const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const getSingleProduct = async (id) => {
    try {
      const res = await getProductById(id);
      if (res.data.success) {
        console.log(res.data.details);
        setProduct(res.data.details);
      } else {
        console.log("failed to get data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProductById(id, product);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleProduct(id);
    console.log(product);
  }, []);
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-centerw-full h-20">
          <div className="w-[45%]">
            <div className="w-full h-20">
              <InputField
                onChange={(e) => {
                  setProduct({ ...product, sku: e.target.value });
                }}
                className="primary"
                value={product?.sku}
                label={"SKU"}
              ></InputField>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-centerw-full h-20 gap-10">
          <div className="w-[45%]">
            <div className="w-full h-20">
              <InputField
                onChange={(e) => {
                  setProduct({ ...product, name: e.target.value });
                }}
                className="primary"
                value={product?.name}
                label={"Name"}
              ></InputField>
            </div>
          </div>
          <div className="w-[45%]">
            <div className="w-full h-20">
              <InputField
                onChange={(e) => {
                  setProduct({ ...product, quantity: e.target.value });
                }}
                className="primary"
                value={product?.quantity}
                label={"QTY"}
              ></InputField>
            </div>
          </div>
        </div>
        <TextField
          onChange={(e) => {
            setProduct({ ...product, description: e.target.value });
          }}
          defaultValue={product?.description}
          label={"Description"}
        ></TextField>

        <div>
          {product?.images?.map((image) => {
            return (
              <img
                alt="image"
                className="w-[150px] h-[150px] object-cover"
                src={image}
              />
            );
          })}
        </div>

        <div className="flex w-full justify-end items-center">
          <button
            className="text-white h-[40px] mt-6 hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 bg-primary w-[150px] rounded-lg text-xs"
            type="submit"
          >
            save
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ProductEdit;
