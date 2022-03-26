const inputNome = document.querySelector("#nomeProduto");
const inputDescricao = document.querySelector("#descricaoProduto");
const inputImagem = document.querySelector("#linkImgProduto");
const inputPreco = document.querySelector("#precoProduto");
const BASE_URL = "https://xp41-produto-api.herokuapp.com";
const form = document.querySelector("form");
const loading = document.querySelector("#loading");

form.onsubmit = async (evento) => {
  evento.preventDefault();
  try {
    loading.style.display = "block";

    const newProduto = {
      price: inputPreco.value,
      name: inputNome.value,
      description: inputDescricao.value,
      poster: inputImagem.value,
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(newProduto),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resposta = await fetch(`${BASE_URL}/produtos`, options);
    const conteudoResposta = await resposta.json();
    console.log(conteudoResposta);

    loading.style.display = "none";
    alert("Deu certo");
  } catch (error) {
    console.log(error);
    loading.style.display = "none";
    alert("Deu ruim");
  }
};
