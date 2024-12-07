import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { useSelector } from "react-redux";

const ProductAdd = () => {
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
  const token = localStorage.getItem("token");
  const [cate, setCate] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_category_withoutparentId')
      .then(res => res.json())
      .then(data => setCate(data))
  }, [])
  const sp = {};
  const handleAdd = () => {
    const formData = new FormData();

    // Thêm các trường dữ liệu vào FormData
    for (const key in sp) {
      formData.append(key, sp[key]);
    }

    fetch('http://127.0.0.1:8000/api/post_product', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}` // Không cần thêm Content-Type, Fetch API tự xử lý cho FormData
      },
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'Sản phẩm vừa thêm');
      })
      .catch(error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
      });
    window.location.href = '/ad/prod-list/'
  };
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold">Thêm sản phẩm</div>
            <div className="card-body">
              <form>

                <div className="form-group">
                  <label htmlFor="name">Tên sản phẩm</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => sp.name = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Giá</label>
                  <input
                    className="form-control"
                    type="text"
                    name="price"
                    id="price"
                    onChange={e => sp.price = e.target.value}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="img">Hình ảnh sản phẩm</label>
                  <input
                  className="form-control"
                    type="text"
                    onChange={e => sp.image = e.target.value}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="intro">Chi tiết sản phẩm</label>
                  <textarea
                    name
                    className="form-control"
                    id="intro"
                    cols={30}
                    rows={5}
                    defaultValue={""}
                    onChange={e => sp.description = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="color">Màu sản phẩm</label>
                  <input
                    className="form-control"
                    type="text"
                    name="color"
                    id="color"
                    placeholder="[Red, Blue]"
                    onChange={e => sp.colors = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="size">Size sản phẩm</label>
                  <input
                    className="form-control"
                    type="text"
                    name="size"
                    id="size"
                    placeholder="[S, M, L]"
                    onChange={e => sp.sizes = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Số lượng sản phẩm</label>
                  <input
                    className="form-control"
                    type="number"
                    name="name"
                    id="name"
                    onChange={e => sp.quantity = e.target.value}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Danh mục</label>
                  <select className="form-control" onChange={e => sp.category_id = e.target.value}>
                    {cate.map((item) => (
                      <option value={item.id} >{item.name}</option>
                    ))}

                  </select>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => handleAdd()}>
                  Thêm mới
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductAdd;
