import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
    this.getStudents = this.getStudents.bind(this);
  }
  componentDidMount() {
    this.getStudents();
  }
  async getStudents() {
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const curStudentsList = this.state.students;
    const renderedCurStudentsList = curStudentsList.map(curStudent => {
      return (
        <tr key={curStudent.id}>
          <td>{curStudent.firstName + ' ' + curStudent.lastName}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {renderedCurStudentsList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
