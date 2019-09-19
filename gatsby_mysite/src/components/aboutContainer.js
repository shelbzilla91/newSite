import React, { Component } from 'react'
import '../components/aboutContainer.scss'
import { Message } from 'semantic-ui-react'
import FactsContainer from './factsContainer'
import Slider from './slider'

export default class aboutContainer extends Component {
  
  render() {
    return (
      <div >
      <div className='aboutContainer'>
        <div className = 'profile'>

        </div>
   
        <div className =" facts">  <Message className= 'name' size='large'>This is big</Message></div>
        <div className= 'titles'>
          
          <Slider/>
        </div>
       
      </div>
      <FactsContainer/>
      </div>
      
    )
  }
}

