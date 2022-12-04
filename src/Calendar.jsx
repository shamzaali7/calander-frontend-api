import React, { Component } from "react";
import { Calendar } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toDate } from "date-fns";

Calendar.momentLocalizer(moment);

class TheCalendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      title: "",
      start: "",
      end: "",
      desc: "",
      openSlot: false,
      openEvent: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {this.setState({ openEvent: false, openSlot: false });
  }
  //  Allows user to click on calendar and see existing task
  handleSlotSelected(slotInfo) {
    console.log("Real slotInfo", slotInfo);
    this.setState({title: "", desc: "", start: slotInfo.start, end: slotInfo.end, openSlot: true});
  }
  handleEventSelected(event) {
    console.log("event", event);
    this.setState({openEvent: true, clickedEvent: event, start: event.start, end: event.end, title: event.title, desc: event.desc});
  }
  setTitle(e) {this.setState({ title: e });
  }
  setDescription(e) {this.setState({ desc: e });
  }
  handleStartTime = (event, date) => {this.setState({ start: date });
  };
  handleEndTime = (event, date) => {this.setState({ end: date });
  };
  setNewTask() {
    const { start, end, title, desc } = this.state;
    let task = { title, start, end, desc };
    let events = this.state.events.slice();
    events.push(task);
    this.setState({ events });
  }
  updateEvent() {
    const { title, desc, start, end, events, clickedEvent } = this.state;
    const index = events.findIndex(event => event === clickedEvent);
    const updatedEvent = events.slice();
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = start;
    updatedEvent[index].end = end;
    this.setState({
      events: updatedEvent
    });
  }
  //  filters out specific task that is to be deleted and set that variable to state
  deleteEvent() {
    let updatedEvents = this.state.events.filter(event => event["start"] !== this.state.start);
    this.setState({ events: updatedEvents });
  }
    render() {
      console.log("render()");
      const eventActions = (
        <button label="Cancel"primary={false} keyboardFocused={true} onClick={this.handleClose}/>,
        <button label="Delete" secondary={true} keyboardFocused={true} onClick={() => {this.deleteEvent();}}/>,
        <button label="Confirm Edit" primary={true} keyboardFocused={true} onClick={() => {this.updateEvent();}}/> 
      )
        const taskActions = (
        <button label="Cancel" secondary={true} onClick={this.handleClose} />,
        <button label="Submit" primary={true} keyboardFocused={true} onClick={() => {this.handleClose();}}/>
      )
    return (
      <div id="Calendar">
        {/* react-big-calendar library utilized to render calendar*/}
        <Calendar
          events={this.state.events}
          views={["month"]}
          timeslots={2}
          defaultView="month"
          defaultDate={new Date()}
          selectable={true}
          onSelectEvent={event => this.handleEventSelected(event)}
          onSelectSlot={slotInfo => this.handleSlotSelected(slotInfo)}
        />

        {/* Modal for booking new appointment */}
        
      </div>
    );
    }}
    
export default TheCalendar;
