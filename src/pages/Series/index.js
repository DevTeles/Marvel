import React from "react";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles';
import { FaChevronLeft } from 'react-icons/fa';

export default function Series({ match }) {
  return (
    <>
      <Container>
        <a href="/" style={{ textDecoration: 'none', padding: 0, margin: 0 }}>
          <FaChevronLeft size={30} color="#7159c1" style={{ margin: '40px' }} />
        </a>
        <div style={{ margin: 30, display: 'flex' }}>
          <div>
            <h1>Series</h1>
            <Carousel match={match} />
          </div>
        </div>
      </Container>
    </>
  );
}
