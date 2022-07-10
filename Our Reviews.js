import React from 'react'
import {useState, useEffect} from 'react'

const ReviewProject=()=>{
    const[count, setCount]=useState(0)
    const Data=[
        {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg", name:"Susan Smith", position:"Web Developer", quote:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",},
        {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg", name:"Anna Johnson", position:"Web Designer", quote:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",},
        {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg", name:"Peter Jones", position:"Intern", quote:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",},
        {img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg", name:"Billy Anderson", position:"The Boss", quote:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",}]
     
    const index=Data.length-1   

     const Review=({img, name, position, quote})=>{

        const handleRandom=()=>{
            const newCount=Math.floor(Math.random()*index)
            //if statement to prevent repetition of the random number
         if(newCount==count){
            setCount(newCount-1)
         }
         else{
            setCount(newCount)
         }
        }
      
        return(<>
            <h3 style={{textDecorationLine:"underline", textDecorationColor:"blue", textUnderlineOffset:"5px", borderBottom:"5px"}}>Our Reviews</h3>
            <div style={{backgroundColor:"white", margin:"auto",height:"500px", width:"625px"}}>
                 <img src={img} alt="" style={{height:"200px", width:"200px", borderRadius:"50%", marginTop:"10px"}}/>
                 <h4>{name}</h4>
                 <p style={{color:"var(--clr-primary-5)"}}>{position.toUpperCase()}</p>
                 <p>{quote}</p>
                 <button className="btn" onClick={()=>count>0?setCount(count-1):setCount(index)}>Prev</button>
                 {/* In the line below, the ternary operator is used to ensure the index parsed to prevent parsing a value larger than the array length */}
                <button className="btn" onClick={()=>count<index?setCount(count +1):setCount(0)}>Next</button>
                <button className="btn"  style={{display:"block", margin:"auto", marginTop:"10px"}} onClick={handleRandom}>Random</button>
            </div>
                </>
            )
        }
     console.log(count)   
        
            return(
                <Review {...Data[count]}/>
            )
        }

export default ReviewProject;
     