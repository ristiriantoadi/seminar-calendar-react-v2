import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "./main.css"; // webpack must be configured to do this

class Calendar extends React.Component {
  calendarRef = React.createRef();
  render() {
    const someEvents = this.props.events.map(event => ({
      title: event.title,
      start: event.start
    }));
    return (
      <FullCalendar
        ref={this.calendarRef}
        defaultView="dayGridMonth"
        header={{
          center: "title",
          right: "prev,next today",
          left: ""
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dateClick={this.handleClick}
        events={someEvents}
        eventClick={this.clickEvent}
        // aspectRatio={2.5}
      />
    );
  }
  handleClick() {
    console.log("Clicked!");
  }
  clickEvent(info) {
    alert("Event: " + info.event.title);
  }
}

export default Calendar;
