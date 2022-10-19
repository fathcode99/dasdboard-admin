import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import TableComp from "../component/Table";


const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer flex-[6_6_0%]">
                <Navbar />
                <TableComp />
            </div>
            
        </div>
    )
}

export default Home