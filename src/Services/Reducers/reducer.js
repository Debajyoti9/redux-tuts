import {ADD_TO_CART} from '../constant';
const initialState = {
    cartData : []
}
//on the basis of actions we reduce /change something in the component and then push it into the redux store..
function cardItems(state = initialState,action){

    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cartData:action.data
            }
            break;
         default:
             return state;   
    }

}