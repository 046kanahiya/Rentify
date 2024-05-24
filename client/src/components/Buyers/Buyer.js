import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios';

function Buyer() {
    const [data,setData]=useState([]);
    const [email,setEmail]=useState("d");
    const [hide,setHide]=useState(false);
    const token=localStorage.getItem('token');

    const SubmitUserDetails = async(sellermail)=>{
        // console.log("sdgdr");
        try {
            const response = await axios.post('http://localhost:5000/api/buyer/mail-to-seller',{buyeremail:email,selleremail:sellermail}, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization":`Bearer ${token}`
                },
            });
                alert("Notification has been sent to"+sellermail);
            // console.log("cfbnb",response.data.sellers);
            // setData(response.data.sellers)
            // setData(response.data);
            // console.log(data);
            // console.log(user);
            
        } catch (error) {
            console.log(error);
            console.error('There was an error submitting the form!', error.response.data.message);
            alert(error.response.data.message);
        }
    }
    
    const fetchUserData =async()=>{
        // console.log("sdgdr");
        try {
            console.log("dfhgd",email);
            const response = await axios.get('http://localhost:5000/api/buyer/getAll-tolet', {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization":`Bearer ${token}`
                },
            });
            console.log("cfbnb",response.data.sellers);
            setData(response.data.sellers)
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

            const res = await axios.get('http://localhost:5000/api/user/logged-user', {
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
    <div>
    
        <Navbar/>
        {data.map((item, index) => (
        <div key={index} className='post'>
            
            <li>"Place:" {item.place}</li>
            <li>"Area:" {item.area}</li>
            <li>"No. of Bathroom:" {item.no_of_bathroom}</li>
            <li>"No.of bed:" {item.no_of_bed}</li>
            <li>"No. of Hospitals:" {item.no_of_hospitals}</li><br/>
            <button className="intrested"onClick={()=>SubmitUserDetails(item.email)}>Are You Intrested</button>
            {hide && 
            <li>
            <li>{item.email}</li>
            {/* <li>{item.no_of_hospitals}</li> */}
            </li>
            }
            
            </div>
      ))}
    </div>
  )
}

export default Buyer