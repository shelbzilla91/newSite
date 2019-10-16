import React from 'react'
import Link from 'gatsby-link';
import '../components/menu.module.scss';

import { motion } from "framer-motion"

const menu =() => (

        <div>
          
           <div className = 'menuStyle'> <motion.div
    whileHover={{ scale: 1.4 }}
    whileTap={{ scale: 1.4 }}
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

