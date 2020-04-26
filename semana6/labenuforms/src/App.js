import React from 'react';
import styled from 'styled-components';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3'
import { Final } from './components/Final';

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Botao = styled.button`
  margin-top: 1rem;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

renderizaEtapa = () => {
  switch(this.state.etapa) {
    case 1:
      return <Etapa1 />
    case 2:
      return <Etapa2 />
    case 3:
      return <Etapa3 />
    case 4:
      return <Final />
    default:
      break;
  }
}

irParaProximaEtapa = () => {
  this.setState({etapa: this.state.etapa + 1})
}

  render() {
    const numeroEtapa = this.state.etapa;
    if(numeroEtapa === 4 ) {
    return (
      <Principal>
        {this.renderizaEtapa()}
      </Principal>
    );
    } else {
      return (
        <Principal>
          {this.renderizaEtapa()}
          <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao>
        </Principal>
      );
    }
  }
};

export default App;
