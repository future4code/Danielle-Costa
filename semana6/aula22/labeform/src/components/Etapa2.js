import React from "react";
import Perguntas from "./Perguntas";


class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - Informações de Ensino Superior</h3>
        <Perguntas pergunta={"5. Qual o curso?"} />
        <Perguntas pergunta={"6. Qual unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;
