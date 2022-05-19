import './App.css';
import React from 'react'
//test command for commit

    
    
  const App = () => {
    return (
      
      <div className="container">



        <div class="buttons">
		      <button name="submit" class="button1" type="submit" value="Ledger" onclick="myFunction()"><span>Ledger</span></button>
          <div class="space"></div>
          <button name="submit" class="button" type="submit" value="Next" onclick="myFunction2()">Next Decision</button>
          <div class="space"></div>
		      <button name="submit" class="button1" type="submit" value="Stats" onclick="myFunction3()"><span>Stats</span></button>
		    <p id="saved"></p>
        </div>



      </div>
    )
  }
    
    
      
  


export default App;
