import React, { Component } from 'react'
import '../components/factsContainer.scss'

export default class factsContainer extends Component {
    
    render() {
 const names = ['Web Developer', 'Graphic Designer','Digital Photographer', 'Dog Mom','Education Advocate'];
const listItems = names.map((name) =>
  <li>{name}</li>
);
        return (
            <div>
                <ul className = 'title'>{listItems}</ul>
            </div>
        )
    }
}
