import React, { Fragment, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux';

const InfoUser = () => {
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
    const u = JSON.parse(localStorage.getItem("user"));
    
  return (
    <Fragment>
        <Header/>
        <div className="auth-container kh_user_danhmuc">
  <div className="auth-action-left">
    <div className="auth-form-outer auth-form-outer_2">
      <h2 className="auth-form-title">HỒ SƠ CỦA TÔI</h2>
      <span>Quản lý thông tin để bảo mật tài khoản</span>
      <hr />
      <section className="user_danhmuc">
        <div className="user_danhmuc_right_sp">
          <div className="kh_ten_dm">
            <div className="kh_ten_dm_td">Tên đăng nhập: </div>
            <input className="kh_text_dm" type="Text" value={u.name}/>
          </div>
          <div className="kh_ten_dm">
            <div className="kh_ten_dm_td"> Tên : </div>
            <input className="kh_text_dm" type="Text" value={u.name}/>
          </div>
          <div className="kh_ten_dm">
            <div className="kh_ten_dm_td">Email: </div>
            <input className="kh_text_dm" type="Text" value={u.email}/>
          </div>
          <div className="kh_ten_dm">
            <div className="kh_ten_dm_td">Số điện thoại: </div>
            <input className="kh_text_dm" type="Text" value={u.phone}/>
          </div>
          
          
          
        </div>
        <div className="profile_image">
          <div className="img_doianh">
            <img id="image" src="/images/bocchi.jpg" alt="Profile Image" />
          </div>
          <br />
          <a href="#" className="edit_button" onclick="openFile(event)">Đổi ảnh</a>
          <input type="file" id="file-input" style={{display: 'none'}} />
        </div>
      </section>
    </div>
  </div>
</div>

        <Footer/>
    </Fragment>
  )
}

export default InfoUser