import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles';

export default function Series({ match }) {
  return (
    <Container>
      <div style={{ margin: 30, display: 'flex' }}>
        <div>
          <h1>Series</h1>
          <Carousel match={match} />
        </div>

      </div>
    </Container>
  );
}

render(<Series />, document.getElementById("root"));
