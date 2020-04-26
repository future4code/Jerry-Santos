import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export class Etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: ""
    }

    render() {
        return (
            <Form>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input/>
                <p>2. Qual sua idade?</p>
                <input/>
                <p>3. Qual seu e-mail?</p>
                <input/>
                <p>4. Qual sua escolaridade?</p>
                <select>
                    <option value={'Ensino Médio Incompleto'}>Ensino Médio Incompleto</option>
                    <option value={'Ensino Médio Completo'}>Ensino Médio Completo</option>
                    <option value={'Ensino Superior Incompleto'}>Ensino Superior Incompleto</option>
                    <option value={'Ensino Superior Completo'}>Ensino Superior Completo</option>
                </select>
            </Form>
        )
    }
};