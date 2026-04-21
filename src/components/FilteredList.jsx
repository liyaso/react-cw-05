import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
            type: "All"
        };
    }

    onSearch = (eventKey) => {
        this.setState({ search: eventKey.target.value });
    }

    onFilter = (eventKey) => {
        this.setState({ type: eventKey});
    }

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .search(this.state.search.toLowerCase()) !== -1;
        const matchesType = this.state.type === "All"
            || item.type === this.state.type;
        return matchesSearch && matchesType;
    }

    render(){
        const filtered = this.props.items.filter(this.filterItem);
        return (
            <div className="card">
                <p className='module-label'>Module 4: FilteredList + search + dropdown</p>
                <div className="filtered-list">
                    <div className='filtered-list-controls'>
                        <input 
                        type="text" 
                        placeholder='Search...'
                        onChange={this.onSearch}
                        />
                        <DropdownButton title={`Type: ${this.state.type}`} onSelect={this.onFilter}>
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                            <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <p className='result-count'>{filtered.length} item{filtered.length !== 1 ? 's' : ''} shown</p>
                    <List items={filtered} />
                </div>
            </div>
        );
    }
}

export default FilteredList;