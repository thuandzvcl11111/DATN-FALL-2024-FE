import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCate = () => {
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
  const [cate, setCate] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/get_category')
    .then(res=>res.json())
    .then(data=>setCate(data))
  },[])
  const category = {}
  const handleAdd = () => {
    fetch('http://127.0.0.1:8000/api/post_cate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    })
      .then(res => res.json())
      .then(data => {
        // alert('da them san pham thanh cong')
        console.log(data, 'san pham vua them');
      })
  }
  const handleDelete = ( event,id) => {
    // Ngừng hành động mặc định của thẻ <a>
    event.preventDefault(); 
  
    fetch(`http://127.0.0.1:8000/api/delete_cate/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Gửi token trong header
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Không thể xóa Sản phẩm');
        }
        return res.json(); // Chuyển phản hồi thành JSON
      })
      .then((data) => {
        alert('Sản phẩm đã được xóa thành công');
        // window.location.href = '/ad/';  // Điều hướng về trang danh mục
      })
      .catch((error) => {
        console.error('Có lỗi khi xóa Sản phẩm:', error);
        alert('Có lỗi khi xóa Sản phẩm');
      });
  };
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header font-weight-bold">
                  Danh mục sản phẩm
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Tên danh mục</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        onChange={e=>category.name = e.target.value}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor>Danh mục cha</label>
                      <select className="form-control" onChange={e=>category.parent_id = e.target.value}>
                        {cate.map((item)=>(
                          <option value={item.id}>{item.name}</option>
                        ))}
                        
                      </select>
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor>Trạng thái</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Chờ duyệt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Công khai
                        </label>
                      </div>
                    </div> */}
                    <button type="button" className="btn btn-primary" onClick={handleAdd}>
                      Thêm mới
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-header font-weight-bold">Danh sách</div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Danh mục cha</th>
                        <th scope="col">Nút</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cate.map((item)=>(
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>{cate.find(ct => ct.id === item.parent_id)?.name}</td>
                          <td><a href='/#' onClick={(e)=>handleDelete(e, item.id)}>Xóa</a></td>
                          <td><Link to={'/ad/prod-cate/'+item.id}>Sửa</Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCate;
