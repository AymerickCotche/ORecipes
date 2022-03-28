import * as PropTypes from 'prop-types';

import * as React from 'react';
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Loading from './Loading';
import './styles.css';

const App = (props: any) => {
  const { loading } = props;
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};
export default App;
