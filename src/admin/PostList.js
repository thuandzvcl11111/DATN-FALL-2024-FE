import React, { Fragment, useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostList = () => {
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
  const [blog, setBlog] = useState([])
  const [cate, setCate] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/show_blogs')
      .then((res) => res.json())
      .then((blog) => {
        setBlog(blog)
      })
  }, []);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories_blog')
      .then((res) => res.json())
      .then((blog) => {
        setCate(blog)
      })
  }, []);
  const delBlog = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Thêm token nếu cần
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Có lỗi khi xóa blog');
          }
          return response.json();
        })
        .then(() => {
          // Cập nhật lại danh sách blog sau khi xóa
          setBlog(blog.filter((blog) => blog.id !== id)); // Loại bỏ blog khỏi danh sách
        })
        .catch((error) => {
          console.error('Có lỗi xảy ra khi xóa blog:', error);
        });
    }
  };
  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
              <h5 className="m-0 ">Danh sách bài viết</h5>
              <div className="form-search form-inline">
                <form action="#">
                  <input type className="form-control form-search" placeholder="Tìm kiếm" />
                  <input type="submit" name="btn-search" defaultValue="Tìm kiếm" className="btn btn-primary" />
                </form>
              </div>
            </div>
            <div className="card-body">
              <Link to={'/ad/post-add/'} className="btn btn-success">Thêm bài viết</Link>
              <Link to={'/ad/post-blog/'} className="btn btn-success">Danh mục bài viêt</Link>
              <table className="table table-striped table-checkall" style={{ marginTop: '10px' }}>
                <thead>
                  <tr>
                    <th scope="col">
                      <input name="checkall" type="checkbox" />
                    </th>
                    <th scope="col">#</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Tác vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {blog.map((item, i) => (
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td scope="row">{i}</td>
                      <img
                        src={item.image_path}
                        alt=""
                        width="100"
                        height="100"
                        style={{ padding: '12px' }}
                      />
                      <td><a href>{item.title}</a></td>
                      <td>{cate.find(ct => ct.id === item.category_id)?.name}</td>
                      <td>{item.published_date}</td>
                      <td><Link to={'/ad/post-edit/' + item.id} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit" /></Link>
                        <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" style={{ margin: '0' }} onClick={() => delBlog(item.id)}><i className="fa fa-trash" /></button>
                      </td>
                    </tr>
                  ))}




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

export default PostList