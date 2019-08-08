import React from "react";
import './Button.css';

export const Button = ({text, onClickFn}) => (
    <button onClick={onClickFn} className={"button"}> {text}</button>
);