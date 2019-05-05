import React from 'react';

function StudentList(props) {
  const curStudentList = props.students;
  const renderedCurStudentList = curStudentList.map(curStudent => {
    return (
      <tr key={curStudent.id}>
        <td>{curStudent.firstName + ' ' + curStudent.lastName}</td>
        <td>Details</td>
      </tr>
    );
  });
  return <tbody>{renderedCurStudentList}</tbody>;
}

export default StudentList;
