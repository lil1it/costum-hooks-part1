import { useState } from "react";

export const useInput = (initialValue, inputType, validation) => {
  const [value, setValue] = useState(initialValue);
  const [required, setRequired] = useState(null);


  const type = inputType || "text";

  return {

    value,
    required,
    type,
    onChange: (e) => setValue(e.target.value),
    onBlur: (e) => {
      if (!e.target.value && validation) {
        setRequired("Заполните это поле!");
      } else {
        setRequired(null);
      }
    },
  };
};
