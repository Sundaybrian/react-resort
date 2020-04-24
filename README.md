# React Resort

### 22/04/2020

## By **[Brian Sunday](https://github.com/Sundaybrian/react-resort)**

## Description

This is a beach resort created in react that displays all the rooms in this make belief resort.Users can view rooms available and filter by various criterias.

## Setup/Installation Requirements

- `$ git clone` [react-resort](https://github.com/Sundaybrian/react-resort)
- `$ cd react-resort`
- `$ npm install` to install all dependencies
- `$ npm start` to launch the application
- open `localhost:3000` to view the app
- navigate to roomContext and paste for the following to be able to use the local data.js file

```javascript
    getData = () => {

      let rooms = this.formatData(items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((room) => room.price));
      let maxSize = Math.max(...rooms.map((room) => room.size));

      this.setState({
        rooms,
        featuredRooms,
        maxPrice,
        price: maxPrice,
        maxSize,
        sortedRooms: rooms,
        loading: false,
      });
  };

  componentDidMount() {
    // fetch date
    this.getData();
  }
```

## Known Bugs

- No known Bugs

## Technologies Used

- React
- Netlify
- Contentful
- Styled components

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### License

MIT (c) 2019 **[Brian Sunday](https://github.com/Sundaybrian/react-resort)**
