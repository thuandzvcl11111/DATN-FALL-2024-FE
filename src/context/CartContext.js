import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thoat } from "../slide/AuthSlice";
// import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // Lấy giỏ hàng khi người dùng đăng nhập
  useEffect(() => {
    if(token){
    fetchCartData();
    }
}, [token]);

  // Hàm lấy giỏ hàng từ API
  const fetchCartData = async () => {
    // const token = localStorage.getItem("token");  // Retrieve the token from localStorage
    if (!token) {
      console.log("No token found, user might be logged out.");
      return;  // If no token, we don't need to fetch cart data
    }
  
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  // Include the token in the request header
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
  
      const data = await response.json();
      setCartData(data);  // Update the cart data state
  
      // Store the cart data in localStorage for persistence
      localStorage.setItem("cartData", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = () => {
    dispatch(thoat());
    setCartData([]); // Optionally clear the cart data on logout
    localStorage.removeItem("cartData");
    // navigate("/lg"); // Optionally redirect to login page
  };


  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = async (product) => {
   
    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        console.log("Item added to cart successfully.");
        // Reload cart data after item is added
        await fetchCartData();
      } else {
        console.error("Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    } finally {
      setLoading(false);
    }
    // window.location.href='/';
};

// Hàm xóa toàn bộ giỏ hàng
const clearCart = async () => {
  // if (!user.daDangNhap) {
  //     alert("Bạn cần đăng nhập để thực hiện thao tác này!");
  //     return;
  // }

  fetch('http://127.0.0.1:8000/api/cart/clear',{
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
  }
  })
  setCartData([])
  localStorage.removeItem("cartData"); // Xóa giỏ hàng khỏi localStorage
  alert("Giỏ hàng đã được xóa thành công!");
  // window.location.href = '/'
  await fetchCartData();
};
const removeFromCart = async (productId) => {
  // if (!user.daDangNhap) {
  //     alert("Bạn cần đăng nhập để thực hiện thao tác này!");
  //     return;
  // }

  try {
      setLoading(true);

      const response = await fetch(`http://127.0.0.1:8000/api/cart/${productId}`, {
          method: "DELETE", // Giả sử server hỗ trợ DELETE cho sản phẩm cụ thể
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
      });

      if (response.ok) {
          // Lấy danh sách giỏ hàng mới sau khi xóa sản phẩm
          const updatedCart = await response.json();
          setCartData(updatedCart);

          // Cập nhật lại localStorage
          localStorage.setItem("cartData", JSON.stringify(updatedCart));

          alert("Sản phẩm đã được xóa khỏi giỏ hàng!");
      } else {
          alert("Không thể xóa sản phẩm. Vui lòng thử lại!");
      }
  } catch (error) {
      console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
  } finally {
      setLoading(false);
  }
  window.location.href = '/'
};

  return (
    <CartContext.Provider value={{ cartData, addToCart, clearCart, removeFromCart,handleLogout, loading }}>
      {children}
    </CartContext.Provider>
  );
};
