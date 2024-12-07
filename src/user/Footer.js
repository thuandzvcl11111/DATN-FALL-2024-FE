import React, { Fragment, useContext, useEffect, useState } from 'react'
// import { dataContext } from '../context/dataContext'


const Footer = () => {
  // const id = useContext(dataContext)
  
  return (
 
    <Fragment>
        <div>
  <footer className="bg3 p-t-75 p-b-32">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            Trợ giúp &amp; Hỗ trợ
          </h4>
          <ul>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Chính sách
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Giao hàng
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Liên hệ
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Giới thiệu
              </a>
            </li>
          </ul>
          {/* <ul>
						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Mở khóa sự tiện lợi tại The Local Store! Khám phá những mẹo vặt sáng tạo cho cuộc sống liền mạch. Mua
								sắm các tiện ích thông minh và giải pháp tổ chức. Nâng tầm phong cách sống của bạn với tính thực tế và
								phong cách. Điểm đến lý tưởng của bạn cho một thói quen thông minh và đơn giản hơn.
							</a>
						</li> */}
          {/* <li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Returns
							</a>
						</li>

						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								Shipping
							</a>
						</li>

						<li class="p-b-10">
							<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
								FAQs
							</a>
						</li> */}
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            Thể Loại
          </h4>
          <ul>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Nam
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Nữ
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Áo khoác
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Phụ kiện
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            THÔNG TIN LIÊN HỆ
          </h4>
          <form>
            <div className="p-t-27 icon_btn">
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <img src="../images/icons/fb.png" alt />
              </a>
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <img src="../images/icons/ig.png" alt />
              </a>
            </div>
          </form>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            Địa chỉ
          </h4>
          <ul className="stext-107 cl7 size-201">
            <li>
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fas fa-location  " /> <strong className="str_btn"> Địa chỉ:</strong> Phạm Văn Bạch, P. 15, Q.
                Tân Bình, Tp. HCM
              </a>
            </li>
            <li>
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-phone" /> <strong className="str_btn">Điện thoại:</strong> 0999.999.999
              </a>
            </li>
            <li>
              <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-envelope" /> <strong className="str_btn">Email:</strong> email@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* <div class="col-sm-6 col-lg-3 p-b-50">
					<h4 class="stext-301 cl0 p-b-30">
						Bản đồ đường đi
					</h4>

					<form>
						<div class="wrap-input1 w-full p-b-4 ggmap">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.465503297383!2d106.6271520246919!3d10.852155255808118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b6c59ba4c97%3A0x535e784068f1558b!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1sen!2s!4v1720587627903!5m2!1sen!2s"
								width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div> */}
        {/* <div class="p-t-18">
							<button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
								Subscribe
							</button>
						</div> */}
        {/* </form> */}
        {/* </div> */}
      </div>
      <div className="p-t-40">
        <div className="flex-c-m flex-w p-b-18">
          <a href="#" className="m-all-1">
            <img src="../images/icons/icon-pay-01.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="../images/icons/icon-pay-02.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="../images/icons/icon-pay-03.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="../images/icons/icon-pay-04.png" alt="ICON-PAY" />
          </a>
          <a href="#" className="m-all-1">
            <img src="../images/icons/icon-pay-05.png" alt="ICON-PAY" />
          </a>
        </div>
        <p className="stext-107 cl6 txt-center">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright ©
          <i className aria-hidden="true" />
          <a href target="_blank">LOCAL STORE</a>
          {/* &amp; distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a> */}
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </footer>
  {/* Back to top */}
  <div className="btn-back-to-top" id="myBtn">
    <img src="../images/icons/iconic.png" alt />
    {/* <span class="symbol-btn-back-to-top">
			<i class="zmdi zmdi-chevron-up"></i>
		</span> */}
  </div>
  {/* Modal */}
 
</div>
    </Fragment>
  )
}

export default Footer