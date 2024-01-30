import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${style["custom-footer"]} container`}>
      <p>© Todos os direitos reservados</p>
    </footer>
  );
}
