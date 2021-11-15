import {ADD_TO_CART,REMOVE_TO_CART} from '../constant';
//action means what type of operation we want in redux that's thing deal with actions
export const addToCart = (data)=>{
    // console.warn("action",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart = (data)=>{
     console.warn("action",data);
    return{
        type:REMOVE_TO_CART,
    }
}