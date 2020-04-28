import React from 'react';
import styled from 'styled-components';
import { ListaUsuarios } from './components/ListaUsuarios';
import axios from 'axios';



class App extends React.Component {
  state = {
    lista: [],
    inicio: true
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
  
  render() {
    
    const cadastrarUsuarios = (
      <div>
        <label>Nome: </label>
        <input/>
        <label>E-mail: </label>
        <input/>
        <button>Salvar</button>
      </div>
    )
    
    
    console.log()
    return (
      <div>
          <button onClick={this.alteraBotao}>{this.state.inicio ? "Ir para página de lista" : "Ir para página de registro"}</button>
          {this.state.inicio ? cadastrarUsuarios:<ListaUsuarios listaAtualizada={this.state.lista}/>}
      </div>
    );
  }
}
  

export default App;
