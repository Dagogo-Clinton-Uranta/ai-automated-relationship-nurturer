import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import Nav from '../nav/Nav'
import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
/*import laptop from 'src/assets/images/laptop.svg'

import LoanSlider from './LoanSlider'*/



const DummyHeader = () => {

   const [input,setInput] = useState(1000)
   //const navigate= useNavigate()
   const history = useHistory()
  // const dispatch = useDispatch()

   const handleChange = (e) => {
    setInput(e.target.value);
   // console.log("this is coming from header,we are in header")
  };

  return (
    
   
    <header className="header-pm-contact-us" style={{backgroundColor:"#21C9CF"}}>
    <Nav/> 
    
    </header>
    
  )
}

export default DummyHeader