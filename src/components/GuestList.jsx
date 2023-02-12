import { Component } from "react";

class Guest extends Component {
  render() {
    return (
      <ul className="Guest-list">
        <div className="Guest-list-header">Guest List:</div>

        <span
          className="guestAvatar"
          style={{ backgroundColor: this.props.currentMember.color }}
        />
        <div className="activeGuests">{this.props.currentMember.username}</div>
        <br></br>
      </ul>
    );
  }

  // NE RADI !!!

  /*

  const { newGuest, newGuestColor } = this.props;

        <p>{newGuest}</p>
        <p>{newGuestColor}</p>


  renderGuests(guest) {
    const { guests } = this.props;
    <ul className="Guest-list">
      <div className="Guest-list-header">Guest List:</div>

      <span
        className="guestAvatar"
        style={{ backgroundColor: guests.clientData.color }}
      />
      <div className="activeGuests">{guests.clientData.username}</div>
      <br></br>
    </ul>;
  }
  */
}

export default Guest;
