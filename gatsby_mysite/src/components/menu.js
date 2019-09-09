import React from 'react'
import Link from 'gatsby-link';
import '../components/menu.scss';

import { motion } from "framer-motion"

const menu =() => (

        <div style = {{
            background: '#75C558',
            paddingTop: '10px',
            display:'flex',
               flexDirection:'row',
               justifyContent:'space-evenly',
               listStyle:'none',
         
            
        }}>
          
           <div className = 'menuStyle'> <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >             <ul>
      
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/projects">Projects</Link></li>
                <li><Link to = "/blog">Blog</Link></li>
                </ul>
                </motion.div>
                </div>
              </div>)
        
    

export default menu;