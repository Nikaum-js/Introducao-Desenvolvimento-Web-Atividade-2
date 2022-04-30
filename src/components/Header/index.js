import { Link } from "react-router-dom";

import "./styles.css";

export function Header() {
  return (
    <header>
      <figure>
        <h1>
          <strong>+</strong> Saúde
        </h1>
      </figure>

      <nav>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/imc">
              <a>Calculo IMC</a>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <a>Cadastro</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
