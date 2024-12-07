import React, { Fragment, useEffect, useState } from 'react'
import HeaderAdmin from './HeaderAdmin';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductCateEdit = () => {
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
    const { id } = useParams()
    const token = localStorage.getItem("token");
    const [cate, setCate] = useState({
        name: ''
    })
    const [editCate, seteditCate] = useState({ ...cate });
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/get_cate_detail/' + id)
            .then(res => res.json())
            .then(data => {
                setCate(data)
                seteditCate(data)
            })
    }, [id])
    const suaSP = () => {
        fetch(`http://127.0.0.1:8000/api/put_cate/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editCate),
        })
            .then(res => res.json())
        //   .then(data =>)

    }
    const handleChange = (key, value) => {
        seteditCate({ ...editCate, [key]: value });
    };
    return (
        <Fragment>
            <HeaderAdmin />
            <div id="wp-content">
                <div id="content" className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header font-weight-bold">
                                    Danh mục sản phẩm
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Tên danh mục</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={editCate.name} onChange={e => handleChange('name', e.target.value)}
                                            />
                                        </div>

                                        
                                        <button type="button" className="btn btn-primary" onClick={() => suaSP()}>
                                            Sửa
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductCateEdit