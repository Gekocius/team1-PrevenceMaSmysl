import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import {FontIcon} from "../atoms/FontIcon";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
            <a id="cssFooterMenu" href="/" className="footerMenu">Landing Page</a><br/>
            <a id="cssFooterMenu" href="/vysetreni" className="footerMenu">Preventivní vyšetření</a><br/>
            <a id="cssFooterMenu" href="/feed" className="footerMenu">#PrevenceMaSmysl</a><br/>
            <a id="cssFooterMenu" href="/pribehy" className="footerMenu">Příběhy</a><br/>
            <a id="cssFooterMenu" href="/akce" className="footerMenu">Akce</a><br/>
            <a id="cssFooterMenu" href="/kontakty" className="footerMenu">Kontakt</a><br/>
            <a id="cssFooterMenu" href="/admin-login" className="footerMenu">Admin modul</a>
            </Col>
            <Col>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'facebook'}/><i/></a>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'twitter'}/><i/></a>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'instagram'}/><i/></a>
              <a href="#" target="_blank" ><FontIcon variant={"b"} icon={'google'}/><i/></a>
            </Col>
            <Col>
              <a id="cssFooterArrow" href="#" ><i class="material-icons" style={{position: 'absolute' , right: '10px'}}>expand_less</i></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a id="cssCopyright" >© tým 1 #PrevenceMáSmysl {new Date().getFullYear()}</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
