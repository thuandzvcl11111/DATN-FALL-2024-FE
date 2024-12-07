import React, { Fragment, useEffect, useState, useContext, createContext } from 'react'
import Header from './Header'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Modal from './Modal';
// import { dataContext } from '../context/dataContext';
const Index = () => {



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
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  const [data, setData] = useState([]);
  const [getAllPro, setGetAllPro] = useState([]);
  const [cate, setCate] = useState([]);
  const [blog, setBlog] = useState([]);
  const [comment, setComment] = useState([])
  const [u, setU] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/new')
      .then((res) => res.json())
      .then((sp) => {
        setData(sp)
      })
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_all_product')
      .then((res) => res.json())
      .then((sp) => {
        setGetAllPro(sp)
      })
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_category_withoutparentId')
      .then((res) => res.json())
      .then((sp) => {
        setCate(sp)
      })
  }, []);



  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blog-hot')
      .then((res) => res.json())
      .then((sp) => {
        setBlog(sp)
      })
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/getcomments')
      .then((res) => res.json())
      .then((sp) => {
        setComment(sp)
      })
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/usersIndex')
      .then((res) => res.json())
      .then((sp) => {
        setU(sp)
      })
  }, [])

  const tatca = (
    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
      <Link to={'/pd/'}>Tất cả sản phẩm</Link>
    </button>
  )
  return (

    <Fragment>
      <Header />
      <div>

        {/* Slider */}
        <section className="section-slide">
          <div className="wrap-slick1">
            <div className="slick1">
              <div className="item-slick1" style={{ backgroundImage: 'url(../images/banner1.webp)' }}>
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay={0}>
                      <span className="ltext-101 cl2 respon2">
                        Accessories Collection 2024
                      </span>
                    </div>
                    <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay={800}>
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        NEW SEASON
                      </h2>
                    </div>
                    <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay={1600}>
                      <Link to={'/pd/'} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-slick1" style={{ backgroundImage: 'url(../images/banner2.jpg)' }}>
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay={0}>
                      <span className="ltext-101 cl2 respon2">
                        New-Season
                      </span>
                    </div>
                    <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay={800}>
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        Jackets &amp; Hoodies
                      </h2>
                    </div>
                    <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay={1600}>
                      <a href="/#" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-slick1" style={{ backgroundImage: 'url(../images/banner3.jpg)' }}>
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay={0}>
                      <span className="ltext-101 cl2 respon2">
                        New Collection 2024
                      </span>
                    </div>
                    <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay={800}>
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        New arrivals
                      </h2>
                    </div>
                    <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay={1600}>
                      <a href="/#" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <div className="sec-banner bg0 p-t-80 p-b-50">
          <div className="container">
            <div className="row">
              {cate.map((cate, i) => (
                <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                  {/* Block1 */}
                  <div className="block1 wrap-pic-w">
                    <img src={'/images/' + cate.image} alt="IMG-BANNER" />
                    <Link to={"/pdt/danhmuc/" + cate.id} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                      <div className="block1-txt-child1 flex-col-l">
                        <span className="block1-name ltext-102 trans-04 p-b-8">
                          {cate.name}
                        </span>
                        <span className="block1-info stext-102 trans-04">
                          {cate.mota}
                        </span>
                      </div>
                      <div className="block1-txt-child2 p-b-4 trans-05">
                        <div className="block1-link stext-101 cl0 trans-09">
                          Shop Now
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        {/* Product */}
        <section className="bg0 p-t-23 p-b-100">
          <div className="container">
            <div className="p-b-10">
              <h3 className="ltext-103 cl5">
                Sản phẩm nổi bật
              </h3>
            </div>
            <div className="flex-w flex-sb-m p-b-52">
              <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                {
                  [tatca, cate.map((ct, i) => (
                    <button key={ct.id} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">
                      <Link to={"/pdt/danhmuc/" + ct.id}>{ct.name}</Link>
                    </button>
                  ))]
                }

              </div>
              <div className="flex-w flex-c-m m-tb-10">
                <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                  <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                  <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                  Filter
                </div>
                <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                  <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                  <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                  Search
                </div>
              </div>
              {/* Search product */}
              <div className="dis-none panel-search w-full p-t-10 p-b-15">
                <div className="bor8 dis-flex p-l-15">
                  <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                    <i className="zmdi zmdi-search" />
                  </button>
                  <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
                </div>
              </div>
              {/* Filter */}
              <div className="dis-none panel-filter w-full p-t-10">
                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                  <div className="filter-col1 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">
                      Sort By
                    </div>
                    <ul>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Default
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Popularity
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Average rating
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                          Newness
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Price: Low to High
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Price: High to Low
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-col2 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">
                      Price
                    </div>
                    <ul>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                          All
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $0.00 - $50.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $50.00 - $100.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $100.00 - $150.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $150.00 - $200.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $200.00+
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-col3 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">
                      Color
                    </div>
                    <ul>
                      <li className="p-b-6">
                        <span className="fs-15 lh-12 m-r-6" style={{ color: '#222' }}>
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Black
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span className="fs-15 lh-12 m-r-6" style={{ color: '#4272d7' }}>
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                          Blue
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span className="fs-15 lh-12 m-r-6" style={{ color: '#b3b3b3' }}>
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Grey
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span className="fs-15 lh-12 m-r-6" style={{ color: '#00ad5f' }}>
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Green
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span className="fs-15 lh-12 m-r-6" style={{ color: '#fa4251' }}>
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Red
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span className="fs-15 lh-12 m-r-6" style={{ color: '#aaa' }}>
                          <i className="zmdi zmdi-circle-o" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          White
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div class="filter-col4 p-b-27">
							<div class="mtext-102 cl2 p-b-15">
								Tags
							</div>

							<div class="flex-w p-t-4 m-r--5 ">
								<a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Fashion
								</a>

								<a href=" # " class=" flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Lifestyle
								</a>

								<a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Denim
								</a>

								<a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Streetstyle
								</a>

								<a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
									Crafts
								</a>
							</div>
						</div> */}
                </div>
              </div>
            </div>
            <div className="row isotope-grid">
              {data.map((sp, i) => (
                <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" key={sp.product_id}>
                  {/* Block2 */}
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <Link to={'/pdt/' + sp.id}>
                        <img src={sp.image_path} alt="IMG-PRODUCT" />
                      </Link>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l ">
                        <Link to={"/pdt/" + sp.id} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                          {sp.name}
                        </Link>
                        <span className="stext-105 cl3">
                          {sp.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </span>
                      </div>
                      <div className="block2-txt-child2 flex-r p-t-3">
                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                          {/* <img className="icon-heart1 dis-block trans-04" src="../images/icons/icon-heart-01.png" alt="ICON" /> */}
                          <img className="icon-heart2 dis-block trans-04 ab-t-l" src="../images/icons/icon-heart-02.png" alt="ICON" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              ))}



            </div>
            {/* Load more */}
            <div className="flex-c-m flex-w w-full p-t-45">
              <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                Xem Thêm
              </a>
            </div>
          </div>
        </section>
        {/* hiệp code --------------*/}
        <section className="container">
          <div className="duan_grid">
            <div className="p-b-10">
              <h3 className="ltext-103 cl5" style={{ paddingTop: 30 + "px" }}>
                Hình ảnh sản phẩm
              </h3>
            </div>
            <div className="grid_main">
              <div className="grid_item1">
                <ul className="row_grid">
                  <li className="row_item">
                    <img src="../images/outfit/DirtyCoins..webp" alt />

                    <div className="bongmo" />
                  </li>
                  <li className="row_item">
                    <img src="../images/outfit/hades.webp" alt />

                    <div className="bongmo" />

                  </li>
                  <li className="row_item">
                    <img src="../images/outfit/5theway.jpg" alt />

                    <div className="bongmo" />

                  </li>
                  <li className="row_item">
                    <img src="../images/outfit/degrey.jpg" alt />

                    <div className="bongmo" />

                  </li>
                </ul>
              </div>
              <div className="grid_item2">
                <img src="../images/outfit/streetgane.webp" alt />

                <div className="bongmo1" />

              </div>
            </div>
          </div>
        </section>
        <section className="feedback_main">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5 p-t-70 p-b-30 heading_fb">
              Bình luận
            </h3>
          </div>
          <div className="box_feedback container">
            <div className="box_left_feedback">
              <figure className="box_img_feedback">
                <img src="../images/outfit/outfit1.jpg" alt />
              </figure>
              <figure className="box_img_feedback">
                <img src="../images/outfit/outfit2.webp" alt />
              </figure>
              <figure className="box_img_feedback">
                <img src="../images/outfit/outfit3.webp" alt />
              </figure>
            </div>
            <div className="box_right_feedback">
              <div className="swiper mySwiper swiper1">
                <div className="swiper-wrapper">
                  {comment.splice(0,4).map((item) => (
                    <div className="swiper-slide">
                      <img className="img_box" src="/images/bocchi.jpg" alt />
                      
                      <p className="box_right_content">
                        <span className="content_list">
                          <span className="ten_khachhang">{u.find(user => user.id === item.user_id)?.name}</span> đã bình luận sản phẩm <span className="ten_khachhang">{getAllPro.find(pro => pro.id === item.product_id)?.name}</span>: {item.comment}
                        </span> 
                        <br />
                        <span className="time_box_right"> {new Date(item.created_at).toLocaleString("vi-VN", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}</span>
                      </p>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container p-b-80">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5 p-t-70">
              Tin tức
            </h3>
          </div>
          <div className="news">

            {blog.map((bl, i) => (
              <div className="news_content">
                <div className="img_hover">
                  <Link to={"/p/" + bl.id}> <img src={bl.image_path} alt /></Link>
                </div>
                <div className="la_news">
                  <Link to={"/p/" + bl.id}>{bl.title}</Link><p className="calendar"><i className="fa-regular fa-calendar" /> {bl.published_date}</p>
                </div>
                
              </div>
            ))}
          </div>
          <div className="flex-c-m flex-w w-full">
            <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
              Xem Thêm
            </a>
          </div>
        </section>
      </div>
      <Footer />
      {/* <Modal/> */}
    </Fragment>

  )
}




export default Index