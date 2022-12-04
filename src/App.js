import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import NestedModal from "./Modal"
import moment from "moment";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


      class App extends Component {
  state = {
      events: [
        {
          title: "",
          start: "",
          end: "",
          desc: "",
          openSlot: false,
          openEvent: false,
          clickedEvent: {}
        }
      ]
    }
    
      
     
    
    handleSlotSelected(slotInfo) {
      console.log("Real slotInfo", slotInfo);
      this.setState({
        title: "",
        desc: "",
        start: slotInfo.start,
        end: slotInfo.end,
        openSlot: true
      });
    }
    handleEventSelected(event) {
      console.log("event", event);
      this.setState({
        openEvent: true,
        clickedEvent: event,
        start: event.start,
        end: event.end,
        title: event.title,
        desc: event.desc
      });
    }
    setTitle(e) {
      this.setState({ title: e });
    }
  
    setDescription(e) {
      this.setState({ desc: e });
    }
  
    handleStartTime = (event, date) => {
      this.setState({ start: date });
    };
  
    handleEndTime = (event, date) => {
      this.setState({ end: date });
    };
    setNewAppointment() {
      const { start, end, title, desc } = this.state;
      let task = { title, start, end, desc };
      let events = this.state.events.slice();
      events.push(task);
      
    }
    updateEvent() {
      const { title, desc, start, end, events, clickedEvent } = this.state;
      const index = events.findIndex(event => event === clickedEvent);
      const updatedEvent = events.slice();
      updatedEvent[index].title = title;
      updatedEvent[index].desc = desc;
      updatedEvent[index].start = start;
      updatedEvent[index].end = end;
      
    }
    deleteEvent() {
      let updatedEvents = this.state.events.filter(
        event => event["start"] !== this.state.start
      );
     
    }
  

      
  render() {
    return (
      <div className="App">
        <Calendar className="rbc-day-bg"
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          selectable={true} >
          timeslots={2}</Calendar>
      
      <NestedModal/>
      </div>
    );
  }
}

export default App;