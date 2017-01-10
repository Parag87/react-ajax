import React from 'react';
import axios from 'axios';

export default class Movies extends React.Component{
  constructor(props){
      super(props);
      this.state = {};
      this.search = this.search.bind(this);
  }

  search(){
    const num = +this.search.value;
  }

  render(){
    return(
        <div>
        <h1>Movies</h1>
          <div className = "panel panel-default">
            <div className = "panel-body">
              <label>Search</label>
              <input ref={n => this.query =n} type="number" />
              <button onClick={this.search} className="btn btn-primary btn-info">Search</button>
            </div>
          </div>
        </div>
    );
  }
}
