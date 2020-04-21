import React, { useContext } from "react";
import { RoomContext } from "../context/roomContext";
import Loading from "./Loading";

const FeaturedRooms = () => {
  const roomContext = useContext(RoomContext);

  let { featuredRooms } = roomContext;
  console.log(featuredRooms);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default FeaturedRooms;
