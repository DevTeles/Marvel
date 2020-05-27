import React, { useEffect, useState } from "react";
import { Carousel as TagCarousel } from "react-responsive-carousel";
import api from '../../services/api';

import { Container } from './styles';

export default function Carousel({ match }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {

    async function loadSeries() {
      if (match !== undefined) {
        const response = await api.get(match.url, {
          params: {
            ts: '1',
            apikey: 'a8f26c9262cee8b030a65c0a928ecbb1',
            hash: '04cb0ae8317b318fc29ffdb30af4fe23',
          }
        });

        if (response.data) {
          console.log(response.data.data.results);
          setSeries(response.data.data.results);
        }
      }
    }

    loadSeries();

  }, [match]);

  return (
    <Container>
      <TagCarousel autoPlay width="650px">
        {series.map(serie => (
          <div key={serie.id}>
            <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} alt={serie.title} />
            <p className="legend">{serie.title}</p>
          </div>

        ))}
      </TagCarousel>
    </Container>
  );
};
