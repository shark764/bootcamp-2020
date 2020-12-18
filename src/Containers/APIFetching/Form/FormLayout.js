import React from 'react';

import { useForm } from 'react-hook-form';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
    status: currentValues.status === 'Active',
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input type="text" name="name" placeholder="name..." ref={register} />
      </p>
      <p>
        <input
          type="email"
          name="email"
          placeholder="email@com..."
          ref={register}
        />
      </p>
      <p>
        <select name="gender" ref={register}>
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </p>
      <p>
        <input type="checkbox" name="status" ref={register} />
        <label>Active?</label>
      </p>

      <p>
        <input type="submit" />
        <button type="reset" onClick={() => reset()}>
          Reset
        </button>
      </p>
    </form>
  );
}

export default FormLayout;
