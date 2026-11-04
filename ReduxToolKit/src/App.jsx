import react from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/features/counterSlice';

const App = () => {

  const [amount, setamount] = react.useState(0)
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <input type="number" value={amount} onChange={(e) => setamount(Number(e.target.value))} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
    </div>
  )
}

export default App