import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      //tạo thêm state useredit
      userEdit: null,
      keyword: ""
    };
  }
  //Hàm tìm vị trí
  timViTri = (id) => {
    return this.state.userList.findIndex(user => {
      return id === user.id;
    })
  };

  //Hàm delete
  handleDeleteUser = (id) => {
    const index = this.timViTri(id);
    let userList = [...this.state.userList];
    if (index !== -1) {

      userList.splice(index, 1);
      this.setState({
        userList
      });
    }
  };

  //Hàm AddUser
  handleOnSaveUser = (user) => {
    console.log(user);
    if (user.id) {
      //UPDATE
      const userList = [...this.state.userList]
      const index = this.timViTri(user.id);

      if (index !== -1) {
        userList[index] = user;

        this.setState({
          userList,
          //xét lại state cho userEdit
          userEdit: user

          //về nhà tim hiểu ref
        });
      }


    } else {
      //ADDUSER
      const userList = [...this.state.userList];
      //test id -->hệ cơ số đẹp hơn
      const id = Math.random().toString(36).substr(2, 5);
      userList.push({ ...user, id });

      this.setState({
        userList,
      });
    }




    //Cách 2
    //this.setState(state=>{
    //   return {
    //     userList: [...this.state.userList, {...user,id:Math.random()*100}]
    //   }
    // })
  }
  //Hàm cập nhật
  handleGetUserEdit = (user) => {
    this.setState({
      userEdit: user
    })

  };

  //Chức năng Search
  handleGetKeyWord = (keyword) => {

    //cập nhật biến đặt là let
    // let userList = [...this.state.userList];

    // userList = userList.filter((item) => {
    //   return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // });

    this.setState({
      keyword
    });
  };

  render() {
    let { userList, keyword } = this.state;
    // let userList = [...this.state.userList];

    userList = userList.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyWord} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            //thay đổi tiêu đề của modal
            onClick={() => {
              this.setState({
                userEdit: null
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users userList={userList} deleteUser={this.handleDeleteUser} getUserEdit={this.handleGetUserEdit} />
        <Modal
          //truyền props vào modal
          userEdit={this.state.userEdit}
          //addUser={this.handleAddUser} 
          onSave={this.handleOnSaveUser}
        />
      </div>
    );
  }
}

export default Home;
