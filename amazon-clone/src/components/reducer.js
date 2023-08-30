export const initialState={
    basket: [],
    user:null   //by default user null   // when user logged in or logged out. info store in store..
};
//context api and reducer are not the same thing but they are the same pattern===>both uses idea of global store to your apllication  and panal of dispatching action it store it but the reducer just listen it and do action of pushing and pulling

//selector (highly use in production environment)
export const getBasketTotal=(basket)=>                //it get the basket
    basket?.reduce((amount,item)=>item.price+amount,0);                                //reduce is function, uses of reduce is mapster the basket      //it iterate through basket and calculate total
//reduce(initial amount ,iterate through each amount)   //and 0 indicate "initial amount"


const reducer=(state,action)=>{
    //to check action happennig or not do in console
    console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,//store look preveviously
                basket:[...state.basket,action.item],  //add to basket
            };
        case 'REMOVE_FROM_BASKET':
            {
               const index=state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
               );
               let newBasket=[...state.basket];

               if(index>=0){
                newBasket.splice(index,1);

               }else{
                console.warn(`Cant remove product (id: {action.id}) as it is not in basket !`)
               }
             return{
                ...state,
                basket: newBasket
             }   
            }

            case 'SET_USER':
                return{
                    ...state,
                    user: action.user
                }
               { /*
                ...state,
                basket:state.basket.filter(item => item.id !==action.id)   //remove item whose id is these  */}
            default:
                return state;
    }
};

export default reducer;