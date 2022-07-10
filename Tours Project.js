import React, {useEffect, useState} from 'react'

const api='https://course-api.com/react-tours-project'



const TourPackage=()=>{

const [offer, setOffer]=useState([]);
const [isLoading, setIsLoading]=useState(true);
const [isError, setIsError]=useState(true);
const [showLess, setShowLess]=useState(true);


useEffect(()=>{
 fetch(api)
 .then((resp)=>{ 

    if(resp.status >=200 && resp.status <=299){
    setIsError(false)
    return(
        resp.json()
       
    )}
    else{
    setIsLoading(false)
    return resp.json()
    }
    }
      )
 .then(
     (item)=>{setOffer(item);
             setIsLoading(false);
             
            }
      )
 .catch(err=> {
    console.log(err)
    setIsLoading(false)}
       )
},
[])


const TourPack=({id, name, info, image, price})=>{

const [showLess, setShowLess]=useState(false)
const [btnToggle, setBtnToggle]=useState(false)
const [btnText, setBtnText]=useState('Read more')

const showLessOrMore=()=>{
                        setShowLess(!showLess);
                        setBtnToggle(!btnToggle);
                        btnToggle?setBtnText('Read more'):setBtnText('Show less')
                    }    

const NotInterested=(item)=>{

setOffer(offer.filter((offerItem)=>offerItem.id!==item.id))

}
return(
    < div key={id} style={{margin:"auto", marginTop:"10px", background:"white", height:"470px", width:"500px"}}>
    <img src={image} alt="" style={{display:"block", width:"100%", height:"50%"}}/>
    <h2>{name}</h2>
    
    {showLess?<span>{info}</span>: <span>{info.substring(0,250)}...</span>} 
    <button id='btn' onClick={()=>showLessOrMore()} style={{borderStyle:"none", marginBottom:"5px", color:"blue"}}>
    {btnText}</button>
    <h5 style={{color:"var(--clr-primary-5)"}}>${price}</h5>
    <button  onClick={()=>NotInterested({id, name, info, image, price})}>Not Interested</button>
    
  
    </div>
)

}


if(isLoading){
return(
<h2>Loading...</h2>
)
}
if(isError){
return(
<h2>Network error...</h2>
)
}
if(offer.length==0){
   return (
    <h2>Oops..No offers remaining</h2>
   )
}
return(
    
    <>
   {offer.map(item=><TourPack key={item.id} {...item}/>)
   }
   </>
)
}
//id, name, info, image, price
export default TourPackage