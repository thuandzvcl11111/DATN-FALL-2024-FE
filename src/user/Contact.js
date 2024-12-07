import React, { Fragment, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
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
    s7.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes";
    s7.async = false;
    document.body.appendChild(s7);

    const s8 = document.createElement("script");
    s8.src = "/js/map-custom.js";
    s8.async = false;
    document.body.appendChild(s8);

    return () => {
      document.body.removeChild(s0);
      document.body.removeChild(s1);
      document.body.removeChild(s2);
      document.body.removeChild(s3);
      document.body.removeChild(s4);
      document.body.removeChild(s5);
      document.body.removeChild(s6);
      document.body.removeChild(s7);
      document.body.removeChild(s8);
    };
  }, []);

  const email = useRef()
  const message = useRef()
  const postContact = () =>{
    if (email.current.value ==="" || message.current.value ===""){
      alert("Vui lòng nhập đầy đủ thông tin!")
      return
    }
    const value = {
      email: email.current.value,
      message: message.current.value
    }
    fetch('http://127.0.0.1:8000/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Các headers khác nếu cần
          },
          body: JSON.stringify(value),
        })
        alert("Gửi thông tin liên hệ thành công!")
  }



  return (
    <Fragment>
      <Header />

    

      <div>
        {/* Title page */}
        <section
          className="bg-img1 txt-center p-lr-15 p-tb-92"
          style={{ backgroundImage: 'url("../images/banner12.jpg")' }}
        >
          <h2 className="ltext-105 cl0 txt-center">Liên hệ</h2>
        </section>
        {/* Content page */}
        <section className="bg0 p-t-104 p-b-116">
          <div className="container">
            <div className="flex-w flex-tr">
              <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                <form>
                  <h4 className="mtext-105 cl2 txt-center p-b-30">
                    Gửi tin nhắn cho chúng tôi
                  </h4>
                  <div className="bor8 m-b-20 how-pos4-parent">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="text"
                      name="email"
                      placeholder="Địa chỉ email của bạn"
                      ref={email}
                    />
                    <img
                      className="how-pos4 pointer-none"
                      src="../images/icons/icon-email.png"
                      alt="ICON"
                    />
                  </div>
                  <div className="bor8 m-b-30">
                    <textarea
                      className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                      name="msg"
                      placeholder="Chúng tôi có thể giúp gì cho bạn?"
                      defaultValue={""}
                      ref={message}
                    />
                  </div>
                  <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" type="button" onClick={()=>{postContact()}}>
                    Gửi
                  </button>
                </form>
              </div>
              <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                <div className="flex-w w-full p-b-42">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-map-marker" />
                  </span>
                  <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">Địa chỉ</span>
                    <p className="stext-115 cl6 size-213 p-t-18">
                      Local Store , 78/36 Le Du Tho G.Vap, TP HCM,
                    </p>
                  </div>
                </div>
                <div className="flex-w w-full p-b-42">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-phone-handset" />
                  </span>
                  <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">SĐT</span>
                    <p className="stext-115 cl1 size-213 p-t-18">
                      84+ 941 442 349
                    </p>
                  </div>
                </div>
                <div className="flex-w w-full">
                  <span className="fs-18 cl5 txt-center size-211">
                    <span className="lnr lnr-envelope" />
                  </span>
                  <div className="size-212 p-t-2">
                    <span className="mtext-110 cl2">Hỗ trợ bán hàng</span>
                    <p className="stext-115 cl1 size-213 p-t-18">
                      nlem2801@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map */}
        <div className="map">
          <div
            className="size-303"
            id="google_map"
            data-map-x="40.691446"
            data-map-y="-73.886787"
            data-pin="../images/icons/iconic.png"
            data-scrollwhell={0}
            data-draggable={1}
            data-zoom={11}
          />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Contact;
