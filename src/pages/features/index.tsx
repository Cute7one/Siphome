import { useState, useEffect } from "react";

const Features = ({ name }: { name: string }) => {
  const [counter, setCounter] = useState<any>(false);

  useEffect(() => {
    console.log('функйция запустилась после рендера')
  }, [counter]);

  const handleIncrement = () => {
    setCounter(false)
  }

  const handleDecrement = () => {
    setCounter(true)
  }

  console.log({ name })

  return (
    <div>
      features page
      <br />
      <div style={{ textAlign: 'center' }}>
        <h3>Counter:</h3>
        <button onClick={handleIncrement}>increment counter</button>
        <button onClick={handleDecrement}>decrement counter</button>
        <p>{counter ? <>users</> : null}</p>
      </div>
    </div>
  );
};

export default Features;
