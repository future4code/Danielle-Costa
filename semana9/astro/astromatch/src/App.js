import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import Inicio from './components/Inicio';
import Matches from './components/Matches';
import Detalhes from './components/Detalhes';
import axios from 'axios';
import Badge from '@material-ui/core/Badge';
import {DivApp, DivInterna, Header, DivEspaco, Logo, IconeCurtidas, IconeVoltar} from './AppStyled.js'

const App = () => {
  const [secao, setSecao] = useState("inicio")
  const [perfilCarregado, setPerfilCarregado] = useState(undefined)
  const [listaDeMatches, setListaDeMatches] = useState(undefined)
  const [perfilSelecionado, setPerfilSelecionado] = useState(undefined)

  const mudaSecao = (event) => {
    setSecao(event.currentTarget.getAttribute("value"))
  }

  useEffect(()=>{
    carregaPerfil();
    carregaLista();
  }, [])

  const carregaPerfil = () => {
    setPerfilCarregado(undefined);
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauro-neto-julian/person")
    .then(resposta=>{
      return setPerfilCarregado(resposta.data.profile)
    })
    .catch(error => {
      return alert("Erro ao carregar perfil")
    })
  }

  const carregaLista = () =>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauro-neto-julian/matches")
    .then(resposta =>{
      return setListaDeMatches(resposta.data.matches)
    })
    .catch(error => {
      return alert(`Erro ao carregar lista`)
    })
  }

  const recarrega = () => {
    carregaPerfil();
    carregaLista();
  }

  const recebeInfo = (perfil) => {
    setPerfilSelecionado(perfil)
    setSecao("detalhes")
  }

  const limparSwipes = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mauro-neto-julian/clear")
      .then(resposta =>{
        return (alert("Lista de swipes apagada com sucesso!"), carregaLista(), carregaPerfil())
      })
      .catch(error => {
        return alert("Erro ao apagar lista, tente novamente")
      })
  }

  let secaoCarregada = undefined;

  switch(secao){
    case "matches":
      secaoCarregada = (
        <DivInterna>
            <Header>
              <IconeVoltar onClick={mudaSecao} value="inicio" />
              <Logo src={logo} />
              <DivEspaco />
            </Header>
            <Matches recebeInfo={recebeInfo} lista={listaDeMatches} />
          </DivInterna>
      )
      break;
    case "detalhes":
        secaoCarregada = (
          <DivInterna>
            <Header>
              <IconeVoltar onClick={mudaSecao} value="matches" />
              <Logo src={logo} />
              <DivEspaco />
            </Header>
            <Detalhes perfil={perfilSelecionado} />
          </DivInterna>
        )
      break;
    default:
      secaoCarregada = (
        <DivInterna>
            <Header>
            <button onClick={limparSwipes}>Limpar</button>
              <DivEspaco />
              <Logo src={logo} />
              {listaDeMatches 
                ? <Badge badgeContent={listaDeMatches.length} color="secondary">
                      <IconeCurtidas onClick={mudaSecao} value="matches" />
                  </Badge>
                : <IconeCurtidas onClick={mudaSecao} value="matches" />
              }
            </Header>
            <Inicio perfil={perfilCarregado} recarrega={recarrega} />
          </DivInterna>
        )
    break;
  }

  return (
    <DivApp>
      {secaoCarregada}
    </DivApp>
  );
}

export default App;
