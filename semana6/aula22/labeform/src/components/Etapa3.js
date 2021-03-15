import React from "react";
import Opcoes from "./Opcoes";
import Perguntas from "./Perguntas";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - Informações Gerais de Ensino</h3>
        <Perguntas pergunta={"7. Por que não terminou a graduação?"} />
        <Opcoes
          pergunta={"8. Qual a sua escolaridade?"}
          opcoes={[
            "Nenhum",
            "Curso técnico",
            "Curso de inglês",
            "Curso da Labenu"
          ]}
        />
      </div>
    );
  }
}

export default Etapa3;
