import { useState } from "react";
import Input from "./input";

function Counter() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(2.99);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana")



  const handlePlus = () => {
    setCount((prevCount) => {
        let sum = prevCount + 1;
        if (sum >= 5) {
          setDiscount(20);
          setPrice(2.39);
        }
        return sum;
      });
    };
  const handleMinus = () => {
    setCount((prevCount) => {
        let diff = prevCount - 1 > 0 ? (prevCount - 1) : 0;
        if (diff < 5) {
      setDiscount(0);
      setPrice(2.99)
        }

        return diff;
    })
  };

  const handlerChange = (value) => {
    setName(value);
  }

  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>

      <Input value={name} label="Product Name" onChange={handlerChange} />

    </>
  );
}
export default Counter;