
import React from "react"
import '../styles/index.scss'
import '../components/aboutContainer.scss'
import FactsContainer from "./factsContainer";
import { motion } from "framer-motion"


  

const aboutContainer =() => 
            <div className = "aboutContainer">

        
                <div className ="profile">
             
                <motion.div className= "name"
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }} 
/>

                </div>  
                <FactsContainer/>
            </div>
       
        

export default aboutContainer;
