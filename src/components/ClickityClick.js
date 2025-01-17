import React from 'react'

export default class ClickityClick extends React.Component {
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false
        }
    }//end constructor

    handleClick = () => {
        this.setState( 
            {
                hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null :'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }//end render

}//end class
