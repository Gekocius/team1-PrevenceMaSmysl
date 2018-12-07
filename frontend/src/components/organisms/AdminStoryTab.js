import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Jumbotron, Table} from 'reactstrap';
import { getAdminStories } from '../../services/AdminStories/reducer';

/*
const data = [{
  id: 1,
  name: 'Petr',
  age: '23'
}, {
  id: 2,
  name: 'Daniela',
  age: '23'
}, {
  id: 3,
  name: 'Jiří',
  age: '50'
}
]
*/

export class AdminStoryTabRaw extends Component {

  render() {
    const { stories } = this.props;
    console.log(this.stories);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Jméno a věk pacienta</th>
            <th>Upravit</th>
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {stories.map( item => (
            <tr key={item.i}>
              <th scope="row">{item.i}</th>
              <td>{item.Name}, {item.Age}</td>
              <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td>
              <td><a href=""><i class="material-icons" id="cssFooterArrow">delete</i></a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}


const mapStateToProps = (state) => {
  const stories = getAdminStories(state.adminStories);

  return {
    stories,
  };
};

export const AdminStoryTab = connect(mapStateToProps)(AdminStoryTabRaw);