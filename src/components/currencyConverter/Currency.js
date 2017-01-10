import React from 'react';
import './currency.css';
import jsonp from 'jsonp';


export default class Currency extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[],convertedValue:0};
    this.convert = this.convert.bind(this);
  }

  componentDidMount() {
    jsonp(`http://api.fixer.io/latest`,  (err, arr) => {
      if (err) {
        console.error(err.message);
      } else {
        const data = Object.keys(arr.rates)
        this.setState({data});
      }
      });
    }

  convert(){
      const num = + this.text.value;
      const from = this.from.value;
      const to = this.to.value;
       jsonp(`http://api.fixer.io/latest?base=${from}`,  (err, arr) => {
         if (err) {
           console.error(err.message);
        } else {
           const convertedValue = arr.rates[to] * num;
           console.log(convertedValue);
           this.setState({convertedValue});
         }
         });
  }

  render(){
    return (
      <div>
        <h1>Currency Converter</h1>
        <div className="row">
          <div className="col-xs-3">
            <div className="form-group">
              <select className="selectpicker form-control" ref={node => this.from = node}>
                <option>From</option>
                {
                  this.state.data.map((_,i) => {
                 return  <option key = {i}>{_}</option>;
                 })
               }
              </select>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="form-group">
              <select className="selectpicker form-control" ref={node => this.to = node}>
                <option>To</option>
                <option>From</option>
                {
                  this.state.data.map((_,i) => {
                 return  <option key = {i}>{_}</option>;
                 })
               }
              </select>
            </div>
          </div>

          <div className="col-xs-3">
            <div className="form-group">
              <input type="text" className="form-control" ref={node => this.text = node} placeholder = "Enter Amount" />
            </div>
          </div>
          <button onClick ={this.convert} className="btn btn-primary">Convert</button>
          </div>
           <div className="col-md-4 box">Converted Amount = {this.state.convertedValue}</div>
    </div>
    );
  }

}
