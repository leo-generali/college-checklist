import React, { Component } from 'react';

class Result extends Component {

  populateResults() {
    const school = this.props.collegeInfo;
    const schoolName = school["school.name"];
    const schoolLocation = school["school.city"] + ", " + school["school.state"];
    return (  
      <div className="results">
        <h3> { schoolName } </h3>
        <p> { schoolLocation } </p>
        <p>Admissions Info</p>    
      </div>
   )
    
  }
  


  render() {



    return (
      <section className="card">
        { this.populateResults() } 

      </section>
    );
  }
}

export default Result;
