import React from 'react';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

import studentData from '../helpers/data/studentData';

import './App.scss';

class App extends React.Component {
  state = {
    aliveStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const aliveStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ aliveStudents, deadStudents });
  }

  sharkAttack = (studentId) => {
    console.error(studentId);
    studentData.followTheLight(studentId);
    const aliveStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ aliveStudents, deadStudents });
  }

  render() {
    const { aliveStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <h2>Shark Attack</h2>
        <SharkTank aliveStudents={aliveStudents} sharkAttack={this.sharkAttack}/>
        <Graveyard deadStudents={deadStudents}/>
      </div>
    );
  }
}

export default App;
