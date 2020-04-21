import React, { Component } from "react";
import { RoomContext } from "../context/roomContext";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default class SingleRoom extends Component {
  static contextType = RoomContext;

  state = {
    slug: this.props.match.params.id,
    defaultBcg: defaultBcg,
  };

  render() {
    let { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      pets,
      breakfast,
      extras,
      images,
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room `}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
