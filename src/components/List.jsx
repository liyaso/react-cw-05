import React, { Component } from 'react';

class List extends Component{
    render(){
        if(this.props.items.length === 0){
            return <p className='produce-list-empty'>No items match your search.</p>
        }
        return(
            <ul className='produce-list'>
                {this.props.items.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        );
    }
}

export default List;