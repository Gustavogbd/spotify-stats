import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../index.css';
import { loginUrl } from '../spotify';

export default function login() {
  return(
      <Container fluid>
          <Row>
              <Col md={6} lg={6} className='esquerda'>
                <Container>
                    <h1>Spotify Stats</h1>
                    <p>Veja suas músicas, artistas e playlists mais ouvidas.</p>
                    <a className='botao col-md-8' href={loginUrl}>Login com Spotify</a>
                    <p className='info mt-5'>App criado por <a href="https://github.com/Gustavogbd">Gustavo Santos </a>a partir da Spotify API</p>
                </Container>
              </Col>
              <Col md={6} lg={6} className='direita'>
                
              </Col>
          </Row>
      </Container>
  );
}
