import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
      <div>Hola Mundo!!</div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
