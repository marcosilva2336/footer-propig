// Função para validar os campos do formulário
function validateForm() {
    // Pegando os valores dos campos
    var cnpj = document.forms["contactForm"]["cnpj"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
  
    // Verificando se os campos não estão vazios
    if (cnpj == "" || email == "" || message == "") {
      alert("Por favor, preencha todos os campos do formulário.");
      return false;
    }
  
    // Verificando se o CNPJ possui 14 dígitos
    if (cnpj.length != 14) {
      alert("Por favor, digite um CNPJ válido.");
      return false;
    }
  
    // Verificando se o email possui formato válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, digite um email válido.");
      return false;
    }
  
    // Se a validação passou, enviar os dados para o servidor
    var data = {
      cnpj: cnpj,
      email: email,
      message: message
    };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/contact", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    alert("Formulário enviado com sucesso!");
    return true;
  }
  