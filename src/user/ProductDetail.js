import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
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

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [pro, setPro] = useState([]);
  const [cate, setCate] = useState([])
  const [comment, setComment] = useState([])
  const [u, setU] = useState([])
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.token);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_product_detail/" + id)
      .then((res) => res.json())
      .then((sp) => {
        setData(sp);
      });
  }, [id]);
  // console.log(data);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get_category_withoutparentId")
      .then((res) => res.json())
      .then((sp) => {
        setCate(sp);
      });
  }, []);
  // console.log(data.category_id);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/getcomments')
      .then((res) => res.json())
      .then((sp) => {
        setComment(sp)
      })
  }, [])
  const productComments = comment.filter((item) => item.product_id === Number(id));
  // console.log(user.user);
  const dangBl = {
    user_id: user?.user?.id || null,
    product_id: Number(id) // cần cập nhật giá trị này từ input
  };

  const postComment = () => {
    if (user.user === null || !user.token) {
      alert('Bạn chưa đăng nhập, không thể bình luận được');
      return;
    }

    if (dangBl.comment === '') {
      alert('Vui lòng nhập nội dung bình luận');
      return;
    }

    fetch('http://127.0.0.1:8000/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(dangBl),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, 'Bình luận vừa thêm');
        alert('Bình luận của bạn đã được gửi thành công!');
        // Thêm logic để cập nhật giao diện nếu cần
      })
      .catch((error) => {
        console.error('Có lỗi xảy ra khi gửi bình luận:', error);
        alert('Không thể gửi bình luận, vui lòng thử lại sau.');
      });
  };



  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/usersIndex')
      .then((res) => res.json())
      .then((sp) => {
        setU(sp)
      })
  }, [])

  const pro_category = data.category_id;

  useEffect(() => {
    if (typeof pro_category !== "undefined" && pro_category !== 0) {
      fetch(`http://127.0.0.1:8000/api/products/category/${pro_category}`)
        .then((res) => res.json())
        .then((sp) => {
          setPro(sp);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [pro_category]);

  const product_meta = data.product_meta;



  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const uniqueSizes = Array.from(new Set((product_meta || []).map(product => product.size))).slice(0, 3);
  const uniqueColors = Array.from(
    new Map((product_meta || []).map(product => [product.color_id, product.color])).values()
  ).slice(0, 3);

  // console.log(purchaseQuantity);




  const handleSizeChange = (event) => {
    const selectedSizeId = parseInt(event.target.value);
    setSelectedSize(selectedSizeId);
  };

  const handleColorChange = (event) => {
    const selectedColorId = parseInt(event.target.value);
    setSelectedColor(selectedColorId);
  };

  const handleQuantityChange = (e) => {
    const findId = product_meta.find((item) => item.id)
    // console.log(findId.id);
    const product = product_meta.find(q => q.id === findId.id);
    // console.log(product);
    const newQuantity = parseInt(e.target.value, 10);
    // Kiểm tra số lượng người dùng muốn mua có hợp lệ không
    if (newQuantity > product.quantity) {
      alert(`Không đủ hàng trong kho. Số lượng có sẵn: ${product.quantity}`);
      setPurchaseQuantity(product.quantity); // Giới hạn ở số lượng có sẵn
    } else if (newQuantity < 1 || isNaN(newQuantity)) {
      alert("Số lượng mua phải ít nhất là 1");
      setPurchaseQuantity(1); // Giới hạn số lượng tối thiểu là 1
    } else {
      setPurchaseQuantity(newQuantity); // Cập nhật số lượng muốn mua
    }
  };
  // console.log(selectedSize, selectedColor);

  const chonSize = (
    <option>Chọn size</option>
  )
  const chonColor = (
    <option>Chọn color</option>
  )

  const handleAdd = () => {
    addToCart({ product_id: data.id, color_id: selectedColor, size_id: selectedSize, quantity: purchaseQuantity});
    navigate('/')
  }

  return (
    <Fragment>
      <Header />
      <div>
        {/* breadcrumb */}
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <Link to={'/'} className="stext-109 cl8 hov-cl1 trans-04">
              Home
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              />
            </Link>
            <Link to={'/pd/'} className="stext-109 cl8 hov-cl1 trans-04">
              {cate.find(ct => ct.id === data.category_id)?.name}
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              />
            </Link>
            <span className="stext-109 cl4">{data.name}</span>
          </div>
        </div>
        {/* Product Detail */}
        <section className="sec-product-detail bg0 p-t-65 p-b-60">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    {/* <div className="wrap-slick3-dots" /> */}
                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                    <div className="slick3 gallery-lb">
                      <div className="item-slick3">
                        <div className="wrap-pic-w pos-relative">
                          <img src={'/images/' + data.image_path} alt="IMG-PRODUCT" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    {data.name}
                  </h4>
                  <p>Thương hiệu: LOCAL STORE® | Tình trạng: Còn hàng</p>
                  <span className="mtext-106 cl2">{data.price}</span>
                  <p className="stext-102 cl3 p-t-23">
                    LOCAL STORE® / Streetwear / Based in Saigon / Made in
                    Vietnam
                  </p>
                  {/*  */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time" onChange={handleSizeChange}>
                            {[chonSize, ...uniqueSizes.map((meta) => (
                              <option value={meta.id}>{meta.name}</option>
                            ))]}
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Màu</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time" onChange={handleColorChange}>
                            {[chonColor, ...uniqueColors.map((meta) => (
                              <option value={meta.id}>{meta.name}</option>
                            ))]}
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus" />
                          </div>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            // defaultValue={1}
                            value={purchaseQuantity}
                            onChange={handleQuantityChange}
                          />
                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus" />
                          </div>
                        </div>
                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" type="button" onClick={handleAdd}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  {/* <div class="flex-w flex-m p-l-100 p-t-40 respon7">
							<div class="flex-m bor9 p-r-10 m-r-11">
								<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
									data-tooltip="Add to Wishlist">
									<i class="zmdi zmdi-favorite"></i>
								</a>
							</div>

							<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
								data-tooltip="Facebook">
								<i class="fa fa-facebook"></i>
							</a>

							<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
								data-tooltip="Twitter">
								<i class="fa fa-twitter"></i>
							</a>

							<a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
								data-tooltip="Google Plus">
								<i class="fa fa-google-plus"></i>
							</a>
						</div> */}
                </div>
              </div>
            </div>
            <div className="bor10 m-t-50 p-t-43 p-b-40">
              {/* Tab01 */}
              <div className="tab01">
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item p-b-10">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                    >
                      Size chart
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content p-t-43">
                  {/* - */}
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <div className="how-pos2 p-lr-15-md">
                      <p className="stext-102 cl6">
                        <img
                          src="/images/spchitiet/bangsize.jpg"
                          width="100%"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                  {/* - */}

                  {/* - */}

                </div>
              </div>
            </div>
          </div>
          <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
            {/* <span class="stext-107 cl6 p-lr-25">
				SKU: JAK-01
			</span>

			<span class="stext-107 cl6 p-lr-25">
				Categories: Jacket, Men
			</span> */}
          </div>
        </section>
        <div className="container">
          <div class="comment-section">
            {productComments.length > 0 ? (
              productComments.map((item) => (
                <div className="comment" key={item.id}>
                  <div className="user">
                    {u.find((user) => user.id === item.user_id)?.name || "Unknown User"}
                  </div>
                  <div className="timestamp">
                    {new Date(item.created_at).toLocaleString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="message">{item.comment}</div>
                </div>
              ))
            ) : (
              <div className="comment">
                <p>Sản phẩm chưa có bình luận</p>
              </div>
            )}
            <textarea
              placeholder="Nhập bình luận của bạn"
              onChange={(e) => (dangBl.comment = e.target.value)}
              style={{ width: '100%', height: '100px' }}
            ></textarea>
            <button onClick={postComment}>Gửi bình luận</button>
          </div>
        </div>
        {/* Related Products */}
        <section className="sec-relate-product bg0 p-t-45 p-b-105">
          <div className="container">
            <div className="p-b-45">
              <h3 className="ltext-106 cl5 txt-center">SẢN PHẨM LIÊN QUAN</h3>
            </div>
            {/* Slide2 */}
            <div className="wrap-slick2">
              <div className="slick2">
                {pro.map((product, i) => (
                  <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                    {/* Block2 */}
                    <div className="block2">
                      <div className="block2-pic hov-img0">
                        <img src={'/images/'+product.image_path} alt="IMG-PRODUCT" />
                      </div>
                      <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                          <a
                            href="product-detail.html"
                            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                          >
                            {product.name}
                          </a>
                          <span className="stext-105 cl3">{product.price}</span>
                        </div>
                        <div className="block2-txt-child2 flex-r p-t-3">
                          <a
                            href="/#"
                            className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                          >
                            <img
                              className="icon-heart1 dis-block trans-04"
                              src="../images/icons/icon-heart-01.png"
                              alt="ICON"
                            />
                            <img
                              className="icon-heart2 dis-block trans-04 ab-t-l"
                              src="../images/icons/icon-heart-02.png"
                              alt="ICON"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProductDetail;
