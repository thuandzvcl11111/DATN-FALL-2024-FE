import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { thoat } from "../slide/AuthSlice";
import { CartContext, useCart } from "../context/CartContext";


const Header = () => {
  const user1 = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch()
  const { cartData } = useContext(CartContext); 
  const getCart = cartData.data
  const tongCong = Array.isArray(getCart) ? getCart.reduce((sum, item) => sum + item.total_price, 0) : 0;
  const { handleLogout } = useContext(CartContext)
  return (
    <Fragment>
      <header>
        {/* Header desktop */}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Miễn phí vận chuyển cho đơn hàng tiêu chuẩn trên 1.000.000 VND
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <Link to={"/"} className="logo">
                <img src="/images/icons/logostore.jpg" alt="IMG-LOGO" />
              </Link>
              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <Link to={"/"}>Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/pd/">Sản phẩm</Link>
                  </li>
                  {/* <li class="label1" data-label1="hot">
								<a href="flashsale.html">Flash Sale</a>
							</li> */}
                  <li>
                    <Link to="/p/">Bài viết</Link>
                  </li>
                  <li>
                    <Link to="/a/">Giới thiệu</Link>
                  </li>
                  <li>
                    <Link to="/c/">Liên hệ</Link>
                  </li>
                </ul>
              </div>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search" />
                </div> */}
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={Array.isArray(getCart) ? getCart.length : 0}
                >
                  <i className="zmdi zmdi-shopping-cart" />
                </div>
                {/* <a
                  href="#"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify={0}
                >
                  <i className="zmdi zmdi-favorite-outline" />
                </a> */}
                <div className="hover-user">
                  <li className="fa-regular fa-user">
                    <ul className="hover-user-menu">
                      {user1 === null || user1 === undefined ? (
                        <>
                          <li>
                            <Link to={"/rg/"}>Đăng kí</Link>
                          </li>
                          <li>
                            <Link to={"/lg/"}>Đăng nhập</Link>
                          </li>
                        </>
                      ) : (user1.role === 'admin' ? (<>
                          <li>
                            <Link to={'/u/'}>Tài khoản của tôi</Link>
                          </li>
                          <li>
                            <Link to={'/ad/'}>Vào trang admin</Link>
                          </li>
                          <li>
                            <a href="/#" onClick={handleLogout}>Đăng xuất</a>
                          </li>
                        </>) : (
                          <>
                            <li>
                              <Link to={'/u/'}>Tài khoản của tôi</Link>
                            </li>
                            <li>
                              <a href="/#" onClick={() => { dispatch(thoat()) }}>Đăng xuất</a>
                            </li>
                          </>
                        )
                      )}
                    </ul>
                  </li>
                </div>
              </div>
            </nav>
          </div>
          {/*<ul class="kh_con_icon_user">
										<li class="icon_top_img">
											<img src="../images/20220110_B1Rto2Fhtd97EBAqofaFgSo8.jpg" alt="">
										</li>
										<li class="icon_text">
											<div>Sản phẩm: </div> 
                                      <div>Giá: </div> 
											<div>Qty: </div>
										</li>
										<li class="icon_bottom">
											<i class="fa-regular fa-circle-xmark"></i>
										</li>
									</ul> */}
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <a href="/#">
              <img src="../images/icons/logostore.jpg" alt="IMG-LOGO" />
            </a>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div> */}
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify={Array.isArray(getCart) ? getCart.length : 0}
            >
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            {/* <a
              href="#"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify={0}
            >
              <i className="zmdi zmdi-favorite-outline" />
            </a> */}
            <div className="hover-user">
              <li className="fa-regular fa-user">
                <ul className="hover-user-menu">
                  <li>
                    <a href="/#">Tài khoản của tôi</a>
                  </li>
                  <li>
                    <a href>Đơn đã mua</a>
                  </li>
                  <li>
                    <a href>Đăng xuất</a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
         
          <ul className="main-menu-m">
            <li>
              <Link to='/'>Trang chủ</Link>
              
            </li>
            <li>
              <Link to={'/pd/'}>Sản phẩm</Link>
            </li>
            {/* <li>
              <a href="/#" className="label1 rs1" data-label1="hot">
                Flash Sale
              </a>
            </li> */}
            <li>
              <Link to={'/p/'}>Bài viết</Link>
            </li>
            <li>
              <Link to={'/a/'}>Giới thiệu</Link>
            </li>
            <li>
              <Link to={'/c/'}>Liên hệ</Link>
            </li>
          </ul>
        </div>
        {/*End Menu Mobile */}
        {/* Modal Search */}
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="../images/icons/icon-close2.png" alt="CLOSE" />
            </button>
            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Tìm kiếm sản phẩm..."
              />
            </form>
          </div>
        </div>
      </header>
      {/* Cart */}
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart" />
        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Giỏ hàng của bạn</span>
            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close" />
            </div>
          </div>
          <div className="header-cart-content flex-w js-pscroll">
            {user1 === null ? (<p>Vui lòng đăng nhập để xem giỏ hàng!!</p>) : user1.role === 'customer' ? (
              <ul className="header-cart-wrapitem w-full">
                {(getCart && Array.isArray(getCart) ? getCart : []).map((item, i) => (
                  <li key={i} className="header-cart-item flex-w flex-t m-b-12">
                    <div className="header-cart-item-img">
                      <img src={item.image_path} alt="IMG" />
                    </div>
                    <div className="header-cart-item-txt p-t-8">
                      <a
                        href="#"
                        className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                      >
                        {item.product_name} màu {item.color}({item.size})
                      </a>
                      <span className="header-cart-item-info">
                        {item.quantity} x {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Vui lòng đăng nhập bằng tài khoản customer để mua hàng!</p>
            )}
            <div className="w-full">
              {user1 === null ? (<p></p>) : user1.role === 'customer' ? (
                <>
                  <div className="header-cart-total w-full p-tb-40">
                    Tổng cộng: ${tongCong.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </div>

                  <div className="header-cart-buttons flex-w w-full">
                    <Link
                      to={"/crt/"}
                      className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                    >
                      Xem giỏ hàng
                    </Link>
                    <Link
                      to={"/pm/"}
                      className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                    >
                      Thanh toán
                    </Link>
                  </div>
                </>
              ) : (<p></p>)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
