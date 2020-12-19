import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonAdd } from '../../Components';

export function Example1(props) {
  console.log('props', props);
  return (
    <p style={{ color: props.color, backgroundColor: props.bgColor }}>
      {props.text}
    </p>
  );
}

export function Example2(props) {
  return <p>Hey!!</p>;
}

function Example3(params) {
  const ButtonAddV2 = styled(ButtonAdd)`
    background-color: transparent;
    font-family: arial;
    border-radius: 8px;
  `;

  return (
    <div className="examplex">
      <ButtonAddV2>Hola</ButtonAddV2>
      <Wrapper styles={{ backgroundColor: 'green' }}>
        <Example1 color="red" bgColor="yellow" text="Hola amigos" />
        <Example2 />
      </Wrapper>
    </div>
  );
}

export function Wrapper(props) {
  console.log('wrapper props', props);
  return (
    <div style={props.styles}>
      <p>Componentes!!!!!</p>
      {props.styles.backgroundColor !== 'black' && props.children}
    </div>
  );
}

export default Example3;
