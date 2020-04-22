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
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;

    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("hello filter");
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
