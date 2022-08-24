import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const inputHandler = useRef();

    

    const submitHandler = (event) => {
        event.preventDefault();

        const enterAmount = inputHandler.current.value;
    const enterAmountNumber = +enterAmount;

    if(enterAmount.trim().length===0){
        return;
    }
    props.onEnterAmount(enterAmountNumber);
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        label='Amount'
        ref={inputHandler}
        input={{
            type:'number',
            id:'amount',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'0'
        }}
        />
    <button>+Add</button>
    </form>
    )
}

export default MealItemForm;