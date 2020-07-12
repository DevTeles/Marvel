import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 150px;
  flex: 1;
  justify-content: center;
  justify-items: center;
  max-width: 90%;  
`;

export const Input = styled.input`
  &:focus {
    border: 3px solid #ff9000;
  }
`;

export const List = styled.ul`   
  width: 0 auto;   
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;    
  list-style: none; 

  @media (max-width: 1600px) {    
    display: flex;
    flex-wrap: wrap;    
    
    li {
      margin-right: 15px;
    }
  }
`;

export const Item = styled.li`    
  margin-top: 10px;     
  max-width: 230px; 
  box-sizing: border-box;
  overflow: hidden;
  

  &:hover {

    div {
      background: #e62429;
      color: #fff;
    }
  }

  img {
    width: 0 auto;
    max-width: 230px;
    height: 300px; 
    display: block;
    transition: transform ease 0.3s;

    &:hover {
      border: 1px solid #ff9000;    
      transform: scale(1.1);
    }
  }
`

export const Descricao = styled.div`
  width: 0 auto;
  max-width: 230px;
  /* padding-top: 23px; */
  background: #393939;  
  height: 100px;
  display: flex;  
  place-items: center;
  justify-content: center;

  p {
    font-size: 24px;
    color: #fff;
    text-align: center;
  }
`;

export const Header = styled.div`  
  display: flex;
  justify-content: space-between;    
  background: #393939;

  img {    
    margin: 15px 45px;
    width: 130px;
    height: 70px;    
  }

  div { 
    margin: 30px;
    display: flex;
    justify-content: center;   
    place-items: center;    

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
      height: 18px;
    }
  }
`;

export const Pagination = styled.div`
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

export const Footer = styled.div`    
  margin-top: 30px;
  padding-top: 20px;  
  height: 120px;
  background: #312e38;
  display: flex;
  justify-content: space-around;

  img {
    border-radius: 10px;
    width: 200px;      
  }
 
`;