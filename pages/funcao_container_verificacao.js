document.addEventListener('DOMContentLoaded', function() {
    const inputArquivos = document.getElementById('input_arquivos');
    const textoContainer = document.querySelector('.texto_container');
    const containerVerificacao = document.querySelector('.container_verificacao');
    const botaoCancelar = document.getElementById('botao_cancelar');
    const botaoGerar = document.getElementById('botao_gerar');
  
    // Exibe o container de verificação quando o arquivo for selecionado
    inputArquivos.addEventListener('change', function() {
      const arquivo = inputArquivos.files[0];
  
      if (arquivo) {
        const tipoArquivo = arquivo.type;
        const extensaoArquivo = arquivo.name.split('.').pop().toLowerCase();
  
        // Verifica se o arquivo é .csv ou .pdf
        if (extensaoArquivo === 'csv' || tipoArquivo === 'application/pdf') {
          textoContainer.style.display = 'none'; // Esconde o texto inicial
          containerVerificacao.style.visibility = 'visible'; // Torna o container visível
          containerVerificacao.style.opacity = 1; // Aparece com transição
        } else {
          alert('Por favor, envie um arquivo .csv ou .pdf.');
          inputArquivos.value = ''; // Limpa o campo
          containerVerificacao.style.visibility = 'hidden'; // Esconde o container
          containerVerificacao.style.opacity = 0; // Desaparece com transição
        }
      }
    });
  
    // Ação do botão "Cancelar"
    botaoCancelar.addEventListener('click', function() {
      textoContainer.style.display = 'block'; // Exibe o texto inicial
      containerVerificacao.style.visibility = 'hidden'; // Esconde o container de verificação
      containerVerificacao.style.opacity = 0; // Desaparece com transição
      inputArquivos.value = ''; // Limpa o campo de input
    });
  
    // Ação do botão "Gerar"
    botaoGerar.addEventListener('click', function() {
      alert('Você gerou o insight da planilha!');
      // Aqui você pode adicionar a lógica para gerar o insight
    });
  });
  