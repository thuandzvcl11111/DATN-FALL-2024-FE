import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Fragment>
    

      <div id="warpper" className="nav-fixed">
        
        <nav className="topnav shadow navbar-light bg-white d-flex">
          <div className="navbar-brand">
            <Link to={'/'}><h1>LocalStore</h1></Link>
          </div>
          <div className="nav-right ">
            {/* <div className="btn-group mr-auto">
              <h3 >Role: </h3>
            </div> */}
            <div className="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.name}
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                {/* <a className="dropdown-item" >
                  Tài khoản
                </a> */}
                <a className="dropdown-item" >
                  Thoát
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* end nav  */}
        
      </div>
      <div id="page-body" className="d-flex">
  <div id="sidebar" className="bg-white">
    <ul id="sidebar-menu" >
      <li className="nav-link">
        <Link to={'/ad/'}>
          Dashboard
        </Link>
        {/* <i className="arrow fas fa-angle-right" /> */}
      </li>
     
      <li className="nav-link">
        <Link to={'/ad/post-list/'}>
          <div className="nav-link-icon d-inline-flex">
            {/* <i className="far fa-folder" /> */}
          </div>
          Bài viết
        </Link>
        
      </li>
      <li className="nav-link">
        <Link to={'/ad/prod-list/'}>
          <div className="nav-link-icon d-inline-flex">
            {/* <i className="far fa-folder" /> */}
          </div>
          Sản phẩm
        </Link>
        {/* <i className="arrow fas fa-angle-down" /> */}
        
      </li>
      
      <li className="nav-link">
        <Link to={'/ad/user-list/'}>
          <div className="nav-link-icon d-inline-flex">
            {/* <i className="far fa-folder" /> */}
          </div>
          Users
        </Link>
        
      </li>
      
      <li className="nav-link">
        <Link to={'/ad/contacts/'}>
          <div className="nav-link-icon d-inline-flex">
            {/* <i className="far fa-folder" /> */}
          </div>
          Contact
        </Link>
        
      </li>
      {/* <li class="nav-link"><a>Bài viết</a>
                  <ul class="sub-menu">
                      <li><a>Thêm mới</a></li>
                      <li><a>Danh sách</a></li>
                      <li><a>Thêm danh mục</a></li>
                      <li><a>Danh sách danh mục</a></li>
                  </ul>
              </li>
              <li class="nav-link"><a>Sản phẩm</a></li>
              <li class="nav-link"><a>Đơn hàng</a></li>
              <li class="nav-link"><a>Hệ thống</a></li> */}
    </ul>
  </div>
</div>
    </Fragment>
  );
};

export default HeaderAdmin;
