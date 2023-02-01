import { Component } from "react";

class Guest extends Component {
  render() {
    const { guests } = this.props;
    const { color } = this.props;
    return (
      <div className="Guest-list">
        <div className="Guest-list-header">Guest List:</div>
        <div className="guestContainer">
          <div className="activeGuests">{guests}</div>
          <div className="avatar" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    );
  }
}
export default Guest;
