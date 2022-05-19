import './App.css';
import React from 'react'
//test command for commit

    
    
  const App = () => {
    return (
      
      <div className="container">



        <div class="buttons">
		      <button name="submit" class="action_btn Ledger" type="submit" value="Ledger" onclick="myFunction()">Ledger</button>
          <div class="space"></div>
          <button name="submit" class="action_btn Next" type="submit" value="Next" onclick="myFunction2()">Next Decision</button>
          <div class="space"></div>
		      <button name="submit" class="action_btn Stats" type="submit" value="Stats" onclick="myFunction2()">Stats</button>
		    <p id="saved"></p>
        </div>



      </div>
    )
  }
    
    
      
  


export default App;
