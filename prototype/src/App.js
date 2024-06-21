import React from "react";
import Header from "./components/Header";
import MainSlide from "./components/MainSlide";
import MainUi from "./components/MainUi";
import MainContainer from "./components/MainContainer";
import MainKeyword from "./components/MainKeyword";
import MainReview from "./components/MainReview";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainSlide></MainSlide>
      <MainUi></MainUi>
      <MainContainer></MainContainer>
      <MainKeyword></MainKeyword>
      <MainReview></MainReview>
      <Footer></Footer>
    </div>
  );
}

export default App;
