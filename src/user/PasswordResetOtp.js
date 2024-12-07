import React, { Fragment, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const PasswordResetOtp = () => {
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
  return (
    <Fragment>
        <Header/>
        {/* Form without bootstrap */}
<div className="auth-wrapper">
  <div className="auth-container">
    <div className="auth-action-left">
      <div className="auth-form-outer">
        <form className="reset-form">
          <h2>Đặt lại mật khẩu</h2>
          <div className="input-group">
            <input type="tel" id="phone" name="phone" required placeholder="Số điện thoại" />
          </div>
          <button type="button" className="send-otp">Gửi mã OTP</button>
          <div className="input-group">
            <input type="text" id="otp" name="otp" required placeholder="Mã OTP:" />
          </div>
          <div className="input-group">
            <input type="password" id="new-password" name="new-password" required placeholder=" Mật khẩu mới" />
          </div>
          <div className="input-group">
            <input type="password" id="confirm-password" name="confirm-password" required placeholder="Xác nhận mật khẩu" />
          </div>
          <button type="submit">Đặt lại mật khẩu</button>
        </form>
      </div>
    </div>
    <div className="auth-action-right">
      <div className="auth-image">
        <img src="../images/" alt="login" />
      </div>
    </div>
  </div>
</div>

        <Footer/>
    </Fragment>
  )
}

export default PasswordResetOtp