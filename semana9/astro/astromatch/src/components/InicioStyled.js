import styled, {keyframes} from 'styled-components'

export const DivInicio = styled.div`
  text-align: center;
  padding: 15px;
  display: grid;
  grid-template-rows: 400px 1fr;
`

export const DivPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Blur = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.imagem});
  filter: blur(10px);
  z-index: 1;
  position: absolute;
  top: 0;
  backface-visibility: hidden;
`

export const FotoPerfil = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
`

export const DivDados = styled.div`
  position: absolute;
  bottom: 5px;
  left: 12px;
  z-index: 3;
  color: #fff;
  text-align: left;
`

export const NomePerfil = styled.h2`
  margin: 0;
  display: inline-block;
`

export const IdadePerfil = styled.p`
  margin: 0 8px;
  font-size: 1.5em;
  display: inline-block;
`

export const Descricao = styled.p`
  margin: 8px 0;
  font-size: 1.2em;
`

export const DivEscolhas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Botao = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: white;
  border: 1px solid #ff0000;
  font-size: 1.4em;
  font-weight: bold;
  color: #ff0000;
  :hover{
    background-color: #ff0000;
    color: #ffffff;
    transform: scale(1.1);
    transition: all 0.7s;
  }
  :last-child{
    border: 1px solid #34AAA9;
    color: #34AAA9;
    :hover{
      background-color: #34AAA9;
      color: #ffffff;
    }
  }
`

export const Coracao = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 60%;
  margin-left: auto;
  margin-right: auto;
  left: 0px;
  right: 0px;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  z-index: 1;
`
export const keyframesCoracao = keyframes`
  0% {
    transform: scale(0.95);
  }
  5% {
      transform: scale(1.1);
  }
  39% {
      transform: scale(0.85);
  }
  45% {
      transform: scale(1);
  }
  60% {
      transform: scale(0.95);
  }
  100% {
      transform: scale(0.9);
  }
`

export const AnimacaoCoracao = styled.div`
  top: 23px;
  left: 19px;
  position: absolute;
  width: 26px;
  height: 26px;
  background: rgb(74, 163, 151);
  animation: 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s infinite normal none running ${keyframesCoracao};
  ::before{
    content: " ";
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    background: rgb(117, 49, 146);
    left: -17px;
    border-radius: 50% 0px 0px 50%;
  }
  ::after{
    content: " ";
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    background: rgb(117, 49, 146);
    top: -17px;
    border-radius: 50% 50% 0px 0px;
  }
`