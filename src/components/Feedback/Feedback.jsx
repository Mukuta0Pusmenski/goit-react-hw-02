import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.module.css';

const Feedback = ({ feedback }) => (
  <div className="Feedback">
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;
