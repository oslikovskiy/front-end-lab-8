import React, { Component } from 'react';

class ColorItems extends Component {
    render() {
        return(
            <div className="color-item" style={{ background: this.props.color, width: '200px' }} ><button className="add"><span>&#43;</span> Add</button></div>
        )
    };
};

export default ColorItems;