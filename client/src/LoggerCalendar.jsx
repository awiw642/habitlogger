import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, CalendarControls } from 'react-yearly-calendar';

const LoggerCalendar = () => (
  <div>
    <CalendarControls year={2017} />
    <Calendar />
  </div>
);

Calendar.propTypes = {};

export default LoggerCalendar;
