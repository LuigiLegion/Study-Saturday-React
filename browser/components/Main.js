import React from 'react';
import axios from 'axios';
import StudentList from './StudentList';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      // selectedStudent: {},
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
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList students={this.state.students} />
        </table>
      </div>
    );
  }
}

export default Main;
