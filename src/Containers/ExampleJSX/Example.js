import { Text } from 'grommet';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Example(props) {
  const [value, setValue] = useState(true);
  const counter = useSelector((state) => state.example.counter);

  return (
    <div>
      {/* <p>Algo</p> */}

      {value && <span>A Es Verdadera</span>}
      {!value && <span>A Es Falsa</span>}

      {props.value ? <h1>It's true</h1> : <h3>It's false</h3>}

      <button type="button" onClick={(event) => setValue(true)}>
        V
      </button>
      <button type="button" onClick={(event) => setValue(false)}>
        F
      </button>
      <button
        type="button"
        onClick={(event) => props.setValue((lastValue) => !lastValue)}
      >
        Shared
      </button>

      <Text color="accent-1">El numero es {counter}</Text>

      {/* <ExampleInterno value={props.value} /> */}
    </div>
  );
}

export default Example;
