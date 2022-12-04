import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toDate } from "date-fns";
import React from 'react'

const Calendar = () => {
  return (
    <div>Calendar</div>
  )
}

export default Calendar

const localizer = momentLocalizer(moment);

