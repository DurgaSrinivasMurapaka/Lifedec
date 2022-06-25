import React from "react";

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
        <h1>No Decision</h1>
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
          <p>Paycheck</p> <p>{payCheck}$</p>
        </span>
        <span>
          <p>Balance</p> <p>{balance}$</p>
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
