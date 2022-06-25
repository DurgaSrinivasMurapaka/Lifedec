import "./App.css";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
//test command for commit

const App = () => {
  let decisions = [
    {
      id: 1,
      question: "Do you want to buy Lemonade Stand",
      amount: 100,
    },
    {
      id: 2,
      question: "Do you want to buy Lemonade Stand 2",
      amount: 200,
    },
    {
      id: 3,
      question: "Do you want to buy Lemonade Stand 3",
      amount: 300,
    },
    {
      id: 4,
      question: "Do you want to buy Lemonade Stand 4",
      amount: 400,
    },
  ];

  const [currentDecision, setCurrentDecision] = useState();

  const [balance, setBalance] = useState(5000);

  const getDecision = () => {
    const max = decisions.length;
    const decision = Math.floor(Math.random() * (max - 0)) + 0;

    setCurrentDecision(decisions[decision]);
  };

  const [payCheck, setPayCheck] = useState(0);
  // useEffect(() => {
  //   let isUnmounted = false;

  //   setTimeout(() => {
  //     if (!isUnmounted) {
  //       let newPaycheck = payCheck + 50;
  //       setPayCheck(newPaycheck);
  //     }
  //   }, 5000);

  //   return () => {
  //     isUnmounted = true;
  //   };
  // }, [payCheck]);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingTop: 30,
      }}
    >
      <InfoBox
        currentDecision={currentDecision}
        balance={balance}
        setBalance={setBalance}
        payCheck={payCheck}
      />
      <div class="buttons">
        <button
          name="submit"
          class="button1"
          type="submit"
          value="Ledger"
          onclick="myFunction()"
        >
          <span>Ledger</span>
        </button>
        <div class="space"></div>
        <button
          name="submit"
          class="button"
          type="submit"
          value="Next"
          onClick={getDecision}
        >
          Next Decision
        </button>
        <div class="space"></div>
        <button
          name="submit"
          class="button1"
          type="submit"
          value="Stats"
          onclick="myFunction3()"
        >
          <span>Stats</span>
        </button>
        <p id="saved"></p>
      </div>
    </div>
  );
};

export default App;
