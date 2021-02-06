import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

const App = ({ title }) => (
  <div>
    <div className="text-lg font-bold">{title}</div>
    <div className="text-indigo-500 text-2xl font-bold">From inside app.jsx...</div>
    <div className="text-indigo-500 text-4xl">Hola Mundo!!!</div>
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;

