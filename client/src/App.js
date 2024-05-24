import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";

import Header from "./components/Header";
import Body from "./components/Body.js";
import ViewAllPost from "./components/Seller/ViewAllPost.js";
import RentPost from "./components/Seller/RentPost.js";
import Buyer from "./components/Buyers/Buyer.js";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path="/" element={<UserProfile />} ></Route> */}
        <Route path="/login" element={<Login />}  ></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/" element={<Body />} />
        <Route path="/view" element={<ViewAllPost />} />
        <Route path="/rent" element={<RentPost />} />
        <Route path="/buyerview" element={<Buyer />} />

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
