import React, { Fragment, useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { useSelector } from 'react-redux';

const PostAdd = () => {
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
  const [cate, getCate] = useState([])
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories_blog')
      .then(res => res.json())
      .then(data => getCate(data))
  }, [])

  const blog = {}
  const handleAdd = () => {
    if (!blog.title || !blog.content || !blog.category_id) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("image", blog.image);
    formData.append("category_id", blog.category_id);
  
    // if (blog.image) {
    //   formData.append("image", blog.image); // Thêm file ảnh
    // }
  
    fetch("http://127.0.0.1:8000/api/post_blog", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // Đảm bảo token được truyền đúng
      },
      body: formData, // Sử dụng FormData
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Blog vừa được thêm");
        alert("Thêm blog thành công!");
      })
      .catch((err) => {
        console.error("Lỗi khi thêm blog:", err);
        alert("Có lỗi xảy ra!");
      });
      window.location.href = '/ad/post-list/'
  };
  

  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold">Thêm bài viết</div>
            <div className="card-body">
              <form>
                {/* Tiêu đề bài viết */}
                <div className="form-group">
                  <label htmlFor="name">Tiêu đề bài viết</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => (blog.title = e.target.value)}
                  />
                </div>

                {/* Nội dung bài viết */}
                <div className="form-group">
                  <label htmlFor="content">Nội dung bài viết</label>
                  <textarea
                    className="form-control"
                    id="content"
                    cols={30}
                    rows={5}
                    onChange={(e) => (blog.content = e.target.value)}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="category">Image</label>
                {/* Hình ảnh */}
                  <input
                    type="text"
                    className="form-control"
                    // Chỉ cho phép chọn file ảnh
                    onChange={(e) => (blog.image = e.target.value)}
                  />
                </div>
                {/* Danh mục */}
                <div className="form-group">
                  <label htmlFor="category">Danh mục</label>
                  <select
                    className="form-control"
                    onChange={(e) => (blog.category_id = e.target.value)}
                  >
                    {cate.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nút thêm bài viết */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAdd()}
                >
                  Thêm mới
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default PostAdd