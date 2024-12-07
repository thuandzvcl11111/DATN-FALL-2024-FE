import React, { Fragment, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
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
  return (
    <Fragment>
      <Header />

      

      <div>
        {/* Title page */}
        <section
          className="bg-img1 txt-center p-lr-15 p-tb-92"
          style={{ backgroundImage: 'url("../images/banner10.jpeg")' }}
        >
          <h2 className="ltext-105 cl0 txt-center">Giới thiệu</h2>
        </section>
        {/* Content page */}
        <section className="bg0 p-t-75 p-b-120">
          <div className="container">
            <div className="row p-b-148">
              <div className="col-md-7 col-lg-8">
                <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                  <h3 className="mtext-111 cl2 p-b-16">
                    Câu chuyện của chúng tôi
                  </h3>
                  <p className="stext-113 cl6 p-b-26">
                    Trước hết chúng tôi xin phép sửa dụng các hình ảnh của các
                    nhãn hàng. Chúng tôi tạo ra trang web này để thực hiện "dự
                    án tốt nghiệp", không lạm dụng để kinh doanh, mua bán hoặc
                    mục đích cá nhân nào khác. Chúng tôi mượn những hình ảnh và
                    logo của các nhãn hàng chỉ nhằm mục đích tạo ra một trang
                    web mang tính thẩm mỹ cao, phục vụ cho việc học tập và chắc
                    chắn sẽ không có mục đích nào khác. Chúng tôi xin cảm ơn các
                    nhãn hàng Local brand Việt Nam
                    <br />
                    Trân trọng.
                  </p>
                  <p className="stext-113 cl6 p-b-26">
                    Chúng tôi học tại trường Cao đẳng Fpt Polytechnic, trường
                    chúng tôi có 7 học kì hiện tại chúng tôi đang học đến kì thứ
                    7, nhóm chúng tôi gồm có 5 thành viên. Local Store là một dự
                    án lớn đối với tôi và cả nhóm trong cả quá trình học tập, nó
                    là tâm huyết của chúng tôi. Mong mọi người hãy đón chào nó
                    một cách vui vẻ
                  </p>
                  <p className="stext-113 cl6 p-b-26">
                    Mọi liên hệ hãy gọi đến số: (84+) 941 442 349
                    <br />
                    Email: nlem2801@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
                <div className="how-bor1 ">
                  <div className="hov-img0">
                    <img src="../images/banner11.jpg" alt="IMG" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Fragment>
  );
};

export default About;
