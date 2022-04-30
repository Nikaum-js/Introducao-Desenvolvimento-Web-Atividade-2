import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import api from "../../service/api";
import { toast } from "react-toastify";

import AttentionImg from "../../assets/attention.svg";

import "./styles.css";

export function Register() {
  const { register, handleSubmit } = useForm();

  async function handleSubmitForm(data) {
    console.log(data);
    try {
      await api.post("cadastro", data);

      toast.success("Cadastro efetuado com sucesso!");
    } catch (err) {
      console.log(err.response);
      toast.error("Erro ao criar o cadastro!");
      toast.error(err.response.data.message);
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
                required
                type="text"
                placeholder="Nome Completo"
                {...register("nomeCompleto")}
              />
            </div>

            <div class="content-input">
              <label for="">E-mail</label>
              <input
                required
                type="text"
                placeholder="E-mail"
                {...register("email")}
              />
            </div>

            <div class="content-input">
              <label for="">Data de Nascimento</label>
              <input required type="date" {...register("dataNascimento")} />
            </div>

            <div class="content-input">
              <label for="">Sexo</label>
              <select name="" id="" {...register("sexo")}>
                <option value="" selected>
                  Selecione
                </option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <div class="content-input">
              <label for="">CPF</label>
              <input
                required
                type="number"
                placeholder="CPF"
                data-mask="000.000.000-00"
                {...register("cpf")}
              />
            </div>
          </div>

          <div class="box-form-2">
            <div class="content-input">
              <label for="">CEP</label>
              <input
                required
                type="text"
                placeholder="CEP"
                data-mask="00000-000"
                {...register("cep")}
              />
            </div>

            <div class="content-input">
              <label for="">Logradouro</label>
              <input
                required
                type="text"
                placeholder="Logradouro"
                {...register("logradouro")}
              />
            </div>

            <div class="content-input">
              <label for="">Número</label>
              <input
                required
                type="text"
                placeholder="Número"
                {...register("numeroLogradouro")}
              />
            </div>

            <div class="content-input">
              <label for="">Cidade</label>
              <input
                required
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
              />
            </div>

            <div class="content-input">
              <label for="">UF</label>
              <input
                required
                type="text"
                placeholder="UF"
                {...register("uf")}
              />
            </div>

            <div class="content-input">
              <label for="">Expectativa</label>
              <input
                required
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

          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </>
  );
}
