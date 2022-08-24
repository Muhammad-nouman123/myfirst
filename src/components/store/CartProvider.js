import React, { useReducer } from 'react'
import CartContext from './cart-context';

const initialState = {
  items:[],
  totalAmount:0
};

const cartReducer = (state,action) => {
if(action.type==="ADD"){

const updatedtotalAmount = state.totalAmount + action.items.price * action.items.amount;
const existingCartItemIndex = state.items.findIndex((item)=>{
    return item.id === action.items.id;
  });
const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems,updatedItem;
      if(existingCartItem){
       updatedItem={
        ...existingCartItem,
        amount:existingCartItem.amount + action.items.amount
       }
       updatedItems=[...state.items];
       updatedItems[existingCartItemIndex] = updatedItem;
      }
      else{
      updatedItems = state.items.concat(action.items);
      }
return {
  items:updatedItems,
  totalAmount:updatedtotalAmount
}
}
if(action.type==="Remove"){
  const existingCartItemIndex = state.items.findIndex((item)=>{
   return item.id === action.id;
  });
const existingCartItem = state.items[existingCartItemIndex];
const updatedtotalAmount = state.totalAmount - existingCartItem.price;
let updatedItems;
if(existingCartItem.amount===1){
 updatedItems = state.items.filter((item)=>item.id !== action.id);
}else{
 const updatedItem = {...existingCartItem,amount:existingCartItem.amount-1} 
 updatedItems=[...state.items];
 updatedItems[existingCartItemIndex]= updatedItem;
}
return {
  items:updatedItems,
  totalAmount:updatedtotalAmount
}
}
return initialState;
}

const CartProvider = (props) => {

  const[cartState,dispatchCartState] = useReducer(cartReducer,initialState);

const addItemToCartHandler = (item) => {
dispatchCartState({type:"ADD" , items:item});
}
const removeItemFromCartHandler = (id) => {
  dispatchCartState({type:"Remove" , id:id});
}


const cartContext ={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
}

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;