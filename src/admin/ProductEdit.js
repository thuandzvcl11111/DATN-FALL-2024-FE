import React, { Fragment, useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { useParams } from 'react-router-dom';

const ProductEdit = ({ onProductUpdate }) => {
  useEffect(()=>{
    const s1 = document.createElement("script");
    s1.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    s1.async = false;
    document.body.appendChild(s1);

    const s0 = document.createElement("script");
    s0.src = "/js/admin.js";
    s0.async = false;
    document.body.appendChild(s0);

    const s2 = document.createElement("script");
    s2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
    s2.async = false;
    document.body.appendChild(s2); 

    const s3 = document.createElement("script");
    s3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
    s3.async = false;
    document.body.appendChild(s3);

    return () => {
      document.body.removeChild(s1);
      document.body.removeChild(s0);
      document.body.removeChild(s2);
      document.body.removeChild(s3);
    }
  },[])
  const token = localStorage.getItem("token");  // Lấy token từ localStorage
  const { id } = useParams();  // Lấy ID từ URL để xác định sản phẩm
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category_id: 0,
    description: '',
    image_path: '',
    colors: [],  // Khởi tạo là mảng
    sizes: [],   // Khởi tạo là mảng
    quantity: 0,
  });

  // Lấy thông tin sản phẩm từ API khi component được render
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/get_product_detail/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setEditProduct(data);
      });
  }, [id]);

  // State chỉnh sửa sản phẩm
  const [editProduct, setEditProduct] = useState({ ...product });

  // Lấy danh mục để hiển thị trong select
  const [cate, setCate] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_category_withoutparentId')
      .then(res => res.json())
      .then(data => setCate(data));
  }, []);

  // Hàm xử lý chỉnh sửa sản phẩm
  const handleEditProduct = () => {
    fetch(`http://127.0.0.1:8000/api/put_product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(editProduct),
    })
      .then(res => res.json())
      .then(data => {
        // window.location.href = '/ad/prod-list/';  // Điều hướng sau khi sửa thành công
      })
      .catch(error => console.error('Error:', error));
  };

  // Hàm thay đổi dữ liệu trong form
  const handleChange = (key, value) => {
    setEditProduct({ ...editProduct, [key]: value });
  };
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
      <div id="content" className="container-fluid">
        <div className="card">
          <div className="card-header font-weight-bold">Sửa sản phẩm</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Tên sản phẩm</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  value={editProduct.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Giá</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  id="price"
                  value={editProduct.price}
                  onChange={e => handleChange('price', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="image">Hình ảnh sản phẩm</label>
                <input
                  className="form-control"
                  type="text"
                  value={editProduct.image_path}
                  onChange={e => handleChange('image_path', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Chi tiết sản phẩm</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="description"
                  cols={30}
                  rows={5}
                  value={editProduct.description}
                  onChange={e => handleChange('description', e.target.value)}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="color">Màu sản phẩm</label>
                <input
                  className="form-control"
                  type="text"
                  name="colors"
                  id="colors"
                  value={editProduct.colors ? editProduct.colors.join(', ') : ''}
                  onChange={e => handleChange('colors', e.target.value)}
                  // placeholder="[Red, Blue]"
                />
              </div>

              <div className="form-group">
                <label htmlFor="size">Size sản phẩm</label>
                <input
                  className="form-control"
                  type="text"
                  name="sizes"
                  id="sizes"
                  value={editProduct.sizes ? editProduct.sizes.join(', ') : ''}
                  onChange={e => handleChange('sizes', e.target.value)}
                  // placeholder="[S, M, L]"
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="quantity">Số lượng sản phẩm</label>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={editProduct.quantity}
                  onChange={e => handleChange('quantity', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Danh mục</label>
                <select
                  className="form-control"
                  value={editProduct.category_id}
                  onChange={e => handleChange('category_id', e.target.value)}
                >
                  <option value="">Chọn danh mục</option>
                  {cate && cate.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>

              <button type="button" className="btn btn-primary" onClick={handleEditProduct}>
                Lưu thay đổi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default ProductEdit