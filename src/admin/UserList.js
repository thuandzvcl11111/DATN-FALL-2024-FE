import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { useSelector } from "react-redux";

const UserList = () => {
  useEffect(()=>{
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
  },[])
  const token = localStorage.getItem("token");
  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/users',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` // Thêm token nếu cần
      }
    })
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])

  const deleteUser = (event, id) =>{
    event.preventDefault(); 
    alert('ban co muon xoa user nay chu!!!')
    fetch('http://127.0.0.1:8000/api/users_delete/' + id, {
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Không thể xóa User');
      }
      return res.json(); // Chuyển phản hồi thành JSON
    })
    .then((data) => {
      alert('User đã được xóa thành công');
      window.location.reload()  // Điều hướng về trang danh mục
    })
    .catch((error) => {
      console.error('Có lỗi khi xóa User:', error);
      alert('Có lỗi khi xóa User');
    });
    
  }
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
              <h5 className="m-0 ">Danh sách thành viên</h5>
              <div className="form-search form-inline">
                <form action="#">
                  <input
                    type
                    className="form-control form-search"
                    placeholder="Tìm kiếm"
                  />
                  <input
                    type="submit"
                    name="btn-search"
                    defaultValue="Tìm kiếm"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
            <div className="card-body">
              
              <table className="table table-striped table-checkall">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" name="checkall" />
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Email</th>
                    <th scope="col">Quyền</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Tác vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((item)=>(
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role === 'admin'? (<p>Admin</p>):(<p>Customer</p>)}</td>
                      <td>{new Date(item.created_at).toLocaleString()}</td>
                      <td>
                        <a
                          href="/#"
                          className="btn btn-danger btn-sm rounded-0 text-white"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                          onClick={e=>deleteUser(e,item.id)}
                        >
                          <i className="fa fa-trash" />
                        </a>
                      </td>
                    </tr>
                 ))}
                  
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

export default UserList;
