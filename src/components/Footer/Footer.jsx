import React from "react";
import './footer.css';
import { Grid } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <ul className="footer__column">
          <li>
            <strong>Acerca de nosotros:</strong>
          </li>
          <li>
            <a href="#Quienes-somos">Quienes somos</a>
          </li>
          <li>
            <a href="#Marca">Marca</a>
          </li>
        </ul>
        <ul className="footer__column">
          <li>
            <strong>Contactanos:</strong>
          </li>
          <li>
            <a href="#Instagram">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/people/Perfumer%C3%ADa-PG/61563439876799/?mibextid=ZbWKwL">
              Facebook
            </a>
          </li>
          <li>
            <a href="#Tik-Tok">Tik-Tok</a>
          </li>
        </ul>
        <ul className="footer__column">
          <li>
            <strong>Terminos y condiciones:</strong>
          </li>
          <li>
            <a href="#Terminos-servicio">Terminos servicio</a>
          </li>
          <li>
            <a href="#Politicas-seguridad">Politicas de seguridad</a>
          </li>
          <li>
            <a href="#Politica-cookies">Politica de cookies</a>
          </li>
        </ul>
      </Grid>
      <p>© 2024 Perfumeria P&G. Todos los derechos reservados.</p>
    </footer>
  );
}
