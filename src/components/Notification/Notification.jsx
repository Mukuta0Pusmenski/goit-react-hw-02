import React from 'react';
import PropTypes from 'prop-types';
import './Notification.module.css';

const Notification = ({ message }) => (
  <p className="Notification">{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
