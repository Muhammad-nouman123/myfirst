import classes from './HeaderCartButton.module.css';
import { BsCart2} from "react-icons/bs";
import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
const[btnstate,setBtnState] = useState(false);
  const cartCtx = useContext(CartContext);
const{items} = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curValue,item)=>{
return curValue + item.amount;
  },0);

  useEffect(()=>{
if(items.length===0){
  return;
}

setBtnState(true);

const timer = setTimeout(()=>{
setBtnState(false);
},300);

return () => {
  clearTimeout(timer);
}
  },[items]);

  const btncls = `${classes.button} ${btnstate ? classes.bump : ''} `;
  return (
    <button className={btncls} onClick={props.onClick} >
    <span className={classes.icon}> <BsCart2 size={23} /> </span>
    <span>Cart</span>
    <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  )
}

export default HeaderCartButton;