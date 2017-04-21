import React, { Component } from 'react';

class Result extends Component {
  


  render() {

    return (
      <section className="card">
        <p> { this.props.collegeInfo["school.name"] } </p>
      </section>
    );
  }
}

export default Result;
