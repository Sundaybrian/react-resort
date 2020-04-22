import React, { Component } from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import Loading from "./Loading";
import { RoomContext } from "../context/roomContext";

class RoomsContainer extends Component {
  static contextType = RoomContext;

  render() {
    const { rooms, sortedRooms, loading } = this.context;

    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    );
  }
}

export default RoomsContainer;
