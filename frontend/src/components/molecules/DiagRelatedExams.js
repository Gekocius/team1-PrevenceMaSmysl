import React, { Component } from "react";
import { Label } from 'reactstrap';


import {MultiSelect} from '../atoms/MultiSelect';

export class DiagRelatedExams extends Component {
  render() {
    return (
      <div className="relatedExams">
        <Label for="exampleText">Související vyšetření</Label>
        <MultiSelect></MultiSelect>
      </div>
    );
  }
}