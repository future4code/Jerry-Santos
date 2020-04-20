import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export class Etapa3 extends React.Component {
     render() {
        return (
            <Form>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input/>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value={'Curso Técnico'}>Curso Técnico</option>
                    <option value={'Curso de Inglês'}>Curso de Inglês</option>
                    <option value={'Não fiz curso complementar'}>Não fiz curso complementar</option>
                    
                </select>
            </Form>
        )
    }
};