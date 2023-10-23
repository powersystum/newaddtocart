const INIT_STATE ={
    carts :[]
};


export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
    case "ADD_CART" :
      const IteamIndex =state.carts.findIndex((iteam)=>iteam.id === action.payload.id);

      if(IteamIndex >=0){
        state.carts[IteamIndex].quantity += 1
      }else{
        const temp ={...action.payload,quantity : 1}
         return {
           ...state,
            carts :[...state.carts,temp]
       }

      }
       // return {
       //     ...state,
        //    carts :[...state.carts,action.payload]
      //  }

        case "RMV_CART" :
          const data = state.carts.filter((el)=> el.id !== action.payload)
          return{
            ...state,
            carts:data
          }


        default :
           return state
    }
}