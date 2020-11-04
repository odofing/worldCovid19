import React, { Component } from 'react';
import axios from 'axios';
import Cards from '../Components/Cards/Cards';
import CountryData from '../Components/CountryData/CountryData';


class FetchData extends Component { 

    state = {
        global: [],
    countries: [],
    currentDate: null,
    fullDate: null,
    newConfirmed: [],
    newDeaths: [],
    totalConfirmed: [],
    totalDeaths: [],
    totalRecovered: [],
    loading: true,
   
    };
    
  
  async  componentDidMount () {
       
const res = await axios.get('https://api.covid19api.com/summary')
// console.log(res.data.Date),
//.catch( res => showError());
// .catch( res => console.log("bye!"));
// console.log({countries: res.data.Countries});
this.setState({fullDate: res.data.Date});
this.setState({countries: res.data.Countries});
this.setState({global: res.data.Global});
this.setState({newConfirmed: res.data.Global.NewConfirmed})
this.setState({currentDate: res.data.Date});
this.setState({loading: false}); 

}

    render () {

        if (this.state.loading) {
            return <div class="container text-center mt-5">
            <div class="row ">
              <div class="col-md-12">
                <div class="spinner-grow text-primary" role="status">
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
                <div class="spinner-grow text-success" role="status">
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
                <div class="spinner-grow text-danger" role="status">
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
                <div class="spinner-grow text-warning" role="status">
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
                <div class="spinner-grow text-info" role="status">
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
      
              </div>
            </div>
          </div>
         }
    
        return (
<div>

    <Cards summary={this.state.global} fullDate={this.state.fullDate} />
    
    
 <h3 className="text-success mt-5 mb-5 text-center">Data By Country</h3>
 
     <table className="table table-dark table-striped table-bordered table-hover">
    
   <thead>
      <tr>
         <th>Country</th>
         <th>New Confirmed</th>
         <th>Total Confirmed</th>
         {/* <th>New Deaths</th> */}
         <th>Total Deaths</th>
         <th>Total Recovered</th>
        
      </tr>
   </thead>
   <tbody>
   {this.state.countries.map(country => (
    <CountryData countries={country} key={country.Country}/>
    ))}
   </tbody>
   </table>
</div>

)

}
}
export default FetchData;
