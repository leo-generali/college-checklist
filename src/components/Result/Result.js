import React, { Component } from 'react';

class Result extends Component {
  


  render() {

    const school = this.props.collegeInfo;

    return (
      <section className="card">
        <p> { school["school.name"] } </p>
      </section>
    );
  }
}

export default Result;
