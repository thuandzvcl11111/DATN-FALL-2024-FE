import React, { Fragment, useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
const BlogDetail = () => {
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

      const { id } = useParams()
      const [data, setData] = useState([])
      const [cate, setCate] = useState([])
      const [pro, setPro] = useState([])
      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/blogs/'+ id)
          .then((res) => res.json())
          .then((blog) => {
            setData(blog)
          })
      }, [id]);
      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories_blog')
          .then((res) => res.json())
          .then((blog) => {
            setCate(blog)
          })
      }, []);
      console.log(cate);
      
      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/hot')
          .then((res) => res.json())
          .then((blog) => {
            setPro(blog)
          })
      }, []);
      
      
  return (
    <Fragment>
      <Header />
      {/* Content page */}
      <section className="bg0 p-t-52 p-b-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/*  */}
                <div className="wrap-pic-w how-pos5-parent">
                  <img src={'/images/'+ data.image_path} alt="IMG-BLOG" />
                  
                </div>
                <div className="p-t-32">
                  <span className="flex-w flex-m stext-111 cl2 p-b-19">
                    
                    <span>
                      {data.published_date}
                      {/* <span className="cl12 m-l-4 m-r-6">|</span> */}
                    </span>
                    <span>
                    {cate.find(ct => ct.id === data.id)?.name}
                      {/* <span className="cl12 m-l-4 m-r-6">|</span> */}
                    </span>
                    {/* <span>8 Bình luận</span> */}
                  </span>
                  <h4 className="ltext-109 cl2 p-b-28">
                    {data.title}
                  </h4>
                  <p className="stext-117 cl6 p-b-26">
                    {data.content}
                  </p>
                  
                </div>
                <div className="flex-w flex-t p-t-16">
                  <span className="size-216 stext-116 cl8 p-t-4">Tags</span>
                  <div className="flex-w size-217">
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      {cate.find(ct => ct.id === data.category_id)?.name}
                    </a>
                    
                  </div>
                </div>
                {/*  */} <br />
                {/* <div className="p-t-40">
                  <h5 className="mtext-113 cl2 p-b-12">Để lại một bình luận</h5>
                  <p className="stext-107 cl6 p-b-40">
                    Địa chỉ email của bạn sẽ không được công bố. Các trường bắt
                    buộc được đánh dấu *
                  </p>
                  <form>
                    <div className="bor19 m-b-20">
                      <textarea
                        className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
                        name="cmt"
                        placeholder="Bình luận..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="bor19 size-218 m-b-20">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="name"
                        placeholder="Tên *"
                      />
                    </div>
                    <div className="bor19 size-218 m-b-20">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="email"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="bor19 size-218 m-b-30">
                      <input
                        className="stext-111 cl2 plh3 size-116 p-lr-18"
                        type="text"
                        name="web"
                        placeholder="Website"
                      />
                    </div>
                    <button className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04">
                      Đăng bình luận
                    </button>
                  </form>
                </div> */}
              </div>
            </div>
            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <div className="bor17 of-hidden pos-relative">
                  <input
                    className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />
                  <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                    <i className="zmdi zmdi-search" />
                  </button>
                </div>
                <div className="p-t-55">
                  <h4 className="mtext-112 cl2 p-b-33">Thể loại</h4>
                  <ul>
                    {cate.slice(0,6).map((ct, i)=>(
                    <li className="bor18">
                      <a
                        href="#"
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        {ct.name}
                      </a>
                    </li>
                      ))}
                  </ul>
                </div>
                <div className="p-t-65">
                  <h4 className="mtext-112 cl2 p-b-33">Sản phẩm nổi bật</h4>
                  <ul>
                    {/* <li class="flex-w flex-t p-b-30"> */}
                    {pro.slice(0,3).map((pro,i)=>
                    (
                    
                      <li className="flex-w flex-t p-b-30">
                        <a
                          href="#"
                          className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                        >
                          <img
                            src={'/images/'+pro.image_path}
                            width="90px"
                            height="auto"
                            alt="PRODUCT"
                          />
                        </a>
                        <div className="size-215 flex-col-t p-t-8">
                          <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                            {pro.name}
                          </a>
                          <span className="stext-116 cl6 p-t-20">{pro.price}</span>
                        </div>
                      </li>
                     
                    ))}
                  </ul>
                </div>
               
                <div className="p-t-50">
                  <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
                  <div className="flex-w m-r--5">
                    {cate.slice(0,6).map((ct,i)=>(
                      <a
                        href="#"
                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                      >
                        {ct.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default BlogDetail;
