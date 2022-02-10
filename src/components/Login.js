import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../index.css';




const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=8d0a83dea9464b8e8ef6452f0facc1ca&response_type=code&redirect_uri=http://localhost:3000&scope=user-top-read%20user-read-recently-played%20playlist-read-private%20playlist-read-collaborative%20user-read-private%20user-follow-read";

export default function login() {
  return(
      <Container fluid>
          <Row>
              <Col md={6} lg={6} className='esquerda'>
                <Container>
                    <h1>Spotify Stats</h1>
                    <p>Veja suas músicas, artistas e playlists mais ouvidas.</p>
                    <a className='botao col-md-8' href={AUTH_URL}>Login com Spotify</a>
                    <p className='info mt-5'>App criado por <a href="https://github.com/Gustavogbd">Gustavo Santos </a>a partir da Spotify API</p>
                </Container>
              </Col>
              <Col md={6} lg={6} className='direita'>
                
              </Col>
          </Row>
      </Container>
  );
}
