import React from 'react';
import PropTypes from 'prop-types';
import './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => (
  <div className="Options">
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && (
      <button onClick={onResetFeedback}>Reset</button>
    )}
  </div>
);

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
