import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import {Spinner, Navbar, NavbarBrand} from "reactstrap"
import {ActorsList} from "./components/actors/ActorsList"


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoading: true,
      actors: []
    };
  }

  componentDidMount(){
    this.fetchActors()
  }

  fetchActors = async() => {
    const res = await fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en"
    );
    const data = await res.json()
    this.setState({ actors : data.results, isLoading: false });
  }

render() {
  const { isLoading, actors } = this.state;
  return (
    <div className="App">
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/logo-white.svg"
            style={{
              height: 40,
              marginRight: "20px",
              //width: 40,
            }}
          />
          Welcome to our Actors API
        </NavbarBrand>
      </Navbar>
    
      {isLoading ? (
        <div className="spinner">
          <Spinner>Loading...</Spinner>
        </div>
      ) : (
        <ActorsList actors={actors} />
      )}
    </div>
  );
  }
}
 export default App;
