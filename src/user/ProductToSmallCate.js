import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

const ProductToSmallCate = () => {
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

    return () => {
      document.body.removeChild(s0);
      document.body.removeChild(s1);
      document.body.removeChild(s2);
      document.body.removeChild(s3);
      document.body.removeChild(s4);
      document.body.removeChild(s5);
      document.body.removeChild(s6);
    };
  }, []);

  const { id } = useParams();
  const [pro, setPro] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/product?smcateId=" + id)
      .then((res) => res.json())
      .then((blog) => {
        setPro(blog);
      });
  }, [id]);

  

  return (
    <Fragment>
      <Header />

      {/* Menu tất cả sản phẩm */}
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">
                <Link to={'/pd/'}>Tất cả sản phẩm</Link>
              </button>
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
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* Filter */}
            <div className="dis-none panel-filter w-full p-t-10">
              <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div className="filter-col1 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Sort By</div>
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
                      <a
                        href="#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
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
                  <div className="mtext-102 cl2 p-b-15">Price</div>
                  <ul>
                    <li className="p-b-6">
                      <a
                        href="#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
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
                  <div className="mtext-102 cl2 p-b-15">Color</div>
                  <ul>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#222" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Black
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#4272d7" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a
                        href="#"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Blue
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#b3b3b3" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Grey
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#00ad5f" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Green
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#fa4251" }}
                      >
                        <i className="zmdi zmdi-circle" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        Red
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#aaa" }}
                      >
                        <i className="zmdi zmdi-circle-o" />
                      </span>
                      <a href="#" className="filter-link stext-106 trans-04">
                        White
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col4 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Tags</div>
                  <div className="flex-w p-t-4 m-r--5">
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row isotope-grid">
            {pro.map((data, i) => (
              <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                {/* Block2 */}
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <Link to={"/pdt/" + data.id}>
                      <img src={data.image} alt="IMG-PRODUCT" />
                    </Link>
                  </div>
                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <Link
                        to={"/pdt/" + data.id}
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        {data.name}
                      </Link>
                      <span className="stext-105 cl3">
                        {data.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </div>
                    <div className="block2-txt-child2 flex-r p-t-3">
                      <Link
                        to={"/pd/" + data.id}
                        className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                      >
                        {/* <img
                          className="icon-heart1 dis-block trans-04"
                          src="../images/icons/icon-heart-01.png"
                          alt="ICON"
                        /> */}
                        <img
                          className="icon-heart2 dis-block trans-04 ab-t-l"
                          src="../images/icons/icon-heart-02.png"
                          alt="ICON"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProductToSmallCate;
