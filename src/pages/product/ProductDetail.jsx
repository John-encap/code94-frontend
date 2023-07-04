import React from "react";
import Layout from "../../components/layout/main/Layout";
import InputField from "../../components/common/input/InputField";
import TextField from "../../components/common/input/TextField";

const ProductEdit = () =>{
    return(
        <Layout>
            <div className="flex justify-between items-centerw-full h-20">
                <div className="w-[45%]">
                    <div className="w-full h-20"><InputField className='primary' label={'SKU'}></InputField></div>
                </div>
            </div>
            <div className="flex justify-between items-centerw-full h-20 gap-10">
                <div className="w-[45%]">
                    <div className="w-full h-20"><InputField className='primary' label={'Name'}></InputField></div>
                </div>
                <div className="w-[45%]">
                    <div className="w-full h-20"><InputField className='primary' label={'QTY'}></InputField></div>
                </div>
            </div>
            <TextField label={'Description'}></TextField>
        </Layout>
    )
}

export default ProductEdit