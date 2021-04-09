import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "background-color": "",
      color: "",
      data: [],
      error: "",
      rand: 0,
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => this.setState({ data: res.data }))
      .catch((error) => this.setState({ error: error }));
  }

  handleNumber = () => {
    this.setState({ rand: Math.floor(Math.random() * this.state.data.length) });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Card d={this.state.data[this.state.rand]} />
        <button className="button" onClick={this.handleNumber}>
          Change Country
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;
