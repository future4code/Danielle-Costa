import React from "react";
import Opcoes from "./Opcoes";
import Perguntas from "./Perguntas";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - Dados Gerais</h3>
        <Perguntas pergunta={"1. Qual o seu nome?"} />
        <Perguntas pergunta={"2. Qual sua idade?"} />
        <Perguntas pergunta={"3. Qual seu email?"} />
        <Opcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino Médio Incompleto",
            "Ensino Médio Completo",
            "Ensino Superior Incompleto",
            "Ensino Superior Completo"
          ]}
        />
      </div>
    );
  }
}

export default Etapa1;