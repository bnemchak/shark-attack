import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import Gravestone from '../GraveStone/GraveStone';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes ={
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;

    const deadStudentCard = deadStudents.map((student) => (
      <Gravestone key={student.id} student={student}/>
    ));

    return (
      <div className="graveyard">
        <h2>Graveyard</h2>
        <div className="deadStudents">
        { deadStudentCard }
        </div>
      </div>
    );
  }
}

export default Graveyard;
