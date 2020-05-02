import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BotaoDeletar = styled.button`
    border: none;
    color: red;
    margin-left: 5rem;
    cursor: pointer;
`   

export class ListaUsuarios extends React.Component {


    apagarUsuario = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
        headers: {
            Authorization: "jerry-jones-julian"
        }

    }).then( response => {
        window.alert("Usuário deletado")
        window.location.reload()
    }).catch( error => {
        window.alert("Tente novamente")
    })
    
    }

  render() {
      const listaFinal = this.props.listaAtualizada.map((usuario, index) => {
        return (
            <div key={index}>
              <span>{usuario.name}</span>
              <BotaoDeletar onClick={() => this.apagarUsuario(usuario.id)}>X</BotaoDeletar>
              <hr/>
            </div>
          )
      })
    return (
      <div>
        <h3>Usuários Cadastrados</h3>
        {listaFinal}
      </div>
    );
  }
}
