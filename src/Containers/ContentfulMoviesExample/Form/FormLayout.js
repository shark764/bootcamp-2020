import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
import { Clock, Money } from 'grommet-icons';
import React from 'react';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const [value, setValue] = React.useState(defaultValues);

  return (
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
      }}
      onReset={() => setValue(defaultValues)}
      onSubmit={(event) => {
        console.log('Submit', event.value, event.touched);
        onSubmit(event.value);
      }}
    >
      <FormField label="Title" name="title">
        <TextInput name="title" />
      </FormField>

      <FormField label="Directed by" name="directedBy">
        <TextInput name="directedBy" />
      </FormField>

      <FormField label="Distributed by" name="distributedBy">
        <TextInput name="distributedBy" />
      </FormField>

      <FormField label="Budget" name="budget">
        <TextInput type="number" name="budget" icon={<Money />} />
      </FormField>

      <FormField label="Box office" name="boxOffice">
        <TextInput type="number" name="boxOffice" icon={<Money />} />
      </FormField>

      <FormField label="Release date" name="releaseDate">
        <DateInput name="releaseDate" format="yyyy-mm-dd" />
      </FormField>

      <FormField label="Running time" name="runningTime">
        <TextInput type="number" name="runningTime" icon={<Clock />} />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button label="Cancel" />
        <Button type="reset" label="Reset" />
        <Button type="submit" label="Submit" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
