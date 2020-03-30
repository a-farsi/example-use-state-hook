import React, { useState } from "react";

export const useForm = initialVallue => {
  const [values, setValues] = useState(initialVallue);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
