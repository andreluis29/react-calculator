import React, { useState } from "react";
import Button from '../Button/Button';
import './style.scss';

export default function Calculadora() {
  const calculatorNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '='];
  const [numeroParaExibicao, setNumerosEstado] = useState('1');
  return (
    <>
      <div className="calculator">
        <input type="text" placeholder={numeroParaExibicao} disabled />
        {
          calculatorNumber.map((element, index) => (
            <Button number={element} estadoPai={{ numeroParaExibicao, setNumerosEstado }} />))
        }
      </div>
    </>

  );
};