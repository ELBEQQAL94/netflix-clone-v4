import React from "react";

// requests
import requests from "./services/requests";

// Components
import Row from "./components/Row";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner fetchData={requests.fetchTrending}/>
      <Row title="netflix originals" fetchData={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="trending now" fetchData={requests.fetchTrending}/>
      <Row title="top rated" fetchData={requests.fetchTopRated}/>
      <Row title="action movies" fetchData={requests.fetchActionMovies}/>
      <Row title="comedy movies" fetchData={requests.fetchComedyMovies}/>
      <Row title="horror movies" fetchData={requests.fetchHorrorMovies}/>
      <Row title="romance movies" fetchData={requests.fetchRomanceMovies}/>
      <Row title="documentaries" fetchData={requests.fetchDocumentaries}/>
      <Footer />
    </div>
  );
}

export default App;
