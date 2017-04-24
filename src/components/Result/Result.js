import React, { Component } from 'react';

class Result extends Component {

  populateResults() {
    const school = this.props.collegeInfo;
    const year = this.props.infoYear;

    //School Information
    const schoolName = school["school.name"];
    const schoolLocation = school["school.city"] + ", " + school["school.state"];
    const schoolPublic = school[ year + ".cost.avg_net_price.public"] ? "public" : "private";

    //Demographics Info
    const schoolSize = school[ year + ".student.size"];
    let schoolSizeMenPercent = school[year + ".student.demographics.men"] * 100;
    schoolSizeMenPercent = Math.round(schoolSizeMenPercent * 100) / 100
    const schoolSizeWomenPercent = 100 - schoolSizeMenPercent;

    const schoolSizeMenAbsolute = Math.round(schoolSizeMenPercent * schoolSize);

    const schoolSizeWomenAbsolute = Math.round(schoolSizeWomenPercent * schoolSize);

    //Price Info
    const schoolPrice = school[ year + ".cost.attendance.academic_year"];
    const schoolPriceAvg = school[ year + ".cost.avg_net_price.public"] ? school[ year + ".cost.avg_net_price.public"] : school[ year + ".cost.avg_net_price.private"];
    
    //Admissions Info
    const schoolAdmitRate = school[ year + ".admissions.admission_rate.overall"];
    const schoolAdmitSAT = school[ year + ".admissions.sat_scores.average.overall"];
    const schoolCompRate = school[ year + ".completion.completion_rate_4yr_150nt"] ? school[ year + ".completion.completion_rate_4yr_150nt"] : school[ year + ".completion.completion_rate_less_than_4yr_150nt"];
    
    return (  
      <div className="results">
        <h3> { schoolName } </h3>
        <p> { schoolLocation } </p>
        <p> { schoolPublic } </p>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p className="results__seperatorText">Demographics Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <section className="results__items">
          <p className="results__stat"> { schoolSize } </p>
          <p className="results__stat"> { schoolSizeMenPercent } </p>
          <p className="results__stat"> { schoolSizeWomenPercent } </p>
          <p className="results__stat"> { schoolSizeMenAbsolute } </p>
          <p className="results__stat"> { schoolSizeWomenAbsolute } </p>
        </section>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p className="results__seperatorText">Cost Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <p> { schoolPrice } </p>
        <p> { schoolPriceAvg } </p>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p className="results__seperatorText">Academic Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <p> { schoolAdmitRate } </p>
        <p> { schoolAdmitSAT } </p>
        <p> { schoolCompRate } </p>

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
