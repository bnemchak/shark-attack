import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    aliveStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    e.preventDefault();
    const { aliveStudents, sharkAttack } = this.props;
    const randomNumber = Math.floor(Math.random() * 21);
    console.error(randomNumber);

    aliveStudents.forEach((student) => {
      if (student.id === `student${randomNumber}`) {
        sharkAttack(student.id);
      }
    });
  }

  render() {
    const { aliveStudents } = this.props;

    const aliveStudentCard = aliveStudents.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));

    return (
      <div className="sharktank">
        <h2>Shark Tank</h2>
        <div className="aliveStudents">
        { aliveStudentCard }
        <button className="btn btn-danger" onClick={this.sharkAttackEvent}><i className="fas fa-heartbeat"></i> Shark Attack <i className="fas fa-heartbeat"></i></button>
      </div>
      </div>
    );
  }
}

export default SharkTank;
