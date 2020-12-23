// import './App.css';
import Routing from './Containers/Routing';
import { Box, Grommet } from 'grommet';
import PageHeader from './Containers/Routing/PageHeader';
import { HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReduxExample from './Containers/ReduxExample';

import { themes } from './utils';

function App() {
  const selectedTheme = useSelector((state) => state.main.theme);

  return (
    <Grommet theme={themes[selectedTheme]}>
      <HashRouter>
        <PageHeader />
        <Box pad="medium">
          {/* <Box pad="large">
            <ReduxExample />
          </Box> */}

          <Routing />
        </Box>
      </HashRouter>
    </Grommet>
  );
}

export default App;
