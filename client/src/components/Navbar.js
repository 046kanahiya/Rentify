import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css'
import axios from "axios"


function Navbar() {
    const [user,setUser]=useState(false)
    const navigate = useNavigate();
    function logoutUser() {
        localStorage.removeItem('token')
        navigate("/login")
    }
    const token=localStorage.getItem('token');
    const fetchUserData =async()=>{
        console.log("sdgdr");
        try {
            const response = await axios.get('http://localhost:5000/api/user/logged-user', {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization":`Bearer ${token}`
                },
            });
            console.log(response);
            setUser(response.data.user.usertype)
            console.log(user);
            
        } catch (error) {
            console.log(error);
            console.error('There was an error submitting the form!', error.response.data.message);
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
      fetchUserData()
    }, [])
    


    return (
        <>
            <div className='body'>
                {token ? <nav className='navbar'>
                    <ul className="nav-link">
                            {
                                user ?
                                <div>

                                <li className="link">
                            <Link to="/view" className={"link-styles"}>View All Post</Link>

                            </li>
                                <li className="link">
                            <Link to="/rent" className={"link-styles"}>Post</Link>

                            </li>
                            <li className="link" >
                            <Link to="/buyerview" className={"link-styles"}>Buyer</Link>
                        </li>
                                </div>
                            :
                            <div>

                            
                 
                        <li className="link" >
                            <Link to="/buyerview" className={"link-styles"}>Buyer</Link>
                        </li>

                            </div>
                        }

                        <li className="link">
                            <button className='logoutbtn' onClick={logoutUser}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>:
                <div>login first
                     <Link to={"/login"} className={"link-styles"}>Click Register</Link>
                </div>
                
                
                }
            </div>

        </>

    )
}

export default Navbar