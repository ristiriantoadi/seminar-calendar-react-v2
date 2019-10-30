import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "./main.css"; // webpack must be configured to do this

class Calendar extends React.Component {
  calendarRef = React.createRef();
  render() {
    return (
      <FullCalendar
        ref={this.calendarRef}
        defaultView="dayGridMonth"
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dateClick={this.handleClick}
        events={[
          {
            title: "Ristirianto Adi (F1D016078)", // a property!
            start: "2019-10-21", // a property!
            end: "2019-10-23", // a property! ** see important note below about 'end' **'
            backgroundColor: "green",
            color: "white"
          }
        ]}
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
