import React from 'react';
import './CardPequeno.css';

export function CardPequeno(props) {
    return (
        <div className={"little-container"}>
            <img src={ props.imagem } />
            <p><strong>{props.tipo}:</strong> {props.conteudo}</p>
        </div>
    )
}