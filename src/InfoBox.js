import React from "react";
import "./App.css";

const InfoBox = ({ currentDecision, balance, setBalance, payCheck }) => {
  if (!currentDecision) {
    return (
      <div
        style={{
          height: 400,
          width: 500,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1>Click Next Decision to start</h1>
      </div>
    );
  }
  return (
    <div
      style={{
        height: 400,
        width: 500,
        backgroundColor: "white",
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
          <p style={{marginTop: 0, paddingtop:0}}>Paycheck</p>
          <p class="strong" style={{marginTop: 0, paddingtop:0}}>{payCheck}$</p>
        </span>
        <span>
          <p style={{marginTop: 0, paddingtop:0}}>Balance</p> 
          <p class="strong" style={{marginTop: 0, paddingtop:0}}>{balance}$</p>
        </span>
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>{currentDecision.question}</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ height: 30, width: 100 }}
          onClick={() => {
            let newBalance = balance - currentDecision.amount;
            setBalance(newBalance);
          }}
        >
          Yes
        </button>
        <button style={{ height: 30, width: 100, marginLeft: 10 }}>No</button>
      </div>
    </div>
  );
};

export default InfoBox;
