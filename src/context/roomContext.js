import React, { createContext, Component } from "react";
import items from "../data";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  componentDidMount() {
    // items is the array from data it can be aliased since it is a default export
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    this.setState({
      rooms,
      featuredRooms,
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

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
