import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
const cartCtx = useContext(CartContext);
const price = `${props.price.toFixed(2)}`;
const enterAmountHandler = (amount) => {
  console.log(amount);
  cartCtx.addItem({
    name:props.name,
    price:props.price,
    amount:amount,
    id:props.id
  });
}
  return (
    <li className={classes.meal}>
        <div>
           <h3>{props.name}</h3>
           <div className={classes.description}>{props.description}</div>
           <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onEnterAmount = {enterAmountHandler} />
        </div>
    </li>
  )
}

export default MealItem;