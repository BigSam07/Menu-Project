import React from "react";
import { useState, useEffect } from "react";

const Data=[
            {id:"1", question:"Do I have to allow the use of cookes? ", answer:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},
            {id:"2", question:"How do I change my My Page password?", answer:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."},
            {id:"3", question:"What is BankID?", answer:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."},
            {id:"4", question:"Whose birth number can I use?", answer:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrif"},
            {id:"5", question:"When do I recieve a password ordered by letter?", answer:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"}
            ]

const Accordion=()=>{

const [array, setArray]=useState(Data)


const div1={background:"white", 
            position:"absolute",
            right:"25%", 
            display:"inline",
            width:"55%",
        }




const Item=({id,question, answer})=>{

const [response, setResponse]=useState('')
const [showAns, setShowAns]=useState(true)
const [btnText, setBtnText]=useState('+')

const Budweiser=(ident)=>{
    setShowAns(!showAns)
   if(showAns){ 
    setResponse(answer)
    setBtnText('-')
}
else{
    setResponse('')
    setBtnText('+')
}
     }

return( 
    <section key={id} style={{margin:"auto", width:"500px",}} >
    <h5 style={{display:"block", background:"", position:"absolute",textAlign:"left", left:"0px", height:"15px", width:"100%", margin:"auto"}}>{question}</h5> 
    <button className="btn" style={{marginTop:"2px",marginLeft:"220px", borderRadius:"50%",}}onClick={()=>Budweiser(id)} >{btnText}</button>
    <p style={{display:"block", position:"relative", right:" 114px", background:"white", padding:"0px", marginTop:"3px", textAlign:"left", width:"485px" }}>{response}</p>
   
    </section>
        
    )
}

     

//Main Component's return statement
return(
<article>
    {document.body.style= 'background:purple'}

<div style={div1}>
<h2 style={{position:"absolute", right:"500px", }}>Question and answers</h2>
<div style={{position:"relative", left:"200px", marginLeft:"20px"}}>
    {array.map(
        (Data)=> <Item {...Data}/>
        )}
</div>
       </div>
</ article>
     )
}

export default Accordion