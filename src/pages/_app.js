import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import light from '@styles/themes/light';
import {BaseStyles} from '@components/atoms';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={light}>
    <BaseStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default App;
