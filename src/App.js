import "./App.css";
import React, { useState } from "react";
import InfoBox from "./Components/InfoBox";
import Popup from 'reactjs-popup';
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/css/bootstrap.css"


const App = ({ }) => {
  let decisions = [
    {
      id: 1,
      question: "Icecream stand for sale. Owner wants to sell cheap",
      amount: 1000,
      pay: 50
    },
    {
      id: 2,
      question: "Do you want to buy Bycicle shop",
      amount: 1430,
      pay: 80

    },
    {
      id: 3,
      question: "Do you want to buy Juice shop",
      amount: 1500,
      pay: 50

    },
    {
      id: 4,
      question: "Mechanic Shop goes for sale",
      amount: 1100,
      pay: 59

    },
    {
      id: 5,
      question: "Grocery store for sale",
      amount: 4000,
      pay: 485

    },
    {
      id: 6,
      question: "Plumberware shop is on sale",
      amount: 6790,
      pay: 510

    },
  ];
  let [decisionCount,setdecisionCount]=useState(0);

  const [currentDecision, setCurrentDecision] = useState();
  
  const [balance, setBalance] = useState(1000);
  const [date, setdate] = useState(0);
  const [payCheck, setPaycheck] = useState(1000);

  const getDecision = () => {
    setdecisionCount(decisionCount=decisionCount+1);
    const max = decisions.length;
    const decision = Math.floor(Math.random() * (max - 0)) + 0;
    
    setCurrentDecision(decisions[decision]);
  };



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
      className="cont"

    >


      <InfoBox
        currentDecision={currentDecision}
        balance={balance}
        setBalance={setBalance}
        date={date}
        setdate={setdate}
        payCheck={payCheck}
        setPaycheck={setPaycheck}
        decisionCount={decisionCount}
        setdecisionCount={setdecisionCount}
      />
      <div class="buttons">

        <Popup trigger={<button class="btn_danger"
          name="submit"
          className="button1"
          type="submit"
          value="Ledger"
          onclick="myFunction()"
        >

          <span>Ledger</span>
        </button>}
          position="left center"
          
        >
          <span style={{ color: "white"}}>Coming soon</span>



        </Popup>



        <div class="space"></div>
        <button
          name="submit"
          class="button"
          type="submit"
          value="Next"

          onClick={() => {          

            getDecision();
            
            if (decisionCount % 4 === 0) {
              setBalance(balance + payCheck)
            }
            date = date + 1
            setdate(date);
          }}
        >
          Next Decision
        </button>

        <div class="space"></div>

        <Popup trigger={<button
          name="submit"
          class="button1"
          type="submit"
          value="Stats"
          onclick="myFunction3()"
        >
          <span>Stats</span>
        </button>}
          position="right center"
        >
          <span style={{ color: "white", paddingLeft:"10px" }}>Coming soon</span>


        </Popup>
        <p id="saved"></p>


      </div>
    </div>
  );
};

export default App;
