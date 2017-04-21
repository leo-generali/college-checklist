import React, { Component } from 'react';

class Result extends Component {

  populateResults() {
    const school = this.props.collegeInfo;
    const year = this.props.infoYear;

    //School Information
    const schoolName = school["school.name"];
    const schoolLocation = school["school.city"] + ", " + school["school.state"];

    //Demographics Info
    const schoolSize = school[ year + ".student.size"];
    const schoolSizeMenPercent = school[year + ".student.demographics.men"];
    const schoolSizeWomenPercent = 1 - schoolSizeMenPercent;
    const schoolSizeMenAbsolute = schoolSizeMenPercent * schoolSize;
    const schoolSizeWomenAbsolute = schoolSizeWomenPercent * schoolSize;


    return (  
      <div className="results">
        <h3> { schoolName } </h3>
        <p> { schoolLocation } </p>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p>Demographics Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <p> { schoolSize } </p>
        <p> { schoolSizeMenPercent } </p>
        <p> { schoolSizeWomenPercent } </p>
        <p> { schoolSizeMenAbsolute } </p>
        <p> { schoolSizeWomenAbsolute } </p>
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
