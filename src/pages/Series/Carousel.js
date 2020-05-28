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
            ts: process.env.REACT_APP_TS,
            apikey: process.env.REACT_APP_API_KEY,
            hash: process.env.REACT_APP_HASH,
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
      <TagCarousel autoPlay width={series.length > 7 ? 380 : 650}>
        {series.map(serie => (
          <div key={serie.id}>
            <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} alt={serie.title} />
            <p className="legend">{serie.title}</p>
          </div>

        ))}
      </TagCarousel>
    </Container >
  );
};
