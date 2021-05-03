import React, {useState, useEffect} from 'react';
import {DivMatches, DivLista, FotoPerfil} from './MatchesStyled.js'


const Matches = (props) => {
  return (
      <DivMatches>
        {!props.lista && <p>Carregando lista de matches</p>}
        {props.lista && props.lista.map(perfil=>{
          return(
            <DivLista onClick={()=>props.recebeInfo(perfil)}>
              <FotoPerfil src={perfil.photo} />
              <p>{perfil.name}</p>
            </DivLista>
          )
        })}
      </DivMatches>
  );
}

export default Matches;
