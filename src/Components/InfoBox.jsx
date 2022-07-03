import React from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/css/bootstrap.css";

function InfoBox({ currentDecision, balance, setBalance, date, setdate, payCheck, setPaycheck, decisionCount }) {
  if (!currentDecision) {
    return (
      <div
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
        <h1 button class="btn btn-danger" style={{ justifyContent: "center",paddingtop:5}}>Click Next Decision to start</h1>
      </div>
    );
  }



  return (
    <div
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
        }}
      >
        <span>
          <p style={{ marginTop: 0, paddingtop: 0 }}>Pay per month</p>
          <p class="strong" style={{ marginTop: 0, paddingtop: 0 }}>{payCheck}₹</p>
        </span>

        <span>
          <p style={{ marginTop: 0, paddingtop: 0 }}>Date</p>
          <p class="strong" style={{ marginTop: 0, paddingtop: 0 }}>Week: {date}</p>
        </span>

        <span>
          <p style={{ marginTop: 0, paddingtop: 0 }}>Balance</p>
          <p class="strong" style={{ marginTop: 0, paddingtop: 0 }}>{balance}₹</p>
        </span>
      </div>

      <div>
        {/* <h1 style={{ textAlign: "center" }}>{currentDecision.question}</h1> */}

        <div class="card l-bg-green-dark">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
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
                <span style={{}}>Pay per month: {currentDecision.pay}₹<i class="fa fa-arrow-up"></i></span>
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

            let newBalance = balance - currentDecision.amount;
            let newpayCheck = payCheck + currentDecision.pay;

            setBalance(newBalance);
            setPaycheck(newpayCheck);

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
