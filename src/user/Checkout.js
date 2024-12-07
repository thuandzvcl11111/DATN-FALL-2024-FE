import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useSelector } from "react-redux";

const Checkout = () => {
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


  const { cartData } = useContext(CartContext)
  const getCart = cartData.data
  const tongCong = Array.isArray(getCart) ? getCart.reduce((sum, item) => sum + item.total_price, 0) : 0;
  // const u = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  // console.log(u);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment_method: "momo",
    name_coupon: "HIEPDEPTRAIVUAVUAPHAIPHAITHOICHU", // Giá trị mặc định
  });
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_all_coupon')
      .then((res) => res.json())
      .then((sp) => {
        setCoupons(sp)
      })
  }, [])
  // Lấy dữ liệu từ localStorage khi component được render
  useEffect(() => {
    const userData = localStorage.getItem("user"); // Lấy dữ liệu từ localStorage
    if (userData) {
      const parsedUser = JSON.parse(userData); // Parse dữ liệu JSON
      setFormData((prevData) => ({
        ...prevData,
        name: parsedUser.name || "",
        email: parsedUser.email || "",
        phone: parsedUser.phone || "",
        address: parsedUser.address || "",
      }));
    }
  }, []);

  // Xử lý khi có sự thay đổi trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      phone_number: formData.phone,
      shipping_address: formData.address,
      payment_method: formData.payment_method,
      name_coupon: formData.name_coupon,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi gửi dữ liệu!");
      }

      const data = await response.json();
      // window.location.href = String(data)
      window.open(data.payUrl, '_blank');

    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại.");
    }
    window.location.href = '/'
  };


  return (
    <Fragment>
      <Header />
      {/* Shoping Cart */}
      <div className=" container-fluid my-5 ">
        <div className="row justify-content-center ">
          <div className="col-xl-10">
            <div className="card shadow-lg ">
              <div className="row p-2 mt-3 justify-content-between mx-sm-2">
                <div className="col">
                  <p className="text-muted space mb-0 shop" />
                  <p className="text-muted space mb-0 shop" />
                </div>
              </div>
              <div className="row justify-content-around">
                <div className="col-md-5">
                  <div className="card border-0">
                    <div className="card-header pb-0">
                      <h2 className="card-title space ">
                        Thông tin thanh toán
                      </h2>
                      <p className="card-text text-muted mt-4 space">
                        Chi tiết vận chuyển
                      </p>
                      <hr className="my-0" />
                    </div>
                    <div className="card-body">

                      <div className="row mt-4">
                        {/* <div class="col">
											<p class="text-muted mb-2">PAYMENT DETAILS</p>
											<hr class="mt-0">
										</div> */}
                      </div>
                      <div className="form-group">
                        <label htmlFor="name" className="small text-muted mb-1">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Họ và tên"
                        />
                      </div>
                      <div className="row no-gutters">
                        <div className="col-sm-6 pr-sm-2">
                          <div className="form-group">
                            <label htmlFor="email" className="small text-muted mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control form-control-sm"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="phone" className="small text-muted mb-1">
                              Số điện thoại
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="phone"
                              id="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Số điện thoại"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address" className="small text-muted mb-1">
                          Địa chỉ
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Địa chỉ"
                        />
                      </div>
                      <div className=" form-group">
                        {" "}
                        <label htmlFor="note" className="small text-muted mb-1">
                          Phương thức thanh toán
                        </label>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnV4cUM7jBauINof35Yn_unOz976Iz5okV8A&s" height={20} width={40} style={{ cursor: 'pointer' }} />
                      </div>

                      <div className="row mb-md-5">
                        <div className="col">
                          {" "}
                          <button
                            type="button"
                            name
                            id
                            className="btn btn-lg btn-block "
                            onClick={handleSubmit}
                          >
                            Đặt hàng
                          </button>{" "}
                        </div>
                      </div>
                      <div className="column">
                        <Link to={'/crt/'}
                          className="btn btn-outline-secondary"

                        >
                          <i className="icon-arrow-left" />
                          Giỏ hàng
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card border-0 ">
                    <div className="card-header card-2">
                      <p className="card-text text-muted mt-md-4 mb-2 space">
                        Đơn đặt hàng của bạn
                      </p>
                      <hr className="my-2" />
                    </div>
                    <div className="card-body pt-0">
                      {getCart.map((item) => (
                        <>
                          <div className="row justify-content-between">
                            <div className="col-auto col-md-7">
                              <div className="media flex-column flex-sm-row">

                                <img
                                  className=" img-fluid"
                                  src={item.image_path}
                                  width={62}
                                  height={62}
                                />
                                <div className="media-body my-auto">
                                  <div className="row ">
                                    <div className="col-auto">
                                      <p className="mb-0">
                                        <b>{item.product_name}</b>
                                      </p>
                                      <small className="text-muted">SIZE {item.size}</small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" pl-0 flex-sm-col col-auto my-auto">
                              <p className="boxed-1">{item.quantity}</p>
                            </div>
                            <div className=" pl-0 flex-sm-col col-auto my-auto ">
                              <p>
                                <b>{item.price}₫</b>
                              </p>
                            </div>
                          </div>
                          <hr className="my-2" />
                        </>
                      ))}

                      <div className="p-4">
                        <div className="input-group mb-4 border rounded-pill p-2">
                          <select
                            className="form-control border-0"
                            value={formData.name_coupon}
                            onChange={handleInputChange}
                            name="name_coupon"
                          >
                            <option value="">Hãy chọn giảm giá mà bạn mong muốn</option>
                            {coupons.map((coupon) => (
                              <option key={coupon.id} value={coupon.code}>
                                {coupon.code}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="row ">
                        <div className="col">
                          <div className="row justify-content-between">
                            <div className="col-4">
                              <p className="mb-1">
                                <b>Tạm tính</b>
                              </p>
                            </div>
                            <div className="flex-sm-col col-auto">
                              <p className="mb-1">
                                <b>{tongCong}₫</b>
                              </p>
                            </div>
                          </div>
                          <div className="row justify-content-between">
                            <div className="col">
                              <p className="mb-1">
                                <b>Phí ship</b>
                              </p>
                            </div>
                            <div className="flex-sm-col col-auto">
                              <p className="mb-1">
                                <b>0₫</b>
                              </p>
                            </div>
                          </div>
                          <hr className="my-0" />
                          <br />
                          <div className="row justify-content-between">
                            <div className="col-4">
                              <p>
                                <b>Tổng tiền</b>
                              </p>
                            </div>
                            <div className="flex-sm-col col-auto">
                              <p className="mb-1">
                                <b>{tongCong}₫</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="row mb-5 mt-4 ">
										<div class="col-md-7 col-lg-6 mx-auto"><button type="button"
												class="btn btn-block btn-outline-primary btn-lg">MÃ GIẢM GIÁ</button></div>
									</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Checkout;
