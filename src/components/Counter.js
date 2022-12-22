import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
const counter=useSelector(state=>state.counter);
const incrementHandler=()=>
{
  dispatch({type:'increment'});
}
const decrementHandler=()=>
{
    dispatch({type:'decrement'});
}
const incrementHandler5=()=>
{
  dispatch({type:'increment', amount:2})
}
const decrementHandler5=()=>
{
    dispatch({type:'decrement', amount:2})
}
  const toggleCounterHandler = () => {};
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> { counter} </div>
      <div><button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button></div>
      <div><button onClick={incrementHandler5}>IncrementBy2</button>
      <button onClick={decrementHandler5}>DecrementBy2</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
