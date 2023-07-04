import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/favAction";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ sku, image, name, quantity, id , setAlert , setId}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(id);

  let favList=[''];

  try{
    favList = localStorage.getItem("favList");
  }catch(err){
    console.log(err);
  }

  const [isIdExists, setIsExist] = useState(false);

  const handleDelete = () => {
    setAlert(true)
    setId(id)
  };
  const handleEdit = () => {
    navigate('/product/edit/'+id)
  };
  const handleFavActive = () => {
    const checkExists = favList?.includes(id) 
    if (!checkExists) {
      dispatch(addFav(id));
      setIsExist(true);
    }
    console.log(favList);
  };
  const handleFavDeactive = () => {
    dispatch(removeFav(id));
    setIsExist(false);
  };
  useEffect(() => {
    setIsExist(favList?.includes(id));
  }, []);

  return (
    <div className="flex  w-full h-24 flex-col items-center">
      <div className="flex hover:bg-lightGray transition duration-200 cursor-pointer flex-row w-[92%] pl-[1%] h-full items-center">
        <div className="w-[18%] text-left text-darkGray">{sku}</div>
        <div className="w-[18%] text-left">
          <img className="w-20 h-20 rounded-md" src={image}></img>
        </div>
        <div className="w-[23%] text-left text-textBlack">{name}</div>
        <div className="w-[18%] text-left text-textBlack">{quantity}</div>
        <div className="flex w-[23%] text-primary gap-10 justify-center">
          <button className="h-5 w-5" onClick={handleDelete}>
            <RiDeleteBin7Fill className="hover:h-5 hover:w-5 transition-all duration-200" />
          </button>
          <button className="h-5 w-5" onClick={handleEdit}>
            <BsPencilFill className="hover:h-5 hover:w-5 transition-all duration-200" />
          </button>
          {isIdExists ? (
            <>
              <button className="h-5 w-5" onClick={handleFavDeactive}>
                <AiFillStar className="hover:h-5 hover:w-5 transition-all duration-200" />
              </button>
            </>
          ) : (
            <>
              <button className="h-5 w-5" onClick={handleFavActive}>
                <AiOutlineStar className="hover:h-5 hover:w-5 transition-all duration-200" />
              </button>
            </>
          )}
        </div>
      </div>
      <hr className="w-[92%]"></hr>
    </div>
  );
};

export default ProductCard;
