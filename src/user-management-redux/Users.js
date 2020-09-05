import React, { Component } from "react";
import UserItem from "./UserItem";
//import connect
import { connect } from "react-redux";

class Users extends Component {
  renderTable = () => {
    let { userList, keyword } = this.props;
    userList = userList.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    if (userList && userList.length > 0) {


      return userList.map(user => {
        return <UserItem key={user.id} user={user}
        />
      });
    }
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}

          </tbody>
        </table>
      </div>
    );
  }
}

//Kéo props từ redux xuống
const mapStateToProps = state => {
  return {
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword
  };
};

//export connect từ reactredux
export default connect(mapStateToProps, null)(Users);
