// Função para obter o nome de usuário registrado
export function getRegisteredUsername() {
    // Recupere o nome de usuário armazenado no localStorage (ou onde quer que esteja armazenando)
    const username = localStorage.getItem("username");
    return username || ""; // Retorna o nome de usuário ou uma string vazia se não estiver definido
  }
  
  // Função para definir o nome de usuário registrado
  export function setRegisteredUsername(username) {
    // Armazene o nome de usuário no localStorage (ou onde preferir)
    localStorage.setItem("username", username);
  }
  