import React from 'react'
import Link from 'gatsby-link';



const menu =() => (

        <div style = {{
            background: '#75C558',
            paddingTop: '10px'
        }}>
            <ul className = "menuLinks">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/projects">Projects</Link></li>
                <li><Link to = "/blog">Blog</Link></li>
            </ul>
            
        </div>
    )

export default menu;