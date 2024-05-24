// src/components/Seller/RentPost.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../App.css';

function RentPost() {
    const [formData, setFormData] = useState({
        place: '',
        area: '',
        no_of_bed: '',
        no_of_bathroom: '',
        no_of_hospitals: '',
        no_of_colleges: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const token = localStorage.getItem('token');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/api/seller/add-tolet`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
            });
            alert('Submit done!');
            navigate('/view');
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='rent-post'>
                <form onSubmit={handleSubmit} className='form'>
                    <h1>Rent Post</h1>
                    <div className="form-group">
                        <label htmlFor="place" className="form-label">Place</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            id="place"
                            name="place"
                            value={formData.place}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="area" className="form-label">Area</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            id="area"
                            name="area"
                            value={formData.area}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="no_of_bed" className="form-label">No of Beds</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            id="no_of_bed"
                            name="no_of_bed"
                            value={formData.no_of_bed}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            className="form-input"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="no_of_bathroom" className="form-label">No of Bathroom</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            id="no_of_bathroom"
                            name="no_of_bathroom"
                            value={formData.no_of_bathroom}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="no_of_hospitals" className="form-label">No of Hospitals</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            id="no_of_hospitals"
                            name="no_of_hospitals"
                            value={formData.no_of_hospitals}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="no_of_colleges" className="form-label">No of Colleges</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            className="form-input"
                            id="no_of_colleges"
                            name="no_of_colleges"
                            value={formData.no_of_colleges}
                            required
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-secondary">Post</button>
                </form>
            </div>
        </div>
    );
}

export default RentPost;
