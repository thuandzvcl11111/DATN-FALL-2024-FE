import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { dalogin } from "../slide/AuthSlice";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { CartContext } from "../context/CartContext";
const Login = () => {
  useEffect(() => {
    const s0 = document.createElement("script");
    s0.src = "/vendor/jquery/jquery-3.2.1.min.js";
    s0.async = false;
    document.body.appendChild(s0);

    const s1 = document.createElement("script");
    s1.src = "/vendor/animsition/js/animsition.min.js";
    s1.async = false;
    document.body.appendChild(s1);

    const s2 = document.createElement("script");
    s2.src = "/vendor/slick/slick.min.js";
    s2.async = false;
    document.body.appendChild(s2);

    const s3 = document.createElement("script");
    s3.src = "/js/slick-custom.js";
    s3.async = false;
    document.body.appendChild(s3);

    const s4 = document.createElement("script");
    s4.src = "/js/main.js";
    s4.async = false;
    document.body.appendChild(s4);

    const s5 = document.createElement("script");
    s5.src = "/js/hiep.js";
    s5.async = false;
    document.body.appendChild(s5);

    const s6 = document.createElement("script");
    s6.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    s6.async = false;
    document.body.appendChild(s6);

    const s7 = document.createElement("script");
    s7.src = "/js/contact.js";
    s7.async = false;
    document.body.appendChild(s7);

    return () => {
      document.body.removeChild(s0);
      document.body.removeChild(s1);
      document.body.removeChild(s2);
      document.body.removeChild(s3);
      document.body.removeChild(s4);
      document.body.removeChild(s5);
      document.body.removeChild(s6);
      document.body.removeChild(s7);
    };
  }, []);

  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fetchCartData } = useContext(CartContext)
  const handleLogin = async ({ type, email = null, password = null, credential = null }) => {
    try {
      let url = "http://127.0.0.1:8000/api/login";
      let body = {};

      if (type === "email") {
        // Xử lý đăng nhập bằng email/password
        if (!email || !password) {
          alert("Vui lòng nhập đầy đủ thông tin");
          return;
        }
        body = { email, password };
      } else if (type === "google") {
        // Xử lý đăng nhập bằng Google
        if (!credential) {
          alert("Không nhận được thông tin từ Google");
          return;
        }

        // Gửi token tới backend
        body = {
          google_token: credential,
        };

        // (Tuỳ chọn) Giải mã thông tin từ token để debug
        const decoded = jwtDecode(credential);
        console.log("Thông tin giải mã từ Google:", decoded);
      }

      // Gửi yêu cầu đăng nhập tới backend
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        // Lưu token và thông tin người dùng
        console.log("Đăng nhập thành công:", data);
        dispatch(dalogin(data)); // Redux action
        navigate("/"); // Chuyển hướng sau khi đăng nhập
      } else {
        alert(data.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Lỗi trong quá trình đăng nhập:", error);
      alert("Đã xảy ra lỗi khi đăng nhập");
    }
    fetchCartData()
    
  };


  // const decoded = jwtDecode(token)
  return (
    <Fragment>
      <Header />
      <div>
        {/* Form without bootstrap */}
        <div className="auth-wrapper">
          <div className="auth-container">
            <div className="auth-action-left">
              <div className="auth-form-outer">
                <h2 className="auth-form-title">Đăng nhập</h2>
                <div className="auth-external-container">
                  <div className="auth-external-list">
                    <ul>
                      <li>
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            console.log("Google Login Success:", credentialResponse);
                            handleLogin({
                              type: "google",
                              credential: credentialResponse.credential, // Gửi credential (ID Token) tới backend
                            });
                          }}
                          onError={() => {
                            console.error("Google Login Failed");
                            alert("Đăng nhập Google thất bại");
                          }}
                        />
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <p className="auth-sgt">Hoặc đăng nhập bằng:</p>
                </div>
                <form className="login-form" onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin({
                    type: "email",
                    email: email.current.value,
                    password: password.current.value,
                  });
                }}>
                  <input
                    type="email"
                    className="auth-form-input"
                    placeholder="Email"
                    ref={email}
                  />
                  <div className="input-icon">
                    <input
                      type="password"
                      className="auth-form-input"
                      placeholder="Mật khẩu"
                      ref={password}
                    />
                    <i className="fa fa-eye show-password" />
                  </div>
                  <label className="btn active">
                    <input type="checkbox" name="email1" defaultChecked />
                    <i className="fa fa-square-o" />
                    <i className="fa fa-check-square-o" />
                    <span>Nhớ mật khẩu.</span>
                  </label>
                  <div className="footer-action">
                    <input
                      type="submit"
                      defaultValue="Đăng nhập"
                      className="auth-submit"
                      placeholder="Login"
                    />
                    <Link to={"/rg/"} className="auth-btn-direct">
                      Đăng ký
                    </Link>
                  </div>
                </form>
                <div className="auth-forgot-password">
                  <a href="quenmatkhau.html">Quên mật khẩu ?</a>
                </div>
              </div>
            </div>
            <div className="auth-action-right">
              <div className="auth-image">
                <img src="../images/banner13.jpg" alt="login" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Login;
