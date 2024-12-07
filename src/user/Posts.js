import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Posts = () => {
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
    
        return () => {
        document.body.removeChild(s0);
        document.body.removeChild(s1);
        document.body.removeChild(s2);
        document.body.removeChild(s3);
        document.body.removeChild(s4);
        document.body.removeChild(s5);
        document.body.removeChild(s6);
        }
      }, []);

      const [data, setData] = useState([])
      useEffect(() => {
        fetch('http://127.0.0.1:8000/api/show_blogs')
          .then((res) => res.json())
          .then((blog) => {
            setData(blog)
          })
      }, []);

      // console.log(data);
      
  return (
    <Fragment>
        <Header/>
        <div>
  
  {/* Title page */}
  <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url("../images/banner10.jpeg")'}}>
    <h2 className="ltext-105 cl0 txt-center">
      Tin tức
    </h2>
  </section>
  
  {/* <section className="news_main container">
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <ul className="fullsanpham-menu">
          <li className="sanpham-menu">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
              Tất cả tin
            </button>
           
          </li>
        </ul>
        <ul className="fullsanpham-menu">
          <li className="sanpham-menu">
            <button href="ao.html" className=" stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".ao">Tin mới</button>
            
          </li>
        </ul>
        <ul className="fullsanpham-menu">
          <li className="sanpham-menu">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".quan">Tin nổi bật</button>
            
          </li>
        </ul>
        <ul className="fullsanpham-menu">
          <li className="sanpham-menu">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".phukien">Nhiều người quan tâm</button>
            
          </li>
        </ul>
      </div>
      <div className="flex-w flex-c-m m-tb-10">
       
        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
          <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
          <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
          Search
        </div>
      </div>
     
      <div className="dis-none panel-search w-full p-t-10 p-b-15" style={{display: 'block'}}>
        <div className="bor8 dis-flex p-l-15">
          <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
            <i className="zmdi zmdi-search" />
          </button>
          <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
        </div>
      </div>
    </div>
  </section> */}
  <div className="news_content">
    <section className="container">
      <ul className="news_content_list">
        {data.splice(0,3).map((blog,i)=>(     
              
          <li className="news_content_item" key={i}>
            
            <Link to={'/p/' + blog.id} href className="news_link">
              <div className="content_box_left">
                <div className="box_left_noidung">
                  <span>
                    <h3 className="left_title">{blog.title}</h3>
                    <hr className="light_box" />
                    <p className="fs-15 of-hidden">{blog.content} </p>
                    <hr className="light_box" />
                    <div className="time_box">
                      <p className="calendar"><i className="fa-regular fa-calendar" /> {blog.published_date}</p>
                      <p className="viewer"><i className="fa-solid fa-eye" /> 36</p>
                    </div>
                  </span>
                </div>
              </div>
              <div className="content_box_right">
                <img src={blog.image_path} alt />
              </div>
            </Link>
            
          </li>
        ))}
      </ul>
    </section>
  </div>  
  {/* Footer */}
</div>
<Footer/>
    </Fragment>
  )
}

export default Posts