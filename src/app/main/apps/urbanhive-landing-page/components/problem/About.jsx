import React from 'react'
import './about.css'
import mobileAndWeb from 'src/images/3(1).png'
import everyTouchpointIsPersonal from 'src/images/EveryTouchpointIsPersonal.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
//import { useNavigate } from 'react-router-dom'

const Problem = () => {


//const navigate= useNavigate()


  return (

    <>


    <section id='about' >

    <p style={{fontWeight:"700",fontSize:"3.5rem",paddingBottom:"1rem",paddingLeft:"0.8rem",paddingRight:"0.8rem",borderBottom:"1px solid #40255F",width:"max-content",margin:"0 auto",marginBottom:"2rem",marginTop:"3rem"}}> The Problem{/*<span className="text-accent">  get the Job! </span>*/}</p>
    <div className="container-hp about__container" style ={{marginTop:"2rem",}}>
       


    {<div className='aboutCTA1'>
    
 
    <img  className='CTAboximg1' src={everyTouchpointIsPersonal} alt="search image"/>
    
       
        
        </div>}
       

      <div className="aboutExplainer">
      <h1 style={{fontWeight:"700",fontSize:"2.8rem",marginBottom:"15px"}}>Opportunities rarely die instantly.  They go cold over time.{/*<span className="text-accent">  get the Job! </span>*/}</h1>

         <p style={{fontSize:"1.8rem",marginBottom:"15px"}}>
         Teams spend enormous effort generating meetings and building pipeline — but many valuable relationships fade simply because there isn’t consistent, meaningful follow-up after the first conversation.
        </p>

        <p style={{fontSize:"1.8rem",marginBottom:"15px"}}>
        Reps get busy. Priorities shift. Outreach becomes inconsistent.And over time, promising opportunities quietly disappear from the pipeline.Most companies rely on generic nurture campaigns, sporadic check-ins, manual reminders or no follow-up strategy at all
        </p>

        <p style={{fontSize:"1.8rem"}}>
        As a result, relationships that could have turned into future revenue are forgotten long before timing aligns.
        </p>

       {/*<div className = "about-btn-placement" >
        <button   onClick={()=>{navigate('/login')}} className="btn ">
           Get Started 
         </button>

         <p  onClick={()=>{navigate('/dashboard/home')}} className="btn-invisible" >See How It Works</p>
     </div>*/}


      </div>
     
     {/*<div className='aboutCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  



      

   
   
</div>

    </section>


</>
  )
}

export default Problem