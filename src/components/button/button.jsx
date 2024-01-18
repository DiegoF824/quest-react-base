import React from "react";
import "./button.css"

const Button = (props) => {
  const alerta = () => {
    window.alert(`A label desse botão é ${props.label}`);
  };

  return <button onClick={alerta}>{props.label}</button>;
};

Button.defaultProps = {
  label: "Clique aqui!",
};

export default Button;
