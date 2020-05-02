import React from 'react';
import styled from 'styled-components';
import { ListaUsuarios } from './components/ListaUsuarios';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
` 
const ContainerUm = styled.div`
  justify-items: flex-start;
  margin: 1rem;
` 
const ContainerDois = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const ContainerForm = styled.div`
  width: 25rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px #2D3058 solid;
`
const BotaoForm = styled.button`
  width: 4rem;
  height: 2rem;
  margin-top: 1rem;
  color: white;
  background-color: #2D3058;
  border: none;
`


class App extends React.Component {
  state = {
    lista: [],
    inicio: true,
    inputNomeValor: "",
    inputEmailValor: ""
  }

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "jerry-jones-julian"
          }
        }
      )
      .then(resposta => {
        this.setState({lista: resposta.data})
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  alteraBotao = () => {
    this.setState({inicio: !this.state.inicio})
    this.pegaUsuarios();
  }

  inputName = (event) => {
    this.setState({inputNomeValor: event.target.value})
  }

  inputEmail = (event) => {
    this.setState({inputEmailValor: event.target.value})
  }
  
  

  novoUsuario = () => {
    const body = {
      "name": this.state.inputNomeValor,
      "email": this.state.inputEmailValor
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "jerry-jones-julian"
      }
    }).then( response => {
      window.alert("Novo usuário cadastrado")
      this.setState({inputNomeValor: "", inputEmailValor: ""})
      this.pegaUsuarios();
    }).catch( error => {
      window.alert("Ihh! Algo parece estar errado")
      this.setState({inputNomeValor: "", inputEmailValor: ""})
    })
    
  }
  
  render() {
    
    const cadastrarUsuarios = (
      <ContainerForm>
        <label>Nome: </label>
        <input value={this.state.inputNomeValor} onChange={this.inputName}/>
        <label>E-mail: </label>
        <input value={this.state.inputEmailValor} onChange={this.inputEmail}/>
        <BotaoForm onClick={this.novoUsuario}>Salvar</BotaoForm>
      </ContainerForm>
    )
    
    
    console.log()
    return (
      <Container>
        <ContainerUm>
          <button onClick={this.alteraBotao}>{this.state.inicio ? "Ir para página de lista" : "Ir para página de registro"}</button>
        </ContainerUm>    
        <ContainerDois>
          {this.state.inicio ? cadastrarUsuarios:<ListaUsuarios listaAtualizada={this.state.lista}/>}
        </ContainerDois>
      </Container>
      
    );
  }
}
  

export default App;
