import styled from 'styled-components'

export const DivMatches = styled.div`
  text-align: center;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar{
    width: 5px;
  }
  &::-webkit-scrollbar-thumb{
    background: #8f8c8c;
    border-radius: 8px;
  }
`

export const DivLista = styled.div`
  height: 50px;
  padding: 8px;
  display: flex;
  justify-content: left;
  cursor: pointer;
  :hover{
    background-color: #dedede;
  }
`

export const FotoPerfil = styled.img`
  max-height: 100%;
  width: 50px;
  border-radius: 50%;
  margin-right: 8px;
`