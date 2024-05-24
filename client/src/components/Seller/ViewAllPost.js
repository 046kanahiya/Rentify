import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios';


function ViewAllPost() {
    const [data,setData]=useState([]);
    const [email,setEmail]=useState("d");
    const token=localStorage.getItem('token');
    
    const fetchUserData =async()=>{
        // console.log("sdgdr");
        try {
            console.log("dfhgd",email);
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/seller/seller-tolets`, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization":`Bearer ${token}`
                },
            });
            console.log("cfbnb",response.data.data);
            setData(response.data.data)
            // setData(response.data);
            // console.log(data);
            // console.log(user);
            
        } catch (error) {
            console.log(error);
            console.error('There was an error submitting the form!', error.response.data.message);
            alert(error.response.data.message);
        }
    }
    const fetch =async()=>{

        try {

            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/api/user/logged-user`, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization":`Bearer ${token}`
                },
            })
            if(res.status==200){
                setEmail(res.data.user.email)
                fetchUserData()
            }
            // console.log(res);
            // console.log(email);
            // console.log(res.data.user.email);
            // console.log(user);
            
        } catch (error) {
            console.log(error);
            console.error('There was an error submitting the form!', error);
            // alert(error.response.data.message);
        }
    }
    useEffect(() => {
        fetch()
     
    }, [])
  return (
    <div >
        <Navbar/>
        <div className="viewpost">
        {data.map((item, index) => (
            <div key={index} className="post">
            
            <li>"Place:" {item.place}</li>
            <li>"Area:" {item.area}</li>
            <li>"No. of Bathroom:" {item.no_of_bathroom}</li>
            <li>"No.of bed:" {item.no_of_bed}</li>
            <li>"No. of Hospitals:" {item.no_of_hospitals}</li>
            
            </div>
      ))}
      </div>


    </div>
  )
}

export default ViewAllPost