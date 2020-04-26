import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export class Final extends React.Component {
    render() {
        return (
            <Form>
                <h3>O FORMULÁRIO ACABOU</h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Form>
        )
    }
}