// Code Keypad Component Here

import React, { Component } from 'react';

class Keypad extends Component {
    
    state = { 

     }

    keyHandler = () => (
        console.log('Entering password...')
    )

    render() { 
        return (  
            <input type="password" onKeyUp={this.keyHandler} />
        );
    }
}
 
export default Keypad;