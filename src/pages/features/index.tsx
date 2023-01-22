import { useState, useEffect } from "react";

import { RootState, useDispatch, useSelector } from 'store/';
import { increment, decrement, incrementByAmount } from 'store/slices/featuresSlice';

const Features = ({ name }: { name: string }) => {
  // const [counter, setCounter] = useState<any>(false);

  const counter = useSelector((state: RootState) => state.features.counter)
  const dispatch = useDispatch();

  console.log({counter})

  useEffect(() => {
    dispatch(incrementByAmount(5))
    console.log('функйция запустилась после рендера')
  }, []);

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  console.log({ name })

  return (
    <div>
      features page
      <br />
      <div style={{ textAlign: 'center' }}>
        <h3>Counter: {counter}</h3>
        <button onClick={handleIncrement}>increment counter</button>
        <button onClick={handleDecrement}>decrement counter</button>
      </div>
    </div>
  );
};

export default Features;
