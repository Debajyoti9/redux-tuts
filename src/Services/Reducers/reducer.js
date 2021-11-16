import {ADD_TO_CART,REMOVE_TO_CART} from '../constant';
const initialState = {
    cartData : []
}
//on the basis of actions we reduce /change something in the component and then push it into the redux store..
export default function cardItems(state = [],action){
    switch(action.type){
        case ADD_TO_CART:
            // console.warn("reducer",action);
            return[
                ...state,
                {cartData:action.data}
            ]
        case REMOVE_TO_CART:
                // console.warn("reducer",action);
                state.pop();
                return[
                    ...state,
                ]    
            //break;
         default:
             return state;   
    }

}