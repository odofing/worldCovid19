import React, { Component } from 'react';
import CountUp from 'react-countup';

class Cards extends Component {

    render () {
        const {summary, fullDate} = this.props;
    return (
        <div> 
        <h2 className="text-success m-5 text-center">Global Coronavirus Data</h2>
        <h5>{new Date(fullDate).toDateString()}</h5>
        <h1 className="text-success">Global Data</h1>
            <div className="row"  >
            <div className="col-md-4 mt-5">
        <div className="card">
          <div className="card-body bg-info">
            <h5 className="text-dark text-center">New Confirmed</h5>
          <div className="d-flex justify-content-center">
            <h3 className="text-dark ">
            <CountUp start={0}
            end={summary.NewConfirmed}
            duration={3}
            separator="," />
               </h3>
          </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="card">
          <div className="card-body bg-success">
            <h5 className="text-dark text-center">Total Confirmed</h5>
          <div className="d-flex justify-content-center">
            <h3 className="text-dark">
            <CountUp start={0}
            end={summary.TotalConfirmed}
            duration={3}
            separator="," />
               </h3>
          </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="card">
          <div className="card-body bg-secondary">
            <h5 className="text-dark text-center">New Deaths</h5>
          <div className="d-flex justify-content-center">
            <h3 className="text-dark">
            <CountUp start={0}
            end={summary.NewDeaths}
            duration={3}
            separator="," />
               </h3>
          </div>
          </div>
        </div>
      </div>

        <div className="col-md-4 mt-5">
        <div className="card">
          <div className="card-body bg-danger">
            <h5 className="text-dark text-center">Total Deaths</h5>
          <div className="d-flex justify-content-center">
            <h3 className="text-dark">
            <CountUp start={0}
            end={summary.TotalDeaths}
            duration={3}
            separator="," />
               </h3>
          </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="card">
          <div className="card-body bg-primary">
            <h5 className="text-dark text-center">Total Recovered</h5>
          <div className="d-flex justify-content-center">
            <h3 className="text-dark">
            <CountUp start={0}
            end={summary.TotalRecovered}
            duration={3}
            separator="," />
               </h3>
          </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-5">
        <div className="card">
          <div className="card-body bg-warning">
            <h5 className="text-dark text-center">New Recovered</h5>
          <div className="d-flex justify-content-center">
            <h3 className="text-dark">
            <CountUp start={0}
            end={summary.NewRecovered}
            duration={3}
            separator="," />
               </h3>
          </div>
          </div>
        </div>
      </div>
        </div>
        </div>
        
    )
}
}

export default Cards;
