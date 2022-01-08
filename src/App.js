import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import History from "./History";
const App = () => {

  const [expression, setExpression] = useState([]);
  const [isLastItemOperator, setIsLastItemOperator] = useState(false);
  const [result, setResult] = useState(0);

  const buttons = [["7","8","9","c"],["4","5", "6","/"],[ "1","2","3","+"],["0","00",".","="]];


  var operators = ["+","-","x","/"];

  const buttonPressed = function (value) {
    let allowAppend = true;
    var isOperator = operators.includes(value);
    
    if(value==="c") {
      setResult(0)
      setExpression(0)
      allowAppend=false;
    }else if(value === "=") {
      allowAppend=false;
      var finalResult = evaluateExpression();
      setResult(finalResult);
      setExpression(finalResult);
    }
    else if(isOperator)
    {
       if(isLastItemOperator === true) {
         allowAppend = false;
      }
      setIsLastItemOperator(true);  
    }
    else {
      setIsLastItemOperator(false);
    } 

    if(allowAppend) {
      var currentExpression = expression + value;
      setExpression(currentExpression);
      if(!isOperator) {
        setResult(eval(currentExpression));
      }    
    }
    
  }

  const evaluateExpression = () => {
    console.log(expression.toString());
    return eval(expression.toString().replace("x","*"));
  }

  const buttonGroupRenderer = (buttonGroup) => {

    return (   
      buttonGroup.map((item, index) =>(
          <button type="button"className="btn btn-warning col-sm" onClick={()=>buttonPressed(item)}>{item}</button>
          )
      )
    )
  }

  const buttonGroups = () => {

    return (   
      buttons.map((buttonGroup, index) =>
            <div className = "buttonGroup_{index} row">
              {buttonGroupRenderer(buttonGroup)}
            </div>
      )
    )
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      
      <div className ="calculator border border-primary rounded" >
            <div className ="display border rounded">
              (<label className="result">{result}</label>)
              <label className = "expression"> {expression}</label>
              </div>
            <div className ="controls border rounded">
               {buttonGroups()}          
            </div>
          </div>
      <div className="history">
        <History/>
      </div>
    </div>
  );
}

export default App;
