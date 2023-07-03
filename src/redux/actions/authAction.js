export const logIn = (data) => {
    return {
      type: 'LOGIN',
      payload: data
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };