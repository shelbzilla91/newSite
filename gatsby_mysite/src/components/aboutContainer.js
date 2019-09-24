import React, { Component } from 'react'
import aboutStyles from '../components/aboutContainer.module.scss'
import FactsContainer from './factsContainer'


export default class aboutContainer extends Component {
  
  render() {
    return (
      <div >
      <div className={aboutStyles.aboutContainer}>
        
        <div className = {aboutStyles.profile}>
      profile
        </div>
   
        <div className ={aboutStyles.facts}>  <div className= {aboutStyles.name} size='huge'>This is big</div></div>
        <div className= {aboutStyles.titles}>
          
         
        </div>
       
      </div>
      <FactsContainer/>
      </div>
      
    )
  }
}

