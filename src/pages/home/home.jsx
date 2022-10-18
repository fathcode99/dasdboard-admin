import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";


const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer flex-[6_6_0%]">
                <Navbar />
                Container    
            </div>
            
        </div>
    )
}

export default Home