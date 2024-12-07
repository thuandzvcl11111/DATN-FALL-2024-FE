import React, { Fragment, useEffect } from "react";
import HeaderAdmin from "./HeaderAdmin";

const UserAdd = () => {
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
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold">Thêm người dùng</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Mật khẩu</label>
                  <input
                    className="form-control"
                    type="password"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor>Nhóm quyền</label>
                  <select className="form-control" id>
                    <option>Chọn quyền</option>
                    <option>Danh mục 1</option>
                    <option>Danh mục 2</option>
                    <option>Danh mục 3</option>
                    <option>Danh mục 4</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
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

export default UserAdd;
