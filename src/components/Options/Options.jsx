import React from 'react';
import PropTypes from 'prop-types';
import './Options.module.css';

const Options = ({ onLeaveFeedback }) => (
  <div className="Options">
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
  </div>
);

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
