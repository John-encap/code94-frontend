const initialState={
    loggedIn:false,
    data:null
}

const userSlice=(state=initialState,action)=>{
    switch (action.type){
        case "LOGIN":
            return({
                loggedIn:true,
                data:action.payload
            })

        case "LOGOUT":
            return({
                loggedIn:false,
                data:null
            })
         
        default :
            return state
    }
}


export default userSlice