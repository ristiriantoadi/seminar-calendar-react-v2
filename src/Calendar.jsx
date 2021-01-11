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
    // console.log("info.event.extendedProps: ");
    // console.log(info.event.extendedProps);
    console.log(info.event.start);
    const myEvent = {
      title: info.event.title,
      judul: info.event.extendedProps.judul,
      nim: info.event.extendedProps.nim,
      namaLengkap: info.event.extendedProps.namaLengkap,
      pembimbingDua: info.event.extendedProps.pembimbingDua,
      pembimbingSatu: info.event.extendedProps.pembimbingSatu,
      pengujiSatu: info.event.extendedProps.pengujiSatu,
      pengujiDua: info.event.extendedProps.pengujiDua,
      pengujiTiga: info.event.extendedProps.pengujiTiga,
      waktu: info.event.extendedProps.waktu,
      tanggal:
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
      title: event.namaLengkap + " (" + event.nim + ")",
      start: event.startDate,
      judul: event.judul,
      nim: event.nim,
      namaLengkap: event.namaLengkap,
      pembimbingDua: event.pembimbingDua,
      pembimbingSatu: event.pembimbingSatu,
      pengujiSatu: event.pengujiSatu,
      pengujiDua: event.pengujiDua,
      pengujiTiga: event.pengujiTiga,
      waktu: event.startDate.toString().split(" ")[1],
      backgroundColor:event.backgroundColor
    }));
    return (
      <div>
        <FullCalendar
          style={{"cursor":"pointer"}}
          ref={this.calendarRef}
          defaultView="dayGridMonth"
          header={{
            center: "title",
            right: "prev,next today",
            left: ""
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // dateClick={this.handleClick}
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
