import React, { useState, useEffect } from "react";
import {LoremIpsum} from 'react-lorem-ipsum'


function MyForm() {

  
const [finalNum, setFinalNum]=useState(0)


 const handleSubmit=(e)=>{
  e.preventDefault()
  setFinalNum(document.getElementById("value").value)
 }
  
 return (<>
 <form onSubmit={handleSubmit}>
  <label htmlFor="value">Generator:</label>
  <input id="value" type="number" placeholder="0"></input> 
  <button className="btn" type="submit">Generate</button>
  </form> 
  <div>
  <LoremIpsum p={finalNum} />
 
  </div>

          </>
  )
}
export default MyForm;