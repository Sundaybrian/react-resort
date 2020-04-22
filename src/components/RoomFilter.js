import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../context/roomContext";

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    getUnique,
  } = context;

  // returns all unique rooms types
  let types = getUnique(rooms, "type");

  types = ["all", ...types];
  // creating an array of options
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // generate all the unique capacity
  let guests = getUnique(rooms, "capacity");
  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*  end select type*/}

        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        {/* end select guest */}
      </form>
    </section>
  );
};

export default RoomFilter;
