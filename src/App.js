// import './App.css';
import Routing from './Containers/Routing';
import { Box, Grommet } from 'grommet';
import PageHeader from './Containers/Routing/PageHeader';
import { HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReduxExample from './Containers/ReduxExample';

const themes = {
  light: {
    global: {
      colors: {
        brand: '#8bcaca',
        'accent-1': '#fea889',
        'accent-2': '#d4f4ec',
        'accent-3': '#ffd8c5',
      },
    },
  },
  dark: {
    global: {
      colors: {
        brand: '#121212',
        'accent-1': '#3700b3',
        'accent-2': '#03dac5',
        'accent-3': '#cf6679',
      },
    },
  },
  awsmcolor: {
    global: {
      colors: {
        brand: '#25424c',
        'accent-1': '#fb770d',
        'accent-2': '#ffa45b',
        'accent-3': '#ffebdb',
      },
    },
  },
  monokai: {
    global: {
      colors: {
        brand: '#272822',
        'accent-1': '#f92672',
        'accent-2': '#66d9ef',
        'accent-3': '#fd971f',
      },
    },
  },
  firefly: {
    global: {
      colors: {
        brand: '#272822',
        'accent-1': '#f92672',
        'accent-2': '#66d9ef',
        'accent-3': '#fd971f',
      },
    },
  },
  'warn-and-bold': {
    global: {
      colors: {
        brand: '#000000',
        'accent-1': '#062f4f',
        'accent-2': '#882601',
        'accent-3': '#813772',
      },
    },
  },
  elegant: {
    global: {
      colors: {
        brand: '#0b3c5d',
        'accent-1': '#328cc1',
        'accent-2': '#d9b310',
        'accent-3': '#1d2731',
      },
    },
  },
  vibrant: {
    global: {
      colors: {
        brand: '#000000',
        'accent-1': '#ec576b',
        'accent-2': '#4ec5c1',
        'accent-3': '#e5e338',
      },
    },
  },
};

function App() {
  const selectedTheme = useSelector((state) => state.main.theme);

  return (
    <Grommet theme={themes[selectedTheme]}>
      <HashRouter>
        <PageHeader />
        <Box pad="medium">
          <Box pad="large">
            <ReduxExample />
          </Box>

          <Routing />
        </Box>
      </HashRouter>
    </Grommet>
  );
}

export default App;
