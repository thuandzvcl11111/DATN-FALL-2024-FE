import React, { Fragment, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Register = () => {
    useEffect(() => {
        const s0 = document.createElement('script');
        s0.src = "/vendor/jquery/jquery-3.2.1.min.js";
        s0.async = false;  
        document.body.appendChild(s0);
    
        const s1 = document.createElement('script');
        s1.src = "/vendor/animsition/js/animsition.min.js";
        s1.async = false
        document.body.appendChild(s1);
       
        const s2 = document.createElement('script');
        s2.src = "/vendor/slick/slick.min.js";  
        s2.async = false
        document.body.appendChild(s2);
        
        const s3 = document.createElement('script');
        s3.src = "/js/slick-custom.js";
        s3.async = false;  
        document.body.appendChild(s3);
    
        const s4 = document.createElement('script');
        s4.src = "/js/main.js";
        s4.async = false;  
        document.body.appendChild(s4);
    
        const s5 = document.createElement('script');
        s5.src = "/js/hiep.js";
        s5.async = false;  
        document.body.appendChild(s5);
    
        const s6 = document.createElement('script');
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
        }
      }, []);
      const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const register = async () => {
    if (!name.current.value || !email.current.value || !password.current.value) {
      alert("Hãy điền đầy đủ các trường!!!");
      return;
    }
    if (password.current.value !== confirmPassword.current.value) {
      alert("Mật khẩu không trùng nhau!!!");
      return;
    }

    const userData = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      password_confirmation: confirmPassword.current.value, // For Laravel's "confirmed" rule
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Đăng ký thành công!");
        navigate("/lg/"); // Redirect after successful registration
      } else {
        alert(`Đăng ký thất bại: ${data.message || "Lỗi không xác định."}`);
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi đăng ký:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau!");
    }
  };
    
      
  return (
    <Fragment>
      <Header />
      {/* Form without bootstrap */}
      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-action-left">
            <div className="auth-form-outer">
              <h2 className="auth-form-title">Create Account</h2>
              <div className="auth-external-container">
                
                <p className="auth-sgt">or use your email for registration:</p>
              </div>
              <form className="login-form">
                <input
                  type="text"
                  className="auth-form-input"
                  placeholder="Name"
                  ref={name}
                />
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
                    placeholder="Password"
                    ref={password}
                  />
                  <i className="fa fa-eye show-password" />
                </div>
                <input
                  type="password"
                  className="auth-form-input"
                  placeholder="Confirm Password"
                  ref={confirmPassword}
                />
                 
                <label className="btn active">
                  <input type="checkbox" name="email1" defaultChecked />
                  <i className="fa fa-square-o" />
                  <i className="fa fa-check-square-o" />
                  <span>
                    {" "}
                    I agree to the <a href="#">Terms</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </span>
                </label>
                <div className="footer-action">
                  <input
                    type="button"
                    defaultValue="Đăng ký"
                    className="auth-submit"
                    onClick={register}
                  />
                  <Link to={'/lg/'} className="auth-btn-direct">
                    Đăng nhập
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="auth-action-right">
            <div className="auth-image">
              <img
                src="../images/banner/banner14.jpg"
                width="1000px"
                alt="login"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Register;
