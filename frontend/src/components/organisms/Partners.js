import React, {Component} from 'react';
import { Button, Row, Col } from 'reactstrap';

import loono from '../../img/loono.jpg';
import avon from '../../img/avon.jpg';

export class Partners extends Component {
  render() {
    return (
    <div>
      <h4>Partnerské projekty</h4>
      <Row>
        <Col xs="12" sm="8">
          <h5>Loono</h5>
          <p id="cssContent">Jedním z našich největších partnerů je <span class="decor">Loono</span>.
          Tým mladých lékařů, studentů lékařských fakult a jiných nadšenců, kteří lidem ukazují, že na zdraví a prevenci záleží.
          Pořádají pravidelně workshopy a na jejich webových stránkách se každý pohodlně dozví například to, jak si provést
          <span class="decor"> samovyšetření prsou nebo varlat</span>. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Col>
        <Col xs="12" sm="4">
          <img src={loono} class="imgRound" alt="Loono tým"/>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="4">
          <img src={avon} class="imgRound" alt="Avon pochod"/>
        </Col>
        <Col xs="12" sm="8">
          <h5>Avon pochod</h5>
          <p id="cssContent">Spolupracujeme se zdravotními nadacemi, neziskovými organizacemi a skvělými lidmi. Je pro nás velikou ctí, že jedním z našich
          partnerů je i nadace Avon, která každoročně pořádá <span class="decor">Avon pochod Prahou</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Col>
      </Row>
    </div>
  );
}
};