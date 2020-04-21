import React, { createContext, Component } from "react";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    filteredRooms: [],
    loading: false,
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
