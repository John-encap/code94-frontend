import React, { useRef, useState } from "react";
import Layout from "../../components/layout/main/Layout";
import InputField from "../../components/common/input/InputField";
import TextField from "../../components/common/input/TextField";
import { addProduct } from "../../requests";

const ProductAdd = () => {
  const [details, setDetails] = useState({});
  const [images, setImages] = useState([]);

  const inputFile = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    for (let key in details) {
      if (key === "images") {
        details.images.forEach((image, index) => {
          formData.append(`images[${index}]`, image);
        });
      } else {
        formData.append(key, details[key]);
      }
    }

    for (let entry of formData) {
      console.log(entry);
    }

    try {
      const res = await addProduct(formData);
      if (res.data.success) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getImage = (e) => {
    const selectedImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };

  return (
    <Layout title={"PRODUCTS"} gap={"mt-20"}>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-centerw-full h-20 mt-10">
          <div className="w-[45%]">
            <div className="w-full h-20">
              <InputField
                type={"text"}
                onChange={(e) => {
                  setDetails({ ...details, sku: e.target.value });
                }}
                className="primary"
                label={"SKU"}
              ></InputField>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-centerw-full h-20 gap-10">
          <div className="w-[45%]">
            <div className="w-full h-20">
              <InputField
                type={"text"}
                onChange={(e) => {
                  setDetails({ ...details, name: e.target.value });
                }}
                className="primary"
                label={"Name"}
              ></InputField>
            </div>
          </div>
          <div className="w-[45%]">
            <div className="w-full h-20">
              <InputField
                type={"number"}
                onChange={(e) => {
                  setDetails({ ...details, quantity: e.target.value });
                }}
                className="primary"
                label={"QTY"}
              ></InputField>
            </div>
          </div>
        </div>
        <TextField
          onChange={(e) => {
            setDetails({ ...details, description: e.target.value });
          }}
          label={"Description"}
        ></TextField>

        <div className="flex mt-6 flex-row gap-4 flex-wrap items-center">
          {images.map((image) => {
            return (
              <img
                alt="image"
                className="w-[150px] h-[150px] object-cover"
                src={image}
              />
            );
          })}
          <div
            onClick={() => {
              inputFile.current.click();
            }}
          >
            <input
              onChange={getImage}
              ref={inputFile}
              type="file"
              style={{ display: "none" }}
              multiple
            />
            <p className="text-sm text-primary cursor-pointer">Add Images</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-end">
          <button
            type="submit"
            className="text-white h-[40px] mt-6 hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 bg-primary w-[150px] rounded-lg text-xs"
          >
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ProductAdd;
