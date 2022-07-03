import React from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";


function sideinfo(props){
    return( <div
    style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    color: "white"
    }}
>
    <span>
    <p style={{ marginTop: 0, paddingtop: 0 }}>Pay per month</p>
    </span>

    <span>
    <p style={{ marginTop: 0, paddingtop: 0 }}>Date</p>
    </span>

    <span>
    <p style={{ marginTop: 0, paddingtop: 0 }}>Balance</p>
    </span>
    </div>);
}
export default sideinfo;