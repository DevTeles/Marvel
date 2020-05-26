import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px;
  flex: 1;
`;

export const List = styled.ul`    
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;  
  list-style: none;    
`;

export const Item = styled.li`  
  border-radius: 6px;
  margin-top: 10px;  

  &:hover {
    border: 3px solid #ff9000;
  }

  img {
    width: 400px;
    height: 300px;   
    border-radius: 6px;  
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 300px;
  width: 100%;
  height: 100px;

  img {
    width: 130px;
    height: 70px;
    border-radius: 4px;
  }

  div { 
    margin: 30px;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-self: center;

    input {          
      padding-left: 25px;
      margin-right: 10px;
      width: 500px;
      height: 50px;
      border-radius: 4px;
      font-size: 22px;
      background: '#f2f2f2';
    }
  }

  button {
    margin-top: 30px;
    height: 50px;

    svg {
      height: 20px;
    }
  }
`;

export const Footer = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  button {
    transform: opacity 0.25s ease-out;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 035;
      cursor: not-allowed;
    }
  }
`;