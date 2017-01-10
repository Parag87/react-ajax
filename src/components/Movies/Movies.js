import React from 'react';
import axios from 'axios';

export default class Movies extends React.Component{
  constructor(props){
      super(props);
      this.state = {results: []};
      this.search = this.search.bind(this);
      this.clear = this.clear.bind(this);
  }

  search(){
    const query = this.query.value;
    const url =`http://www.omdbapi.com/?s=${query}&page=1`;
    axios.get(url)
      .then(response => {
        const results = response.data.Search;
        this.setState({results});
      })
      .catch(error => {
        console.log(error);
    });
  }
  clear(){
    this.query.value = "";
    this.setState({results: []});
  }

  render(){
    return(
        <div>
        <h1>Movies</h1>
          <div className = "panel panel-default">
            <div className = "panel-body">
              <label>Search</label>
              <input ref={n => this.query =n} type="text" />
              <button onClick={this.search} className="btn btn-primary btn-sm">Search</button>
              <button onClick={this.clear} className="btn btn-danger btn-sm">Clear</button>

            </div>
          </div>
          <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Poster</th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.results.map((r,i) => {
                return(
                  <tr key={i}>
                    <td>{r.Title}</td>
                    <td>{r.Year}</td>
                    <td><img src={r.Poster} /></td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
          </div>
        </div>
    );
  }
}
