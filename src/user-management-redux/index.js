import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            //thay đổi tiêu đề của modal
            onClick={() => { this.props.addUser() }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}

//Sửa tên thẻ
const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => {
      let action = {
        type: "USER_EDIT",
        user: null
      };
      dispatch(action);
    }
  }
};

export default connect(null, mapDispatchToProps)(Home);
