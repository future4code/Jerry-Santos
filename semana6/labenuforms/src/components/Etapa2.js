import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export class Etapa2 extends React.Component {
    render() {
        return (
            <Form>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5. Qual o curso?</p>
                <input/>
                <p>6. Qual a unidade de ensino?</p>
                <input/>
            </Form>
        )
    }
};