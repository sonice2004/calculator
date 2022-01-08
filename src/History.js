import {useState} from 'react';
const History = () => {

  const [calcHistory, setCalcHistory] = useState([]);
 
  /*setCalcHistory([
        {
            "exp" : "1+2+4",
            "res" : "6"

        }
     ]
  );*/

 
    return (  

        <label>1+2=3</label>
       // calcHistory.map((item, index) =>(
            //<label>{item.exp}={item.res}</label>
         //   )
       // )
       );
  
};

export default History;
