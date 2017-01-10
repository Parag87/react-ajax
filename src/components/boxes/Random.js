import React from 'react';
import axios from 'axios';

export default class Random extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    const num = +this.number.value;
    axios.get(`https://qrng.anu.edu.au/API/jsonI.php?length=${num}&type=uint16`)
      .then(response => {
        const data = response.data.data;
        this.setState({data});
      })
      .catch(error => {
        console.log(error);
    });
}
  render(){
    return (
      <div>
        <h1>Random</h1>
        <input type="number" ref={node => this.number = node} />
        <button onClick ={this.fetch} className="btn btn-info">Fetch</button>
        <ul>
            {
                      this.state.data.map((_,i) => {
                       return  <li key = {i}>{_}</li>;
              })
            }
        </ul>
      </div>
    );
  }
}
