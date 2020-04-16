import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const InputPost = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 5px;
  margin: 10px;
`

const BotaoAdicionar = styled.button`
  margin-bottom: 20px;
`


class App extends React.Component {
  state = {
    posts: [
      {
        usuario: "paulinha",
        linkFotoUsuario: "https://picsum.photos/50/50?a=1",
        linkFotoPost: "https://picsum.photos/200/150?a=2"
      },
      {
        usuario: "zedavelha",
        linkFotoUsuario: "https://picsum.photos/50/50?a=3",
        linkFotoPost: "https://picsum.photos/200/150?a=4"
      },
      {
        usuario: "musical7",
        linkFotoUsuario: "https://picsum.photos/50/50?a=5",
        linkFotoPost: "https://picsum.photos/200/150?a=6"
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };

  adicionaPost = () => {
    
    const novoPost = {
      
      usuario: this.state.valorInputUsuario,
      linkFotoUsuario: this.state.valorInputFotoUsuario,
      linkFotoPost: this.state.valorInputFotoPost
    };

    const novosPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novosPosts });
  };

  onChangeInputUsuario = event => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = event => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de email

    // Define o estado "valorInputEmail" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = event => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de telefone

    // Define o estado "valorInputTelefone" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const listaDePosts = this.state.posts.map(post => {
      return (
        <Post
          nomeUsuario={post.usuario}
          fotoUsuario={post.linkFotoUsuario}
          fotoPost={post.linkFotoPost}
        />
      )
    })
    return (
      <div className={'app-container'}>
        <h2>Novo Post</h2>
        <InputPost
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputUsuario}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <InputPost
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFotoUsuario}
            // E a função também é outra
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link Foto Usuário"}
          />
          <InputPost
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFotoPost}
            // E a função também é outra
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link Foto Post"}
          />
          <BotaoAdicionar onClick={this.adicionaPost}>Adicionar</BotaoAdicionar>
        {listaDePosts}
      </div>
    );
  }
}

export default App;
