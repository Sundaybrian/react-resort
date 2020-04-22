import React, { createContext, Component } from "react";
import items from "../data";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    // items is the array from data it can be aliased since it is a default export
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));

    this.setState({
      rooms,
      featuredRooms,
      maxPrice,
      price:maxPrice,
      maxSize,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(arr) {
    let tempItems = arr.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => {
        return img.fields.file.url;
      });

      // generating a new room obj
      // spreading the fields, adding id and images
      let room = { ...item.fields, images, id };
      return room;
    });

    return tempItems;
  }

  getRoom = (slug) => {
    // fetching a single room
    // copying the rooms array
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (e) => {
    // used for form inputs changes in vlaues
    const target = e.target;
    // check the type of the event..if it is a checkbox,then set value to the value of the target.checked else target.value
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        // dynamically change whatever name proprty is in state and update the value
        [name]: value,
      },
      // then run the filterRooms depending with state change
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      maxPrice,
      minSize,
      breakfast,
      pets,
    } = this.state;

    // clone the rooms array
    let tempRooms = [...rooms];

    // transform values since some values will be strings
    capacity = parseInt(capacity);
    price = parseInt(price);

    if (type !== "all") {
      // if value is not all return all rooms with the new type
      // update the sorted rooms not rooms
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  getUnique = (arr, val) => {
    // arr is an array of items
    // val is the type of value that item has e.g item['type'] can be single,double etc
    // the we create an array of all the types and return a set(no duplicates)
    let items = [...new Set(arr.map((item) => item[val]))];
    return items;
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          getUnique: this.getUnique,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
