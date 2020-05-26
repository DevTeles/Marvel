import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, List, Item, Header, Footer } from './styles';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [offset, setOffSet] = useState(1);

  useEffect(() => {
    async function load() {
      const response = await api.get('v1/public/characters', {
        params: {
          ts: '1',
          apikey: 'a8f26c9262cee8b030a65c0a928ecbb1',
          hash: '04cb0ae8317b318fc29ffdb30af4fe23',
          offset,
          limit: 6
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

  const handleSearch = async value => {
    console.log(value);
    const novo = characters.filter(item => item.name === value);
    console.log(novo);
    setCharacters(novo);
  }

  return (
    <Container>
      <Header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png" alt="Marvel" />
        <div>
          <input onChange={(e) => handleSearch(e.target.value)} placeholder="Pesquisa um personagem" type="text" name="search" />
          <FaSearch color="#FFF" size={40} />
        </div>
      </Header>
      <List>
        {characters.map(character => (
          <Link to={`/characters/${character.id}/series`} >
            <Item key={character.id}>
              <h1>{character.name}</h1>
              <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
            </Item>
          </Link>
        ))}
      </List>
      <Footer>
        <button
          type="button"
          disabled={offset < 2}
          onClick={() => handlePage('back')}
        >
          <FaChevronLeft />
            Anterior
          </button>
        <span>Página {offset}</span>
        <button type="button" onClick={() => handlePage('next')}>
          Proximo <FaChevronRight />
        </button>
      </Footer>
    </Container >
  );
}