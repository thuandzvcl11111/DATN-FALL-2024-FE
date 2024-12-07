import React, { Fragment, useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "../context/CartContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ViewCart = () => {
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
      const token = localStorage.getItem("token");
      const { clearCart, removeFromCart } = useContext(CartContext)
      const cartData = JSON.parse(localStorage.getItem("cartData"))
      const getCart = cartData.data
      // console.log(getCart);
      const tongCong = Array.isArray(getCart) ? getCart.reduce((sum, item) => sum + item.total_price, 0) : 0;
    
      // const delCart = () =>{
      //   if(getCart === null){
      //     alert('chưa có sản phẩm nào trong giỏ hàng')
      //     return
      //   }
      //   fetch('http://127.0.0.1:8000/api/cart/clear',{
      //     method: 'DELETE',
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`
      //   }
      //   })
      // }

      const updateQuantity = async (id, quantity) => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/cart/update-quantity/${id}/${quantity}`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` // Đảm bảo token được định nghĩa
            }
          });
      
          const data = await response.json();
      
          if (response.ok) {
            // Thành công
            alert(data.message || "Quantity updated successfully.");
            // Cập nhật giao diện nếu cần thiết, ví dụ: reload dữ liệu giỏ hàng
          } else {
            // Thất bại
            alert(data.error || "Failed to update quantity.");
          }
        } catch (error) {
          console.error("Error updating quantity:", error);
          
        }
        window.location.href = '/'
      };

      
      // const delCartFromId = (e, id) => {
      //   e.preventDefault()
      //   alert('Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng chứ?')
      //   fetch('http://127.0.0.1:8000/api/cart/'+ id,{
      //     method: 'DELETE',
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`
      //     }
      //   })
      //   window.location.href = '/'
      // }
      
  return (
    <Fragment>
      <Header />
      <div>
        
        {/* breadcrumb */}
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
              Home
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              />
            </a>
            <span className="stext-109 cl4">Shoping Cart</span>
          </div>
        </div>
        {/* Shoping Cart */}
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container padding-bottom-3x mb-1">
          {/* Alert*/}
          {/* <div class="alert alert-info alert-dismissible fade show text-center" style="margin-bottom: 30px;"><span
				class="alert-close" data-dismiss="alert"></span><img class="d-inline align-center"
				src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAzIDUxMi4wMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDMgNTEyLjAwMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjU2LjAwMSw2NGMtNzAuNTkyLDAtMTI4LDU3LjQwOC0xMjgsMTI4czU3LjQwOCwxMjgsMTI4LDEyOHMxMjgtNTcuNDA4LDEyOC0xMjhTMzI2LjU5Myw2NCwyNTYuMDAxLDY0eiAgICAgIE0yNTYuMDAxLDI5OC42NjdjLTU4LjgxNiwwLTEwNi42NjctNDcuODUxLTEwNi42NjctMTA2LjY2N1MxOTcuMTg1LDg1LjMzMywyNTYuMDAxLDg1LjMzM1MzNjIuNjY4LDEzMy4xODQsMzYyLjY2OCwxOTIgICAgIFMzMTQuODE3LDI5OC42NjcsMjU2LjAwMSwyOTguNjY3eiIgZmlsbD0iIzUwYzZlOSIvPgoJCQk8cGF0aCBkPSJNMzg1LjY0NCwzMzMuMjA1YzM4LjIyOS0zNS4xMzYsNjIuMzU3LTg1LjMzMyw2Mi4zNTctMTQxLjIwNWMwLTEwNS44NTYtODYuMTIzLTE5Mi0xOTItMTkycy0xOTIsODYuMTQ0LTE5MiwxOTIgICAgIGMwLDU1Ljg1MSwyNC4xMjgsMTA2LjA2OSw2Mi4zMzYsMTQxLjE4NEw2NC42ODQsNDk3LjZjLTEuNTM2LDQuMTE3LTAuNDA1LDguNzI1LDIuODM3LDExLjY2OSAgICAgYzIuMDI3LDEuNzkyLDQuNTY1LDIuNzMxLDcuMTQ3LDIuNzMxYzEuNjIxLDAsMy4yNDMtMC4zNjMsNC43NzktMS4xMDlsNzkuNzg3LTM5Ljg5M2w1OC44NTksMzkuMjMyICAgICBjMi42ODgsMS43OTIsNi4xMDEsMi4yNCw5LjE5NSwxLjI4YzMuMDkzLTEuMDAzLDUuNTY4LTMuMzQ5LDYuNjk5LTYuNGwyMy4yOTYtNjIuMTQ0bDIwLjU4Nyw2MS43MzkgICAgIGMxLjA2NywzLjE1NywzLjU0MSw1LjYzMiw2LjY3Nyw2LjcyYzMuMTM2LDEuMDY3LDYuNTkyLDAuNjQsOS4zNjUtMS4yMTZsNTguODU5LTM5LjIzMmw3OS43ODcsMzkuODkzICAgICBjMS41MzYsMC43NjgsMy4xNTcsMS4xMzEsNC43NzksMS4xMzFjMi41ODEsMCw1LjEyLTAuOTM5LDcuMTI1LTIuNzUyYzMuMjY0LTIuOTIzLDQuMzczLTcuNTUyLDIuODM3LTExLjY2OUwzODUuNjQ0LDMzMy4yMDV6ICAgICAgTTI0Ni4wMTcsNDEyLjI2N2wtMjcuMjg1LDcyLjc0N2wtNTIuODIxLTM1LjJjLTMuMi0yLjExMi03LjMxNy0yLjM4OS0xMC42ODgtMC42NjFMOTQuMTg4LDQ3OS42OGw0OS41NzktMTMyLjIyNCAgICAgYzI2Ljg1OSwxOS40MzUsNTguNzk1LDMyLjIxMyw5My41NDcsMzUuNjA1TDI0Ni43LDQxMS4yQzI0Ni40ODcsNDExLjU2MywyNDYuMTY3LDQxMS44NCwyNDYuMDE3LDQxMi4yNjd6IE0yNTYuMDAxLDM2Mi42NjcgICAgIEMxNjEuOSwzNjIuNjY3LDg1LjMzNSwyODYuMTAxLDg1LjMzNSwxOTJTMTYxLjksMjEuMzMzLDI1Ni4wMDEsMjEuMzMzUzQyNi42NjgsOTcuODk5LDQyNi42NjgsMTkyICAgICBTMzUwLjEwMywzNjIuNjY3LDI1Ni4wMDEsMzYyLjY2N3ogTTM1Ni43NTksNDQ5LjEzMWMtMy40MTMtMS43MjgtNy41MDktMS40NzItMTAuNjg4LDAuNjYxbC01Mi4zNzMsMzQuOTIzbC0zMy42NDMtMTAwLjkyOCAgICAgYzQwLjM0MS0wLjg1Myw3Ny41ODktMTQuMTg3LDEwOC4xNi0zNi4zMzFsNDkuNTc5LDEzMi4yMDNMMzU2Ljc1OSw0NDkuMTMxeiIgZmlsbD0iIzUwYzZlOSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
				width="18" height="18" alt="Medal icon">&nbsp;&nbsp;With this purchase you will earn <strong>290</strong> Reward
			Points.</div> */}
          {/* Shopping Cart*/}
          <div className="table-responsive shopping-cart">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th className="text-center">Số lượng</th>
                  <th className="text-center">Tạm tính</th>
                  {/* <th className="text-center">Giảm giá</th> */}
                  {/* <th className="text-center">
                    <a className="btn btn-sm btn-outline-danger" href="#" type="button" onClick={clearCart}>
                      Xóa
                    </a>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {getCart.map((item,i)=>(
                  <tr>
                    <td>
                      <div className="product-item">
                        <a className="product-thumb" href="#">
                          <img src={item.image_path} alt="Product" />
                        </a>
                        <div className="product-info">
                          <h4 className="product-title">
                            <a>{item.product_name}</a>
                          </h4>
                          <span>
                            <em>Size:</em> {item.size}
                          </span>
                          <span>
                            <em>Color:</em> {item.color}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">
                        <select className="form-control" value={item.quantity} onChange={e=>updateQuantity(item.product_meta_id, e.target.value)}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                    {/* <td className="text-center text-lg text-medium">$18.00</td> */}
                    <td className="text-center">
                      <a
                        className="remove-from-cart"

                        data-toggle="tooltip"
                        title
                        data-original-title="Remove item"
                        onClick={() => removeFromCart(item.product_meta_id)}
                      >
                        <i className="fa fa-trash" />
                      </a>
                    </td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
          <div className="shopping-cart-footer">
            {/* <div className="column">
              <form className="coupon-form" method="post">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Mã giảm giá"
                  required
                />
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="submit"
                >
                  Sử dụng
                </button>
              </form>
            </div> */}
            <div className="column text-lg">
              Tạm tính: <span className="text-medium">{tongCong}</span>
            </div>
          </div>
          <div className="shopping-cart-footer">
            <div className="column">
              <a className="btn btn-outline-secondary" href="#">
                <i className="icon-arrow-left" />
                &nbsp;Quay lại mua sắm
              </a>
            </div>
            <div className="column">
              <a
                className="btn btn-primary"
                href="#"
                data-toast
                data-toast-type="success"
                data-toast-position="topRight"
                data-toast-icon="icon-circle-check"
                data-toast-title="Your cart"
                data-toast-message="is updated successfully!"
              >
                Cập nhật giỏ hàng
              </a>
              <Link to={'/pm/'} className="btn btn-success" >
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ViewCart;
