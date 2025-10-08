<div style="max-width:420px;margin:auto;padding:20px;font-family:'Poppins',sans-serif;">
  <h2 style="text-align:center;color:#0a0a0a;">📋 Solicitar Plano</h2>

  <label>Nome completo:</label><br>
  <input type="text" id="nome" placeholder="Seu nome" required><br><br>

  <label>WhatsApp:</label><br>
  <input type="text" id="whatsapp" placeholder="(11) 98886-1680" required><br><br>

  <label>Rua:</label><br>
  <input type="text" id="rua" placeholder="Ex: Rua das Flores, 123" required><br><br>

  <label>Bairro:</label><br>
  <input type="text" id="bairro" placeholder="Ex: Centro" required><br><br>

  <label>Cidade:</label><br>
  <input type="text" id="cidade" placeholder="Ex: São Paulo" required><br><br>

  <label>Plano escolhido:</label><br>
  <select id="plano" required style="width:100%;padding:10px;border-radius:10px;border:1px solid #ccc;font-size:15px;">
    <option value="">Selecione um plano</option>

    <optgroup label="Combos de Internet + TV">
      <option value="Combo 600MB + TV R$ 128,90">Combo 600MB + TV — R$ 128,90</option>
      <option value="Combo 800MB + TV R$ 149,90">Combo 800MB + TV — R$ 149,90</option>
    </optgroup>

    <optgroup label="Planos de Internet">
      <option value="Básico 100MB R$ 79,90">Básico 100MB — R$ 79,90</option>
      <option value="Intermediário 200MB R$ 88,90">Intermediário 200MB — R$ 88,90</option>
      <option value="Avançado 500MB R$ 98,90">Avançado 500MB — R$ 98,90</option>
      <option value="Ultra 600MB R$ 118,90">Ultra 600MB — R$ 118,90</option>
      <option value="Turbo 800MB R$ 139,90">Turbo 800MB — R$ 139,90</option>
    </optgroup>
  </select><br><br>

  <button type="button" onclick="enviarWhatsApp()">📲 Enviar via WhatsApp</button>
</div>

<style>
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 5px;
    font-size: 15px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    background: linear-gradient(135deg, #34c759, #007aff);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  label {
    font-weight: 600;
    color: #0a0a0a;
  }

  select {
    background-color: white;
  }

  optgroup {
    font-weight: bold;
    color: #007aff;
  }

  select:focus, input:focus {
    outline: none;
    border-color: #34c759;
    box-shadow: 0 0 5px rgba(52,199,89,0.5);
  }
</style>

<script>
function enviarWhatsApp() {
  const numero = "5511988861680"; // Seu número com DDI + DDD

  const nome = document.getElementById("nome").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const plano = document.getElementById("plano").value.trim();

  if (!nome || !whatsapp || !rua || !bairro || !cidade || !plano) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  const mensagem = `📝 *Novo formulário de solicitação:*
👤 *Nome:* ${nome}
📱 *WhatsApp:* ${whatsapp}
🏠 *Rua:* ${rua}
📍 *Bairro:* ${bairro}
🏙️ *Cidade:* ${cidade}
⚡ *Plano escolhido:* ${plano}`;

  const texto = encodeURIComponent(mensagem);
  const url = `https://wa.me/${numero}?text=${texto}`;
  window.open(url, "_blank");
}
</script>
