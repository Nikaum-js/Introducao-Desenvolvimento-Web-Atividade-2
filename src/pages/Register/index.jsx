import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import api from "../../service/api";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import AttentionImg from "../../assets/attention.svg";

import "./styles.css";

export function Register() {
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = useState({ nomeCompleto: [] });

  // useEffect(() => {
  //   //seleciona o cep
  //   const cep = document.querySelector("#cep");

  //   //percorre o json enviado pela API e separa apenas a parte que me importa
  //   const showData = (result) => {
  //     for (const campo in result) {
  //       if (document.querySelector("#" + campo)) {
  //         document.querySelector("#" + campo).value = result[campo];
  //       }
  //     }
  //   };

  //   //função para pegar o campo enviado pelo input e colocar ele na API dos correios
  //   cep.addEventListener("blur", (e) => {
  //     //função para encontrar o "-" caso encontrar troque por vazio
  //     let searchTrace;

  //     //regras que eu defini para o fetch
  //     const options = {
  //       method: "GET",
  //       mode: "cors",
  //       cache: "default",
  //     };

  //     //estou enviando os dados para a API dos correios
  //     fetch(`https://viacep.com.br/ws/${searchTrace}/json`, options)
  //       //estou dizendo o que eu quero fazer com a minha promise
  //       .then((response) => {
  //         response
  //           .json()
  //           //estou dizendo o que eu quero fazer com a minha outra promise
  //           .then((data) => showData(data));
  //       })
  //       //caso dê errado eu quero que ele mostre uma mensagem com o erro encontrado
  //       .catch((e) => console.log("Deu um tal erro" + e));
  //   });
  // }, []);

  async function handleSubmitForm(data) {
    try {
      api
        .post("cadastro", data)
        .then((response) => {
          toast.success(response.data.message);

          setTimeout(() => {
            window.location.reload();
          }, "4000");
        })
        .catch((resp) => {
          const response = resp.response;
          let errors = {};
          if (response.status === 422) {
            Object.keys(response.data.errors).forEach((el) => {
              errors = { ...errors, [el[0]]: [el[1]] };
            });
          } else if (response.response.status === 412) {
            console.log("response 412");
          }
        });
    } catch (err) {
      toast.error("Erro ao criar o cadastro!");
    }
  }

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Seus dados</h1>

        <section>
          <div class="box-form-1">
            <div class="content-input">
              <label for="">Nome Completo</label>
              <input
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="Nome Completo"
                {...register("nomeCompleto")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">
                  O campo "nome completo" não pode ter menos de 5 caracteres.
                </p>
              ) : (
                ""
              )}
            </div>

            <div class="content-input">
              <label for="">E-mail</label>
              <input
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="E-mail"
                {...register("email")}
              />
            </div>

            <div class="content-input">
              <label for="">Data de Nascimento</label>
              <input
                className={errors.nomeCompleto ? "error" : ""}
                type="date"
                {...register("dataNascimento")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">
                  O campo "data nascimento" é requerido.
                </p>
              ) : (
                ""
              )}
            </div>

            <div class="content-input">
              <label for="">Sexo</label>
              <select
                name=""
                id=""
                className={errors.nomeCompleto ? "error" : ""}
                {...register("sexo")}
              >
                <option value="" selected>
                  Selecione
                </option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
              {errors.nomeCompleto ? (
                <p className="error-message">O campo "sexo" é requerido.</p>
              ) : (
                ""
              )}
            </div>

            <div class="content-input">
              <label for="">CPF</label>
              <input
                className={errors.nomeCompleto ? "error" : ""}
                type="number"
                placeholder="CPF"
                data-mask="000.000.000-00"
                {...register("cpf")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">
                  O campo "cpf" tem que ter 11 caracteres.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div class="box-form-2">
            <div class="content-input">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="CEP"
                {...register("cep")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">
                  O campo "cep" tem que ter 8 caracteres.
                </p>
              ) : (
                ""
              )}
            </div>
            <div htmlFor="logradouro" class="content-input">
              <label for="">Logradouro</label>
              <input
                id="logradouro"
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="Logradouro"
                {...register("logradouro")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">
                  O campo "logradouro" é requerido.
                </p>
              ) : (
                ""
              )}
            </div>
            <div class="content-input">
              <label for="">Número</label>
              <input
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="Número"
                {...register("numeroLogradouro")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">
                  O campo "numero logradouro" é requerido.
                </p>
              ) : (
                ""
              )}
            </div>
            <div class="content-input">
              <label htmlFor="localidade">Cidade</label>
              <input
                id="localidade"
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">O campo "cidade" é requerido.</p>
              ) : (
                ""
              )}
            </div>

            <div class="content-input">
              <label htmlFor="uf">UF</label>
              <input
                id="uf"
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="UF"
                {...register("uf")}
              />
              {errors.nomeCompleto ? (
                <p className="error-message">O campo "uf" é requerido.</p>
              ) : (
                ""
              )}
            </div>
            <div class="content-input">
              <label for="">Expectativa</label>
              <input
                className={errors.nomeCompleto ? "error" : ""}
                type="text"
                placeholder="Expectativa"
                {...register("expectativa")}
              />
            </div>
          </div>
        </section>

        <div class="form-footer">
          <div class="attention">
            <img src={AttentionImg} alt="attention" />
            <h2>Preencha todos os campos</h2>
          </div>

          <div className="terms">
            <label>Eu aceito todos os termos e condições</label>
            <input type="checkbox" value={true} />
          </div>

          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  );
}
