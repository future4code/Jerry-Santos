import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`

const Desk = styled.div`
  width: 80%;
  border: 1px solid orange;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
const Title = styled.h1`
  color: red;
`

const PokeTitle = styled.p`
  color: yellow;
  font-weight: bold;
  text-transform: capitalize;
`

class App extends React.Component {
  state = {
    squad: [],
    imagem: ""
  }

  componentDidMount = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40`).then(
      response => {
        this.setState({squad: response.data.results})
      }
    ).catch(error => {
      window.alert("Deu ruim :(")
    })
  }

  mostraImagem = event => {
    // axios.get(`https://pokeapi.co/api/v2/pokemon/${imgName}`)
    // .then(response => {
    //   console.log(response)
    // }).catch(error => {
    //   console.log("Deu merda :(")
    // })
    console.log(event.target.value) /*Preciso descobrir pq esse target só retornar undefined*/
  }

  render() {

    return (
      <Container>
        <div>
          <Title>Pokesquad</Title>
        </div>
        <Desk>
          {this.state.squad.map(pokemon => {
            return (
              <PokeTitle onClick={this.mostraImagem} key={pokemon.name} value={pokemon.name}>{pokemon.name}</PokeTitle>
            )
          }) 
          }
        </Desk>
      </Container>
    );
  }
}

export default App;
