import React, { Component } from "react";
import { RoomContext } from "../context/roomContext";

export class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let value = this.context;
    return <div>hello from FeaturedRooms </div>;
  }
}

export default FeaturedRooms;
