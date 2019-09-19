import React, { Component } from 'react'
import '../components/aboutContainer.scss'
import { Message } from 'semantic-ui-react'
import FactsContainer from './factsContainer'

export default class aboutContainer extends Component {
  
  render() {
    return (
      <div>
      <div className='aboutContainer'>
        <div className = 'profile'>

        </div>
   
        <div>  <Message className= 'name' size='big'>This is big</Message></div>
        <div>njkbskjbvks</div>
       
      </div>
      <FactsContainer/>
      </div>
      
    )
  }
}

