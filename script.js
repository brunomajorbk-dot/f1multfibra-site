document.getElementById("formOrcamento").addEventListener("submit", function(e){
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("cidade").value;
  const endereco = document.getElementById("endereco").value;
  const cep = document.getElementById("cep").value;
  const telefone = document.getElementById("telefone").value;
  const plano = document.getElementById("plano").value;

  const mensagem = `Olá! Gostaria de solicitar um orçamento.%0A👤 Nome: ${nome}%0A🏙️ Cidade: ${cidade}%0A📍 Endereço: ${endereco}%0A🏷️ CEP: ${cep}%0A📞 Telefone: ${telefone}%0A💡 Plano de interesse: ${plano}`;

  const url = `https://api.whatsapp.com/send/?phone=5511988861680&text=${mensagem}&type=phone_number&app_absent=0`;
  window.open(url, '_blank');
});