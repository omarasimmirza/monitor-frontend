import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import React from "react";

const Home = ({ machines }) => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget
            machines={machines}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
