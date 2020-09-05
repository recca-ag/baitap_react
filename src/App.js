import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Baitap1 from "./Bai-tap1";
// import Baitap2 from "./Bai-tap2";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-events";
import ExampleHandlingEvent from "./handling-events/example.js";
//./ tới tên file
import State from "./state";
import ListKeys from "./list-keys";
import BaitapCar from "./Baitap-car";
import BaitapList from "./Baitap-list";
import Props from "./props";
import LiftingStateUp from "./lifting-state-up";
import LiftingStateUpCart from "./lifting-state-up-cart";
// import Home from "./user-management";

import HomeRedux from "./user-management-redux";
import LifeCycle from "./LifeCycle";

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElements />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleHandlingEvent />
      <State />
      <ListKeys />
      <BaitapCar />
      <BaitapList />
      <Props />
      <LiftingStateUp />
      <LiftingStateUpCart />
      {/* <Home /> */}
      <HomeRedux />
      <LifeCycle />
    </div>

  );
}

export default App;
