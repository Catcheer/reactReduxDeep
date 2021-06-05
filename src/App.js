import React from "react";
import { createStore, bindActionCreators } from "redux";
import { connect } from "react-redux";
import Sub from "./sub";
import reducer, { add } from "./reduxStore/index";
import "./styles.css";
const store = createStore(reducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

function App(props) {
  console.log("-----props------", props);
  const handleOnClick = () => {
    const count = Math.ceil(Math.random() * 10);
    console.log("count", count);
    // props.add(add(count));
    console.log(props.add(count));
  };
  return (
    <div className="App">
      <Sub onClick={handleOnClick} name="sub" age={props.num} />
    </div>
  );
}

const mapStateTpProps = (state) => {
  return {
    num: state.num
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ add }, dispatch)
  };
};

export default connect(mapStateTpProps, mapDispatchToProps)(App);
