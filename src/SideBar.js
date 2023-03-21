import React from "react";
import ChirpBox from "./ChirpBox";
import "./SideBar.css";

function SideBar(){
    return(
        <div className="SideBar">
            <div className="SideBar-header">
                <h2>Chirper</h2>
            </div>
            <ChirpBox/>
        </div>
    );
}

export default SideBar;