import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";

const Dashboard = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    s1.async = false;
    document.body.appendChild(s1);

    const s0 = document.createElement("script");
    s0.src = "/js/admin.js";
    s0.async = false;
    document.body.appendChild(s0);

    const s2 = document.createElement("script");
    s2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    s2.async = false;
    document.body.appendChild(s2);

    const s3 = document.createElement("script");
    s3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    s3.async = false;
    document.body.appendChild(s3);

    return () => {
      document.body.removeChild(s1);
      document.body.removeChild(s0);
      document.body.removeChild(s2);
      document.body.removeChild(s3);
    }
  }, [])
  const [order, setOrder] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_all_order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

    })
      .then((res) => res.json())
      .then((data) => setOrder(data))


  }, [])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

    })
      .then((res) => res.json())
      .then((data) => setUser(data))


  }, [])


  // console.log(order);

  const thanhcong = order.filter((order) => order.status === "success");
  const dangxuly = order.filter((order) => order.status === "Pending");
  const doanhso = order.reduce((sum, order) => sum + order.total_price, 0);
  const tatcadonhang = order.length;

  const xoa = (e, id) => {
    e.preventDefault();
    alert("Bạn có muốn xóa đơn hàng không?")
    fetch('http://127.0.0.1:8000/api/order/' + id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to delete');
        }
        return res.json()
      })
      .then((data) => {
        alert('Đơn hàng đã được xóa thành công');
        window.location.reload()
      })

  }

  return (
    <Fragment>
      <HeaderAdmin />


      <div id="wp-content">
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col">
              <div
                className="card text-white bg-primary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">ĐƠN HÀNG THÀNH CÔNG</div>
                <div className="card-body">
                  <h5 className="card-title">{thanhcong.length}</h5>
                  <p className="card-text">Đơn hàng giao dịch thành công</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-danger mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">ĐANG XỬ LÝ</div>
                <div className="card-body">
                  <h5 className="card-title">{dangxuly.length}</h5>
                  <p className="card-text">Số lượng đơn hàng đang xử lý</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-success mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">DOANH SỐ</div>
                <div className="card-body">
                  <h5 className="card-title">{doanhso.toLocaleString('vi-VN')} VNĐ </h5>
                  <p className="card-text">Doanh số hệ thống</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-white bg-dark mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">TẤT CẢ ĐƠN HÀNG</div>
                <div className="card-body">
                  <h5 className="card-title">{tatcadonhang}</h5>
                  <p className="card-text">Tất cả đơn hàng đã đặt trong hệ thống</p>
                </div>
              </div>
            </div>
          </div>
          {/* end analytic  */}
          <div className="card">
            <div className="card-header font-weight-bold">ĐƠN HÀNG MỚI</div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Phương thức thanh toán</th>
                    <th scope="col">Địa chỉ</th>

                    <th scope="col">Thời gian</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Tác vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>
                          {user.find(ct => ct.id === item.user_id)?.name} <br />
                          {item.phone_number}
                        </td>
                        <td >
                          {item.payment_method === 'momo' ? (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnV4cUM7jBauINof35Yn_unOz976Iz5okV8A&s" width={30} style={{ margin: 'auto' }} />) : (<p>deo bit</p>)}
                        </td>
                        <td>{item.shipping_address}</td>
                        <td>
                          {new Date(item.created_at).toLocaleString()}
                        </td>
                        <td>{item.status === 'Pending' ? (<span className="badge badge-warning">Đang xử lý</span>) : (<span className="badge badge-success">Thành công</span>)}

                        </td>
                        {/* <td>{item.updated_at}</td> */}
                        <td>

                          <a
                            href="#"
                            className="btn btn-danger btn-sm rounded-0 text-white"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            onClick={(e) => xoa(e, item.id)}
                          >
                            <i className="fa fa-trash" />
                          </a>
                        </td>
                      </tr>
                    )
                  })}




                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">Trước</span>
                      <span className="sr-only">Sau</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
