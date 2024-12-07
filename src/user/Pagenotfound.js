import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Fragment>
      <Header />
      <div class="auth-wrapper">
        <div class="auth-container">
          <div class="auth-action-left">
            <div class="auth-form-outer">
              <div class="container_forgot_password">
                <h1>404</h1>
                <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
                <Link to="/">Quay lại trang chủ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Pagenotfound;
