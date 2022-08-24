import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
const cartCtx = useContext(CartContext);
console.log(cartCtx.items);
const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
console.log(totalAmount);


const cartItemAddHandler = (item) => {
cartCtx.addItem(item);
}
const cartItemRemoveHandler = (id) => {
cartCtx.removeItem(id);
}

    const cartItems =(
    <ul className={classes['cart-items']}>
  {cartCtx.items.map((item)=>(
    <CartItem 
    key={item.id}
    name={item.name}
    price={item.price}
    amount={item.amount}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
    />
  ))}
    </ul> );
  return (
    <Modal onClick={props.onCartClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCartClose} >Close</button>
            <button>Order</button>
        </div>
    </Modal>
  )
}

export default Cart;