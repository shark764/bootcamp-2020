import { Box, Button, TextInput } from 'grommet';
import { AddCircle, SubtractCircle } from 'grommet-icons';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions';

function ReduxExample() {
  const counter = useSelector((state) => state.example.counter);
  const dispatch = useDispatch();

  return (
    <Box>
      <TextInput type="number" name="" id="" value={counter} />

      <Button
        type="button"
        onClick={(event) => dispatch(decrement())}
        icon={<SubtractCircle />}
      />
      <Button
        type="button"
        onClick={(event) => dispatch(increment())}
        icon={<AddCircle />}
      />
    </Box>
  );
}

export default ReduxExample;
