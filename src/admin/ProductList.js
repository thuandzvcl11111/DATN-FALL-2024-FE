import React, { Fragment, useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductList = () => {
  useEffect(() => {
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
  }, [])
  const token = localStorage.getItem("token");
  const [pro, setPro] = useState([])
  const [cate, setCate] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_all_product')
      .then(res => res.json())
      .then(data => setPro(data))

  }, [])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_category_withoutparentId')
      .then(res => res.json())
      .then(data => setCate(data))
  }, [])
  // console.log(pro);
  
  const handleDelete = (event, id) => {
    // Ngừng hành động mặc định của thẻ <a>
    event.preventDefault();

    fetch(`http://127.0.0.1:8000/api/delete_product/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Gửi token trong header
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Không thể xóa Sản phẩm');
        }
        return res.json(); // Chuyển phản hồi thành JSON
      })
      .then((data) => {
        alert('Sản phẩm đã được xóa thành công');
        // window.location.href = '/ad/';  // Điều hướng về trang danh mục
      })
      .catch((error) => {
        console.error('Có lỗi khi xóa Sản phẩm:', error);
        alert('Có lỗi khi xóa Sản phẩm');
      });
      window.location.href = '/ad/prod-list/'
  };
  // console.log(pro.product_meta, 'get prometa');
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
              <h5 className="m-0 ">Danh sách sản phẩm</h5>
              <div className="form-search form-inline">
                <form action="#">
                  <input type className="form-control form-search" placeholder="Tìm kiếm" />
                  <input type="submit" name="btn-search" defaultValue="Tìm kiếm" className="btn btn-primary" />
                </form>
              </div>
            </div>
            <div className="card-body">
              {/* <Link to={'/ad/prod-add/'} className="btn btn-success btn-sm rounded-0 text-white">Thêm</Link>|
              <Link to={'/ad/prod-cate/'} className="btn btn-success btn-sm rounded-0 text-white">Danh mục sản phẩm</Link> */}
              <Link to={'/ad/prod-add/'} className="btn btn-success ">Thêm</Link>
              <Link to={'/ad/prod-cate/'} className="btn btn-success ">Danh mục sản phẩm</Link>
              <table className="table table-striped table-checkall" style={{ marginTop: '10px' }}>
                <thead>
                  <tr>
                    <th scope="col">
                      <input name="checkall" type="checkbox" />
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Size</th>
                    <th scope="col">Màu</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Tác vụ</th>
                  </tr>
                </thead>
                <tbody>
                    {pro.map((item, i) => {
                    const size = item.product_meta.map((meta) => meta.size)
                    const color = item.product_meta.map((meta) => meta.color)
                    // console.log(size, 'getsize');
                    const uniqueSizes = Array.from(new Set((size || []).map(s => s.name))).slice(0, 3);
                    const uniqueColor = Array.from(new Set((color || []).map(c => c.name))).slice(0, 3);
                    return (<tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{i}</td>
                      <td><img src={item.image_path} width={80} height={80} /></td>
                      <td><a >{item.name}</a></td>
                      <td>{item.price}₫</td>
                      <td>{cate.find(ct => ct.id === item.category_id)?.name}</td>
                      <td>{uniqueSizes.join(', ')}</td>
                      <td>{uniqueColor.join(', ')}</td>
                      <td>{item.status === 'in_stock' ? (<span className="badge badge-success">Còn hàng</span>) : (<span className="badge badge-dark">Hết hàng</span>)}</td>
                      <td>
                        <Link to={'/ad/prod-edit/'+ item.id} className="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit" /></Link>
                        <a href="#" className="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={(e) => handleDelete(e, item.id)}><i className="fa fa-trash" /></a>
                      </td>
                    </tr>)
                  })}
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">Trước</span>
                      <span className="sr-only">Sau</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default ProductList