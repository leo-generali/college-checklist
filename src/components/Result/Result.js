import React, { Component } from 'react';
import { addCommas } from '../../helpers/add_commas.js';

class Result extends Component {

  populateResults() {
    const school = this.props.collegeInfo;
    const year = this.props.infoYear;

    //School Information
    const schoolName = school["school.name"];
    const schoolUrl = school["school.school_url"];
    const schoolLocation = school["school.city"] + ", " + school["school.state"];
    const schoolPublic = school[ year + ".cost.avg_net_price.public"] ? "public" : "private";

    //Demographics Info
    const schoolSize = school[ year + ".student.size"];
    let schoolSizeMenPercent = school[year + ".student.demographics.men"] * 100;
    schoolSizeMenPercent = Math.round(schoolSizeMenPercent * 100) / 100;
    const schoolSizeWomenPercent = 100 - schoolSizeMenPercent;

    const schoolSizeMenAbsolute = addCommas(Math.round(schoolSizeMenPercent * schoolSize/100));

    const schoolSizeWomenAbsolute = addCommas(Math.round(schoolSizeWomenPercent * schoolSize/100));

    //Price Info
    const schoolPrice = school[ year + ".cost.attendance.academic_year"];
    const schoolPriceAvg = school[ year + ".cost.avg_net_price.public"] ? school[ year + ".cost.avg_net_price.public"] : school[ year + ".cost.avg_net_price.private"];
    const schoolNPC = school["school.price_calculator_url"];
    
    //Admissions Info
    const schoolAdmitSAT = school[ year + ".admissions.sat_scores.average.overall"];
    let schoolAdmitRate = school[ year + ".admissions.admission_rate.overall"];
    schoolAdmitRate = Math.round(schoolAdmitRate * 10000) / 100;
    let schoolCompRate = school[ year + ".completion.completion_rate_4yr_150nt"] ? school[ year + ".completion.completion_rate_4yr_150nt"] : school[ year + ".completion.completion_rate_less_than_4yr_150nt"];
    schoolCompRate = Math.round(schoolCompRate * 10000) / 100;
    
    return (  
      <div className="results">
        <p> { schoolName } </p>
        <p> { schoolLocation } </p>
        <p> { schoolPublic } </p>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p className="results__seperatorText">Demographics Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <section className="results__items">
          <p className="results__stat" data-type={"Population"} data-number={addCommas(schoolSize)} />
          <p className="results__stat" data-type={"% Male"} data-number={ schoolSizeMenPercent } />
          <p className="results__stat" data-type={"% Female"} data-number={ schoolSizeWomenPercent } />
          <p className="results__stat" data-type={"Pop. Male"} data-number={ schoolSizeMenAbsolute } />
          <p className="results__stat" data-type={"Pop. Female"} data-number={ schoolSizeWomenAbsolute } />
        </section>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p className="results__seperatorText">Academic Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <section className="results__items">
          <p> { schoolAdmitSAT + "/1600" } </p> 
          <p> { schoolAdmitRate } </p>
          <p> { schoolCompRate } </p>
        </section>
        <div className="results__seperatorWrapper">
          <span className="results__seperatorblock"/>
          <p className="results__seperatorText">Cost Info</p>
          <span className="results__seperatorblock"/>
        </div>
        <section className="results__items">
          <div className="results__price">
            <p className="results__price-header">Cost of Attendance</p> 
            <p className="results__price-cost">{ "$" + addCommas(schoolPrice) }</p> 
          </div>
          <div className="results__price">
            <p className="results__price-header">Average Net Price of Attendance</p> 
            <p className="results__price-cost">{ "$" + addCommas(schoolPriceAvg) } </p> 
          </div>
        </section>
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
