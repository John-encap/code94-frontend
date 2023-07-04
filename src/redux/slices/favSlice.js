const initialState = {
    data: []
  };
  
  const favSlice = (state = initialState, action) => {
    switch (action.type) {
      case "ADDFAV":
        const updatedData = [...state.data, action.payload];
        localStorage.setItem("favList", updatedData);
        return {
          ...state,
          data: updatedData
        };
  
      case "REMOVEFAV":
        const filteredData = state.data.filter(id => id !== action.payload);
        localStorage.setItem("favList", filteredData);
        return {
          ...state,
          data: filteredData
        };
  
      default:
        return state;
    }
  };
  
  export default favSlice;