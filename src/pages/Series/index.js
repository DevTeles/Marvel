import React from "react";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles';
import { FaChevronLeft } from 'react-icons/fa';

export default function Series({ match }) {
  return (
    <Container>
      <div>
        <div style={{ display: 'flex', placeItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <FaChevronLeft size={30} color="#7159c1" style={{ margin: '10px' }} />
          </a>
        </div>
        <h1 style={{ textAlign: 'center' }}>Series com o personagem</h1>
        <Carousel match={match} />
      </div>

    </Container>
  );
}
