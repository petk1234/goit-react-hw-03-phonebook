import React, { Component } from "react";

export default class Filter extends Component{
    state = {
        filter: '',
    }

    changeFinder = e =>{
        let filter_ = e.target.value; 
        this.setState(prevState =>{
            this.props.onChangeFinder(filter_);
            return {filter: filter_}
        });
    }

    render(){
      let {filter} = this.state;
      return <>
        <p>find contacts by name</p>
              <input
                 type='text'
                 name="finder"
                 value={filter}
                 onChange={this.changeFinder}
                 required
              />
        {/* {this.props.onChangeFinder()}       */}
      </>
    }
}