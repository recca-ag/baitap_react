import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={(event) => {
      this.props.getKeyWord(event.target.value);
    }} />;
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getKeyWord: (keyword) => {
      let action = {
        type: "GET_KEYWORD",
        keyword
      };
      dispatch(action);
    }
  }
};

export default connect(null, mapDispatchToProps)(Search);
