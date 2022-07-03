import React from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";


function InfoBox({flag, setflag, decisionCount, setdecisionCount, currentDecision, balance, setBalance, date, setdate, payCheck, setPaycheck }) {
  if (!currentDecision) {
    return (
      <div
        class="l-bg-light"
        style={{
          height: 400,
          width: 500,
          backgroundColor: "cadetblue",

          borderRadius: 7,
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div button class="btn btn-danger l-bg-red " style={{ 
       width:"60%", justifyContent: "center", verticalAlign:"middle"

      }}>
        <h5>Click Next Decision to start</h5>
      </div>
      </div>
    );
  }



  return (

    <div
      class="l-bg-light"
      style={{
        height: 400,
        width: 500,
        backgroundColor: "LavenderBlush",
        borderRadius: 5,
        padding: 10,
      }}
    >
      
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems:"center",
          verticalAlign:"middle"
        }}
      >
        <span style={{display:"inline-block"}}>
          <p style={{ marginTop: 0, paddingtop: 0, color:"black" }}>Monthly Profit </p>
          <p class="strong" style={{ marginTop: 0, paddingtop: 0 }}>{payCheck}₹</p>
        </span>

        <span style={{display:"inline-block"}}>
          <p style={{ marginTop: 0, paddingtop: 0, color:"black" }}>Date</p>
          <p class="strong" style={{ marginTop: 0, paddingtop: 0 }}>Week: {decisionCount}</p>
        </span>

        <span style={{display:"inline-block"}}>
          <p style={{ marginTop: 0, paddingtop: 0, color:"black" }}>Balance</p>
          <p class="strong" style={{ marginTop: 0, paddingtop: 0 }}>{balance}₹</p>
        </span>
      </div>

      <div>
        {/* <h1 style={{ textAlign: "center" }}>{currentDecision.question}</h1> */}

        <div class="card l-bg-green-dark">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large"></div>
            <div class="mb-4">
              <h5 class="card-title mb-0">{currentDecision.question}</h5>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-8">
                <h2 class="d-flex align-items-center mb-0">
                  Cost: {currentDecision.amount}₹
                </h2>
              </div>
              <div class="col-4 text-right">
                <span style={{}}>Profit per month: {currentDecision.pay}₹</span>
              </div>
            </div>


          </div>

        </div>
      </div>


      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          class="btn btn-primary btn-rounded btn-lg"
          style={{ justifyContent: "center", borderRadius: 40 }}
          onClick={() => {
            if (flag===0 && balance-currentDecision.amount>0){
              let newBalance = balance - currentDecision.amount;
              let newpayCheck = payCheck + currentDecision.pay;
              
              setBalance(newBalance);
              setPaycheck(newpayCheck);
              setflag(1);
            }
            else if( balance-currentDecision.amount<0){
              alert("You cant afford it!");
            }
            else{ 
              alert("Bought Already!");
            }

          }}
        >
          Buy
        </button>
        <button
          class="btn btn-dark btn-rounded btn-lg"
          style={{ marginLeft: 20, borderRadius: 40 }}>Pass</button>
      </div>

    </div>
  );
}

export default InfoBox;
