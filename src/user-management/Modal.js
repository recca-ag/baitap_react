import React, { Component } from "react";

class Modal extends Component {
  //setstate
  constructor(props) {
    super(props);
    this.state = {

      values:
      {
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      },
      errors: {
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "",
      },

    };
    console.log("Contrustor");
  };

  //LifeCycle cho hàm edit-->1 vòng đời-->đổi mới edit
  //componentWillReceiveProps chạy khi props từ component Cha truyền vào thay đổi
  //componentWillReceiveProps chỉ chạy khi được viết tại component con-->app không truyền vô index 1 props nào
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        values: {
          ...this.state.values,
          id: nextProps.userEdit.id,
          username: nextProps.userEdit.username,
          name: nextProps.userEdit.name,
          email: nextProps.userEdit.email,
          phoneNumber: nextProps.userEdit.phoneNumber,
          type: nextProps.userEdit.type
        }
      });
    } else {
      //ADD-reset từng ô input cho value rỗng
      this.setState({
        values: {
          ...this.state.values,
          id: "",
          username: "",
          name: "",
          email: "",
          phoneNumber: "",
          type: ""
        }
      });
    }
  }

  //viết listerral
  handleChange = (event) => {
    const { value, name } = event.target;
    //cách 1 nếu setstate không sử dụng lại state sử dụng lại state hiện tại
    // const state = this.state;
    // this.setState({
    //   values: {
    //     ...state.values,
    //     [name]: value,
    //   }

    // });

    //cách 2 viết state bằng callback function-->nếu setstate có sử dụng lại state hiện tại
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };
  //Viết hàm handle Blur
  handleBlur = (event) => {
    const { value, name } = event.target;
    // if (name === 'username') {
    //   this.setState((state) => {
    //     return {
    //       errors: {
    //         ...state.errors,
    //         [name]: "Username không được để trống",
    //       }
    //     };
    //   });
    // }
    const errorMessage = this.validate(name, value);

    this.setState((state) => {
      return {
        errors: {
          ...state.errors,
          [name]: errorMessage,
        },
      };
    });

  };
  //Viết hàm handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();//ngăn không load lại trang
    let isValid = true;
    for (let key in this.state.values) {
      const errorMessage = this.validate(key, this.state.values[key]);
      if (errorMessage) {
        isValid = false;
      }
      //Cách 1 luôn đảm bảo state mới nhất
      this.setState((state) => {
        return {
          errors: {
            ...state.errors,
            [key]: errorMessage,
          },
        };
      });
    }
    //Nếu là true return lại
    if (!isValid) return;
    //Thêm User
    //this.props.addUser(this.state.values);
    //truyền thông tin user ra ngoài index để thêm
    this.props.onSave(this.state.values);
  };

  //viết hàm validate
  validate = (name, value) => {
    let errorMessage = "";
    if (name === 'username') {
      errorMessage = !value ? "Username không được để trống" : "";
    }
    if (name === 'name') {
      errorMessage = !value ? "Name không được để trống" : "";
    }
    if (name === 'email') {
      if (!value) {
        errorMessage = "Email không được để trống";
      } else {
        const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
        errorMessage = !isValid ? "Email không hợp lệ" : "";
      }
    }
    if (name === 'phoneNumber') {
      errorMessage = !value ? "phoneNumber không được để trống" : "";
    }
    //return errormessage
    return errorMessage;
  }

  //Viết hàm EDIT

  render() {
    console.log(this.state.values)
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* thay đổi tiêu đề của modal */}
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" name="username" className="form-control" value={this.state.values.username}
                    onChange={(event) => this.handleChange(event)}
                    onBlur={this.handleBlur} />
                  {/* {this.state.errors.username ? (<div className="alert alert-danger"><span>{this.state.errors.username}</span></div>) : null} */}
                  {this.state.errors.username && (<div className="alert alert-danger"><span>{this.state.errors.username}</span></div>)}
                  {/* onChange={(event) => this.setState({ username: event.target.value })} */}
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" className="form-control" value={this.state.values.name}
                    onChange={(event) => this.handleChange(event)}
                    onBlur={this.handleBlur} />
                  {this.state.errors.name && (<div className="alert alert-danger"><span>{this.state.errors.name}</span></div>)}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" name="email" className="form-control" value={this.state.values.email}
                    onChange={(event) => this.handleChange(event)}
                    onBlur={this.handleBlur} />
                  {this.state.errors.email && (<div className="alert alert-danger"><span>{this.state.errors.email}</span></div>)}
                </div>
                <div className="form-group">
                  <label>phone Number</label>
                  <input type="text" name="phoneNumber" className="form-control" value={this.state.values.phoneNumber}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} />
                  {this.state.errors.phoneNumber && (<div className="alert alert-danger"><span>{this.state.errors.phoneNumber}</span></div>)}
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select name="type" className="form-control" value={this.state.values.type}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}>
                    {/* <option value="">Vui lòng chọn</option> */}
                    <option value="USER">USER</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success"
                // onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
