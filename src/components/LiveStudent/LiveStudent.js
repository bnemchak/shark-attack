import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes ={
    student: studentShape.studentShape,
  };

  render() {
    const { student } = this.props;
    return (
      <div className="card bg-dark text-light border-0 col-4">
      <div className="card-body">
        <h3 className="card-text">{ student.firstName } { student.lastName }</h3>
      </div>
      </div>
    );
  }
}

export default LiveStudent;
