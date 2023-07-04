const tokensForHeaders = () => {
    return {
        authorization: `Bearer ${localStorage.accessToken}`,
   }
}

export default tokensForHeaders