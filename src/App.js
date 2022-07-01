import "./App.css";
import React, { useState } from "react";
import InfoBox from "./InfoBox";

//test command for commit

const App = ({}) => {
  let decisions = [
    {
      id: 1,
      question: "Do you want to buy Icecream Stand? Cost: 1000$ Paycheck: 50$ ",
      amount: 1000,
      pay:50
    },
    {
      id: 2,
      question: "Do you want to buy Bycicle shop",
      amount: 200,
      pay:50

    },
    {
      id: 3,
      question: "Do you want to buy Juice shop",
      amount: 300,
      pay:50

    },
    {
      id: 4,
      question: "Do you want to buy Mechanic Shop",
      amount: 400,
      pay:50

    },
  ];

  const [currentDecision, setCurrentDecision] = useState();

  const [balance, setBalance] = useState(1000);
  const [date, setdate] = useState(0);
  const [payCheck, setPaycheck] = useState(1000);
  
  const getDecision = () => {
    const max = decisions.length;
    const decision = Math.floor(Math.random() * (max - 0)) + 0;

    setCurrentDecision(decisions[decision]);
  };


  let decisionCount = 0;
  

  // // useEffect(() => {
  // //   let isUnmounted = false;

  // //   setTimeout(() => {
  // //     if (!isUnmounted) {
  // //       let newPaycheck = payCheck + 50;
  // //       setPayCheck(newPaycheck);
  // //     }
  // //   }, 5000);

  // //   return () => {
  // //     isUnmounted = true;
  // //   };
  // // }, [payCheck]);


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
        date={date}
        setdate={setdate}
        payCheck={payCheck}
        setPaycheck={setPaycheck}
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
          
          onClick= {()=>{getDecision(); 
            decisionCount = decisionCount +1;
            if(decisionCount%4===0){
              balance = balance +payCheck
            }
          }}
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
