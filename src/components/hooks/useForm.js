import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(
    initialForm
  );

  const handleValue = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  
  const onResetForm = () => {
    setFormState(initialForm)
}
  return {
    formState,
    handleValue,
    onResetForm
  };
};
