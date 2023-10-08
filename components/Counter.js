import { React, useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [counterValue, counter] = useState(0);

  const handleClick = (action) => {
    switch (action) {
      case 'Increment':
        counter((prevState) => prevState + 1);
        break;
      case 'Decrement':
        counter((prevState) => prevState - 1);
        break;
      case 'Reset':
        counter((prevState) => prevState - prevState);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1> {title} </h1>
      <h1> {counterValue} </h1>
      <button type="button" onClick={() => handleClick('Increment')}> Increment </button>
      <button type="button" onClick={() => handleClick('Decrement')}> Decrement </button>
      <button type="button" onClick={() => handleClick('Reset')}> Reset </button>
    </div>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Counter',
};
