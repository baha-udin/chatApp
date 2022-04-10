import {useState} from 'react';

export const UseForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (typeForm, formValue) => {
      return setValues({...values, [typeForm]: formValue});
    },
  ];
};
