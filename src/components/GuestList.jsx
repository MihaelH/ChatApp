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

/*import React, { useEffect, useState } from "react";

const Guest = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Guest;
*/
