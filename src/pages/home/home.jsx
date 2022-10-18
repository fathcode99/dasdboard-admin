import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="home flex">
            <Sidebar />
            <div className="homeContainer bg-primary flex-[6_6_0%]">Container</div>
        </div>
    )
}

export default Home