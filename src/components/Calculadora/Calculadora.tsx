import React, { useState } from "react";
import Button from '../Button/Button';
import './style.scss';

export default function Calculadora() {
  const calculatorNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '='];
  const [numeroParaExibicao, setNumerosEstado] = useState({
    number: '1',
  });

  return (
    <>
      <div className="calculator">
        <input type="text" placeholder={numeroParaExibicao.number} disabled />
        {
          calculatorNumber.map((element) => (
            <Button number={element} estadoPai={{ element, setNumerosEstado }} key={element}/>))
        }
      </div>
    </>

  );
};