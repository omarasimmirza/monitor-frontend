import Sidebar from "../../components/sidebar/Sidebar";
import "./compare.scss";
import Widget from "../../components/widget/Widget";
import React from "react";
import Chart from "../../components/chart/Chart";

const Compare = ({ machines }) => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget
            machines={machines}
          />
        </div>
        <div className="charts">
          <Chart 
            machines={machines}
            title="Compare" aspect={2 / 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Compare;
