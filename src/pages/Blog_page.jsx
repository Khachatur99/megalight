import "./pages.css"
import { useState, } from "react";

// import { useEffect } from "react";



function Blog(){

    
     let [amount, setAmount]=useState(0)
    let [val,setVal]=useState(0)
  let [exchange, setExchange]=useState("USD")
//   useEffect(()=>{
//     if(exchange==="USD"){
//         setVal(amount *400)
//     }else if(exchange==="EUR"){
//         setVal(amount * 420)
//     }else if(exchange==="RUB"){
//         setVal(amount * 5,5 )
//     }

//   },[exchange])

//  Եթե փոխում ենք ու օգտագործում useEffect որեմն պետքա բոլոր useState-երը փոխենք useReducer - ով
    return (
      <div className="Exchange__">
        
      <h2>EXCHANGE</h2>
      <div className="Amaount__">
	<label >Amount:</label>
	<input onChange={(evt)=>{
    if(exchange==="USD"){
      setVal(evt.target.value *400)
    }else if(exchange==="EUR"){
      setVal(evt.target.value * 420)
    }else if(exchange==="RUB"){
      setVal(evt.target.value * 5,5 )
    }
    setAmount(evt.target.value)
   
     
    

    }} type="number" id="amount"/>
	<br/>
    </div>

    <div className="Select_currency">
	<label >Select currency: {exchange}</label>
	<select value={exchange} onChange={(evt)=>{
        setExchange(evt.target.value)
        if(evt.target.value==="USD"){
            setVal(amount *400)
        }else if(evt.target.value==="EUR"){
            setVal(amount * 420)
        }else if(evt.target.value==="RUB"){
            setVal(amount * 5,5 )
        }
  }}
   
   id="currency-select">
		<option value="USD">US Dollar (USD)</option>
		<option value="EUR">Euro (EUR)</option>
		<option value="RUB">Russian Ruble (RUB)</option>
	</select>
    </div>
	<br/>
    <div className="Result__">
	<label >Result: AMD</label>
	<input type="number" id="result" value={val} readOnly  />
    </div>
      </div>
    );
}


export default Blog