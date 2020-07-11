import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, List, Item, Header, Footer, Pagination, Descricao } from './styles';
import { Link } from 'react-router-dom';

import MarvelLogo from '../../assets/MarvelLogo.png';
import GitHub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.jpeg';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    async function load() {
      const response = await api.get('characters', {
        params: {
          ts: process.env.REACT_APP_TS,
          apikey: process.env.REACT_APP_API_KEY,
          hash: process.env.REACT_APP_HASH,
          offset,
          limit: 18
        }
      });

      if (response.data) {
        setCharacters(response.data.data.results);
      }
    }
    load();

  }, [offset]);

  const handlePage = async action => {
    setOffSet(action === 'back' ? offset - 1 : offset + 1);
  };

  const handleSearch = async event => {
    event.preventDefault();

    if (event.keyCode === 13) {
      const search = event.target.value.trim();
      let response;

      if (search) {
        response = await api.get('characters', {
          params: {
            ts: process.env.REACT_APP_TS,
            apikey: process.env.REACT_APP_API_KEY,
            hash: process.env.REACT_APP_HASH,
            limit: 18,
            nameStartsWith: search
          }
        });
      } else {
        response = await api.get('characters', {
          params: {
            ts: process.env.REACT_APP_TS,
            apikey: process.env.REACT_APP_API_KEY,
            hash: process.env.REACT_APP_HASH,
            limit: 18,
            offset: 0
          }
        });
      }

      if (response.status === 200) {
        setCharacters(response.data.data.results);
      }
    }
  }

  return (
    <>
      <Container>
        <Header>
          <img src={MarvelLogo} alt="Marvel" />
          <div style={{ background: '#f2f2f2' }}>
            <FaSearch color="#393939" size={32} style={{ background: '#f2f2f2' }} />
            <input onKeyUp={(e) => handleSearch(e)} placeholder="Pesquisa um personagem" type="text" name="search" />
          </div>
        </Header>
        <List>
          {characters.map(character => (
            <Item key={character.id}>
              <Link key={character.id} to={`/characters/${character.id}/series`} style={{ textDecoration: 'none', padding: 0, margin: 0 }} >
                <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                <Descricao>
                  <p>{character.name}</p>
                </Descricao>
              </Link>
            </Item>
          ))}
        </List>
        <Pagination>
          <button
            type="button"
            disabled={offset < 2}
            onClick={() => handlePage('back')}
          >
            <FaChevronLeft />
            Anterior
          </button>
          <span>Página {offset + 1}</span>
          <button type="button" onClick={() => handlePage('next')}>
            Proximo <FaChevronRight />
          </button>
        </Pagination>
      </Container >
      <Footer>
        <a href="https://github.com/DevTeles">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-teles-vital-9002946a/" >
          <img src={Linkedin} alt="GitHub" />
        </a>
      </Footer>
    </>
  );
}