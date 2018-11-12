import React, { Component } from "react"
import {MultiSelect} from '../atoms/MultiSelect';
import {connect} from 'react-redux';
import {setDisease} from '../../services/Filtration/actions';
import {dumbStore} from '../../store/dumbStore';

export class DiseaseSelectionRaw extends Component {

  options = dumbStore.diseaseOptions;

  handleChange = (selectedOption) => {
    this.props.setAnamnesis(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    return (
      <div>
        <h6>Léčím se s</h6>
        <MultiSelect handleChange={this.handleChange.bind(this)}
          options={this.options}
          selectedOption={this.props.selectedOption}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.filterState.disease
});

const mapDispatchToProps = {
  setDisease
};

export const DiseaseSelection = connect(mapStateToProps, mapDispatchToProps)(DiseaseSelectionRaw);
