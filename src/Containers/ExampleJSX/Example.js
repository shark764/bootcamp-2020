import React, { useState } from 'react';

function Example(props) {
  const [value, setValue] = useState(true);

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

      {/* <ExampleInterno value={props.value} /> */}
    </div>
  );
}

export default Example;
