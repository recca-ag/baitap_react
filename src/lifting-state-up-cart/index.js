import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json"

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: []
    };
  }

  handleDetailProduct = (product) => {

    console.log(product);
    this.setState({
      detailProduct: product
    });
  };

  timViTri = (id) => {
    return this.state.listCart.findIndex(product => {
      return product.maSP === id;
    })
  };

  //Chức năng thêm vào giỏ hàng
  hanldeAddCart = (product) => {
    const objProduct = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      donGia: product.giaBan,
      soLuong: 1
    };

    const index = this.timViTri(objProduct.maSP);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      //Cập nhật số lượng
      listCart[index].soLuong++;
    } else {
      //Thêm vào giỏ hàng
      listCart = [...this.state.listCart, objProduct];

    }
    this.setState({
      listCart

    }, () => {
      console.log(this.state.listCart);
    });

  };
  //chức năng xóa
  handleDelete = (product) => {
    console.log(product);
    const index = this.timViTri(product.maSP);
    if (index !== -1) {
      //Xóa SP trong listCart
      let listCart = [...this.state.listCart];
      listCart.splice(index, 1);
      this.setState({
        listCart
      });
    }
  };
  //Chức năng cập nhật tăng giảm số lượng
  handleTangGiamSL = (status, product) => {
    console.log(status, product);
    const index = this.timViTri(product.maSP);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      if (status) {
        //Tăng SL
        listCart[index].soLuong += 1;
      } else {
        //Giảm SL
        if (listCart[index].soLuong > 1) {
          listCart[index].soLuong -= 1;
        }
      }
      this.setState({
        listCart
      });
    }
  };

  //Hàm cộng dồn cho giỏ hàng
  tongSL = () => {
    return this.state.listCart.reduce((tong, product) => { return tong += product.soLuong; }, 0)
  }

  render() {
    const { listProduct, detailProduct, listCart } = this.state;


    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSL()})
          </button>
        </div>
        <DanhSachSanPham listProduct={listProduct} detailProduct={this.handleDetailProduct} addCart={this.hanldeAddCart} />
        {/* chức năng delete, truyền 1 props delete */}
        <Modal listCart={listCart} delete={this.handleDelete} tangGiamSL={this.handleTangGiamSL} />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
