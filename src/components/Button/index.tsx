import React from "react";
import './style.scss';

export default function Calculadora(props: { number: number, letter: string }) {
  const { number, letter } = props;
  return (
    <div className="button"> { number === -1 ? letter : number} </div>
  );
}