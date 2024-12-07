import React, { Fragment, useEffect, useRef, useState } from 'react'
import HeaderAdmin from './HeaderAdmin'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostEdit = () => {
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
  const { id } = useParams()
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    category_id: 0,
    status: 1,
    is_hot: 0,
    published_date: '',
    image: ''
  });
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        seteditBlog(data);
      })
  }, [id])
  const [editBlog, seteditBlog] = useState({ ...blog });
  const suaSP = () => {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(editBlog),
    })
      .then(res => res.json())
      .then(data => window.location.href = '/ad/post-list/')

  }
  const handleChange = (key, value) => {
    seteditBlog({ ...editBlog, [key]: value });
  };
  const [cate, setCate] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categories_blog')
      .then(res => res.json()).then(data => setCate(data))

  }, [])

  return (
    <Fragment>
      <HeaderAdmin />
      <div id="wp-content">
        <div id="content" className="container-fluid">
          <div className="card">
            <div className="card-header font-weight-bold">
              Sửa bài viết
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Tiêu đề bài viết</label>
                  <input className="form-control" type="text" name="name" id="name" value={editBlog.title} onChange={e => handleChange('title', e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Nội dung bài viết</label>
                  <textarea name className="form-control" id="content" cols={30} rows={5} defaultValue={""} value={editBlog.content} onChange={e => handleChange('content', e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor>Danh mục</label>
                  <select className="form-control" value={editBlog.category_id} onChange={e => handleChange('category_id', e.target.value)}>
                    {cate.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="content">Ngày đăng bài viết</label>
                  <input type='date' value={editBlog.published_date} onChange={e => handleChange('published_date', e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Hình ảnh bài viết</label>
                <input type='text' className="form-control" placeholder='Hình ảnh sản phẩm' value={editBlog.image} onChange={e => handleChange('image', e.target.value)}/>
                </div>
                {/* <div className="form-group">
            <label htmlFor>Trạng thái</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Chờ duyệt
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Công khai
              </label>
            </div>
          </div> */}
                <button type="button" onClick={() => suaSP()} className="btn btn-primary">Sửa</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default PostEdit