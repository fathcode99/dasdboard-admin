import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import TableComp from "../../component/table/Table";


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