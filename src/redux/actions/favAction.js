export const addFav = (data) => {
    return {
      type: 'ADDFAV',
      payload: data
    };
  };
  
  export const removeFav = (data) => {
    return {
      type: 'REMOVEFAV',
      payload: data
    };
  };