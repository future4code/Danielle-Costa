import React from 'react';
import {DivDetalhes, DivPerfil, Blur, FotoPerfil, DivDados, NomePerfil, IdadePerfil, Descricao} from './DetalhesStyled.js'

const Detalhes = (props) => {
  return (
    <DivDetalhes>
        <DivPerfil>
            <Blur imagem={props.perfil.photo} />
            <FotoPerfil src={props.perfil.photo} />
        </DivPerfil>
        <DivDados>
            <NomePerfil>{props.perfil.name},</NomePerfil>
            <IdadePerfil>{props.perfil.age}</IdadePerfil>
            <Descricao>{props.perfil.bio}</Descricao>
        </DivDados>
    </DivDetalhes>
  );
}

export default Detalhes;
