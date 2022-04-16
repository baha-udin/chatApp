import {useState} from 'react';

export const UseForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (typeForm, formValue) => {
      if (typeForm == 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [typeForm]: formValue});
    },
  ];
};
