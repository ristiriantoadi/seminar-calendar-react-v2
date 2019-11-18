import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import Modal from "Modal";

import "./main.css"; // webpack must be configured to do this

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      clickedEvent: {}
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  calendarRef = React.createRef();
  handleClose() {
    this.setState({
      showModal: false
    });
  }
  handleClick(info) {
    //showModal();
    const myEvent = {
      title: info.event.title,
      start:
        info.event.start.getYear() +
        1900 +
        "-" +
        (info.event.start.getMonth() + 1) +
        "-" +
        info.event.start.getDate()
    };
    this.setState({
      showModal: true,
      clickedEvent: myEvent
    });
  }
  render() {
    const someEvents = this.props.events.map(event => ({
      title: event.title,
      start: event.start
    }));
    return (
      <div>
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
          eventClick={this.handleClick}
          // aspectRatio={2.5}
        />
        <Modal
          event={this.state.clickedEvent}
          show={this.state.showModal}
          handleClose={this.handleClose}
        ></Modal>
      </div>
    );
  }
  // handleClick() {
  //   console.log("Clicked!");
  // }
  // clickEvent(info) {
  //   alert("Event: " + info.event.title);
  // }
}

export default Calendar;
