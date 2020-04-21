import React, { useContext } from "react";
import { RoomContext } from "../context/roomContext";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
  const roomContext = useContext(RoomContext);

  let { featuredRooms, loading } = roomContext;
  let rooms = featuredRooms.map((room) => {
    return <Room room={room} key={room.id} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
