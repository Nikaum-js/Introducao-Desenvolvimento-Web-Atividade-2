import { Header } from "../../components/Header";
import { toast } from "react-toastify";

import "./styles.css";

export function Imc() {
  function handleImc() {
    toast("🦄 Fiquei com preguiça de trazer o imc pra cá :)", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <>
      <Header />
      <main>
        <section>
          <div class="box-information">
            <h1>Tabela de classificação de IMC</h1>

            <table>
              <thead>
                <tr>
                  <th>IMC</th>
                  <th>CLASSIFICAÇÃO</th>
                  <th>OBESIDADE(GRAU)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>MENOR QUE 18,5</th>
                  <th>MAGREZA</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>ENTRE 18,5 E 24,9</th>
                  <th>NORMAL</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>ENTRE 25,0 E 29,9</th>
                  <th>SOBREPESO</th>
                  <th>1</th>
                </tr>
                <tr>
                  <th>ENTRE 30,0 E 39,9</th>
                  <th>OBESIDADE</th>
                  <th>2</th>
                </tr>
                <tr>
                  <th>MAIOR QUE 40,0</th>
                  <th>OBESIDADE GRAVE</th>
                  <th>3</th>
                </tr>
              </tbody>
            </table>

            <p>
              <strong>O que é IMC:</strong> IMC é a sigla para Índice de Massa
              Corporal, que é um cálculo que serve para avaliar se a pessoa está
              dentro do seu peso ideal em relação à altura.
            </p>
          </div>

          <article>
            <h1>Digite o seu peso e a sua altura para calcularmos o seu IMC</h1>

            <h2>Digite todos os campos</h2>

            <div class="inputs-content">
              <div class="content-input">
                <input required type="text" id="weight" placeholder="Peso" />
              </div>

              <div class="content-input">
                <input required type="text" id="height" placeholder="Altura" />
              </div>
            </div>

            <button onclick={ handleImc() }>Calcular</button>
          </article>
        </section>
      </main>
    </>
  );
}
