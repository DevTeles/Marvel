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
    <Container style={{ height: 'auto' }} >
      <TagCarousel autoPlay width={1200} showThumbs={false} showStatus={false} useKeyboardArrows >
        {series.map(serie => (
          <div key={serie.id} style={{ height: '720px' }}>
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={serie.thumbnail.path + '.' + serie.thumbnail.extension} alt={serie.title} />
            <p className="legend">{serie.title}</p>
          </div>
        ))}
      </TagCarousel>
    </Container >
  );
};
