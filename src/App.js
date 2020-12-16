import logo from './logo.svg';
import './App.css';
import ExampleX, { Example1, Example2, Wrapper } from './Containers/ExampleJSX';
import Example from './Containers/ExampleJSX/Example';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <div>
          <p>Hola, estoy usando React.js</p>
        </div>

        <Example value={value} setValue={setValue} />
        <Example value={value} setValue={setValue} />
        <Example value={value} setValue={setValue} />

        <ExampleX />
        <Example1 text="Hey you!" color="blue" bgColor="orange" />
        <Example2 />

        <Wrapper styles={{ backgroundColor: 'lightgreen' }}>
          <Example1 />
          <Example2 />
          <Example2 />
          <Example2 />
          <Example2 />
        </Wrapper>

        <Wrapper styles={{ backgroundColor: 'lightblue' }}>
          <h1>Celeste</h1>
          <Example1 />
          <Example2 />
        </Wrapper>
      </main>
    </div>
  );
}

export default App;
