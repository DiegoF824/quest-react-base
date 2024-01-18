import { useState } from "react";
import "./App.css";
import Paragraph from "./components/paragraph/paragraph";
import Button from "./components/button/button";

function App() {
  const paragrafoInicial =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum quibusdam alias voluptate nihil, sit dolor incidunt pariatur in, quia quae iusto quo dignissimos placeat repellat voluptas rem unde voluptates.";
  const [valorTextarea, setValorTextarea] = useState(paragrafoInicial);
  const [corSelecionada, setCorSelecionada] = useState("white");

  const handleTextareaChange = (event) => {
    setValorTextarea(event.target.value);
  };
  const handleSelectChange = (event) => {
    setCorSelecionada(event.target.value);
  };

  return (
    <>
      <div>
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          value={valorTextarea}
          onChange={handleTextareaChange}
        ></textarea>

        <br />

        <select
          name="cor-do-texto"
          id="cor-do-texto"
          value={corSelecionada}
          onChange={handleSelectChange}
        >
          <option value="">Escolha a cor do texto</option>
          <option value="Red">Vermelho</option>
          <option value="Blue">Azul</option>
          <option value="Orange">Laranja</option>
          <option value="Yellow">Amarelo</option>
          <option value="Green">Verde</option>
          <option value="Purple">Roxo</option>
        </select>

        <Paragraph paragraph={valorTextarea} textColor={corSelecionada} />

        <div>
          <Button />
          <Button label="Baixar CV" />
        </div>
      </div>
    </>
  );
}

export default App;
