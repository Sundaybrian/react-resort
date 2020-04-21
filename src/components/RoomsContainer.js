import React, { Component } from "react";
import PropTypes from "prop-types";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { Link } from "react-router-dom";
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
        Rooms container
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    );
  }
}

export default RoomsContainer;
