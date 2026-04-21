import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
  
    render() {
        return (
            <div className="card">    
                <p className='module-label'>Module 2: Counter + state + button events</p>
                <div className="counter">
                    <p>{this.state.count}</p>
                    <button onClick={this.incrementCount}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;