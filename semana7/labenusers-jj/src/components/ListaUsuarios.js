import React from 'react';
import styled from 'styled-components';


export class ListaUsuarios extends React.Component {
  render() {
      let listaFinal = this.props.listaAtualizada.map((usuario) => {
          return (
            <div>
              <p>{usuario.name}</p>
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
