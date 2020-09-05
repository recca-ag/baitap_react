import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actUserEdit } from "./../redux/actions";

class UserItem extends Component {

  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.userEdit(user)
            }
            }>
            Edit
          </button>
          <button className="btn btn-danger"
            onClick={() => {
              this.props.deleteUser(user.id)
            }}>Delete</button>
        </td>
      </tr>
    );
  }
}

//viết hàm delete gửi action về redux
const mapDispatchToProps = dispatch => {
  return {
    //DELETE USER
    deleteUser: (id) => {
      // let action = {
      //   type: DELETE_USER,
      //   id //id: id
      // };

      dispatch(actDeleteUser(id));
    },
    //EDIT USER
    userEdit: (user) => {

      dispatch(actUserEdit(user));
    }

  };
};
//Truyền lên redux....2 tham số, tham số truyền về không có để null, tham số truyền lên mapDispatchToProps
export default connect(null, mapDispatchToProps)(UserItem);
