function calculateMinPrice() {
  const costInput = document.getElementById('costInput');
  const cost_price = parseFloat(costInput.value);

  //Preciso fazer com que a maquina gere um código para cada produto que a vendedora adicione, mas é interessante que ela selecione se quer uma consulta ou adicionar.
  //gostaria também que caso seja adicionado fique salvo no banco de dados para que quando for efetuada a venda ela consiga adicionar o valor da venda para evitar descontos exagerados.
  // esses arquivos poderiam ir direto para o notion para facilitar a somatoria diaria, porem então precisaremos guardar além do produto, datas tambem, subindo tudo automatico.
  if (!isNaN(cost_price)) {
    const min_price_pix = cost_price * 2 + 46.32;
    const min_price_money = cost_price * 2 + 46.32;
    const min_price_debit = cost_price * (1 + 0.0142) * 2 + 46.32;
    const min_price_credit = cost_price * (1 + 0.0317) * 2 + 46.32;
    const min_price_credit_2x = cost_price * (1 + 0.0384) * 2 + 46.32;
    const min_price_credit_3x = cost_price * (1 + 0.0448) * 2 + 46.32;

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
      <p>Valor mínimo no Pix: ${min_price_pix.toFixed(2)}</p>
      <p>Valor mínimo em dinheiro: ${min_price_money.toFixed(2)}</p>
      <p>Valor mínimo no débito: ${min_price_debit.toFixed(2)}</p>
      <p>Valor mínimo no crédito: ${min_price_credit.toFixed(2)}</p>
      <p>Valor mínimo no crédito (2x): ${min_price_credit_2x.toFixed(2)}</p>
      <p>Valor mínimo no crédito (3x): ${min_price_credit_3x.toFixed(2)}</p>
    `;
  } else {
    alert("Por favor, insira um valor válido para o preço de custo.");
  }
}

function resetForm() {
  document.getElementById('costInput').value = '';
  document.getElementById('resultContainer').innerHTML = '';
}
