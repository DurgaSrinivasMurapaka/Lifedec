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
  let [decisionCount, setdecisionCount] = useState(0);

  const [currentDecision, setCurrentDecision] = useState();
  const [flag, setflag] = useState();
  const [balance, setBalance] = useState(1000);
  const [payCheck, setPaycheck] = useState(100);

  const getDecision = () => {
    setdecisionCount(decisionCount = decisionCount + 1);
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
        payCheck={payCheck}
        setPaycheck={setPaycheck}
        decisionCount={decisionCount}
        setdecisionCount={setdecisionCount}
        flag={flag}
        setflag={setflag}
      />
      <div class="buttons">

        <Popup trigger={<button class="btn_danger"
          name="submit"
          className="button1"
          type="submit"
          value="Ledger"
          onclick="myFunction()"
        >

          <span><h5>Stats</h5></span>
        </button>}
          position="left center"

        >
          <span style={{ color: "white" }}>Coming soon</span>



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
            setflag(0);
          }}
        >
          Next Decision
        </button>

        <div class="space"></div>


        <Popup trigger={<button class="btn_danger"
          name="submit"
          className="button1"
          type="submit"
          value="Ledger"
          onclick="myFunction()"
        >
          
          <span><h5>Info</h5></span>
        </button>} modal>
        {close => (
          <div class="card bg-light mb-3" >
            <div class="card-header">Life Decisions</div>
            <div class="card-body">
              <h5 class="card-title">Information:</h5>
              <p class="card-text">
                1. Every Decision passed equalled for one week.<br/>
                2. Every four weeks equalled for one month, <br/>
                3. For every month, You will receive a payment from your assets.<br/>
                4. Gain up assets and become financially stable.<br/>

                <h5 style={{textAlign:"center",paddingTop:"12px", paddingBottom:"10px"}}>Good Luck!</h5>
                <button onClick={close} class="btn btn-primary" 
                style={{
                display:"flex",
                alignItems:"center",
                justifycontent:"center",
                textAlign:"center"
                
              }}>Close</button>

                
              </p>
            </div>
          </div>
            )}
        </Popup>

        {/* <Popup trigger={<button
          
          class="button1"
           >
          Info
        </button>}
          modal 
          
          >


          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Information </div>
              <div className="content">
                {' '}
                Information about Life Decisions
              </div>
              <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
            </div>
          )}


        </Popup> */}


      </div>
    </div>
  );
};

export default App;
