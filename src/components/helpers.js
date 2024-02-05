import { useState } from "react";

export const useCustom = () => {
  const [count, setCount] = useState(0);

  const handleAdd = (value) => {
    setCount(count + value);
  };
  const handleMinus = () => {
    if (count === 0) return;
    setCount(count - 1);
    console.log(count);
  };

  return {
    count,
    handleAdd,
    handleMinus,
  };
};
