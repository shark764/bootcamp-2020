// import './App.css';
import Routing from './Containers/Routing';
import { Box, Grommet } from 'grommet';
import PageHeader from './Containers/Routing/PageHeader';
import { HashRouter } from 'react-router-dom';

const theme = {
  global: {
    colors: {
      brand: '#25424c',
      'accent-1': '#fb770d',
      'accent-2': '#ffa45b',
      'accent-3': '#ffebdb',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <HashRouter>
        <PageHeader />
        <Box pad="medium">
          <Routing />
        </Box>
      </HashRouter>
    </Grommet>
  );
}

export default App;
