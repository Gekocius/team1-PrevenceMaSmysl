import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

import img from '../../img/img.jpg';

export class Stories extends Component {
  render() {
    return (
      <div className='parallax-content' id="stories">
        <h4>Příběhy</h4>
        <p id="cssContent">Příběhy za 5 minut 12. TBD Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <Row>
          <Col xs="12" sm="6" md="3"><img src={img} class="img" alt="Story photo"/></Col>
          <Col xs="12" sm="6" md="3"><img src={img} class="img" alt="Story photo"/></Col>
          <Col xs="12" sm="6" md="3"><img src={img} class="img" alt="Story photo"/></Col>
          <Col xs="12" sm="6" md="3"><img src={img} class="img" alt="Story photo"/></Col>
        </Row>
      </div>
    );
  }
};